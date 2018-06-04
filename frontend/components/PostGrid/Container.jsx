import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { POSTS, CURRENT_USER } from '../../graphql/queries.graphql';
import InfiniteScroll from 'react-infinite-scroller';
import { adopt } from 'react-adopt';

const Composed = adopt({
  posts: (
    <Query
      query={POSTS}
      variables={{
        first: 20,
        skip: 0
      }}
      fetchPolicy="cache-and-network"
      notifyOnNetworkStatusChange={true}
    >
      {() => {}}
    </Query>
  ),
  currentUser: <Query query={CURRENT_USER}>{() => {}}</Query>
});
class PostGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentfetchedSkip: 0
    };
  }
  loadMorePosts = (fetchMore, currentPostCount) => {
    const { currentfetchedSkip } = this.state;
    if (currentfetchedSkip === currentPostCount) return true;
    this.setState({ currentfetchedSkip: currentPostCount }, () =>
      fetchMore({
        variables: {
          skip: currentPostCount,
          first: 20
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          const newUnique = fetchMoreResult.posts.filter(pm => prev.posts.findIndex(pr => pr.id === pm.id) === -1);
          if (newUnique.length === 0) {
            return null;
          }
          const newData = Object.assign({}, prev, {
            posts: [...prev.posts, ...newUnique]
          });
          return newData;
        }
      })
    );
  };

  render() {
    return (
      <Composed>
        {({ posts: { loading, error, networkStatus, data, fetchMore }, currentUser }) => {
          if (loading) <p>Loading...</p>;
          if (error) return `Error! ${error.message}`;
          const {
            posts,
            postsConnection: {
              aggregate: { count }
            }
          } = data;
          const { me } = currentUser.data;
          return (
            <InfiniteScroll
              pageStart={0}
              loadMore={() => (networkStatus === 7 ? this.loadMorePosts(fetchMore, posts.length) : null)}
              hasMore={count > posts.length}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              {this.props.children(posts, me)}
            </InfiniteScroll>
          );
        }}
      </Composed>
    );
  }
}

export default PostGridContainer;
