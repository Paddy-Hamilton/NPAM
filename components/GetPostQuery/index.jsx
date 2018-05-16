import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import GET_POSTS from '../../src/graphql/posts.graphql';
import GET_POSTS_COUNT from '../../src/graphql/postsCount.graphql';
import InfiniteScroll from 'react-infinite-scroller';

class GetPostQuery extends Component {
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
          const newUnique = fetchMoreResult.allPosts.filter(
            pm => prev.allPosts.findIndex(pr => pr.id === pm.id) === -1
          );
          if (newUnique.length === 0) {
            return null;
          }
          const newData = Object.assign({}, prev, {
            allPosts: [...prev.allPosts, ...newUnique]
          });
          return newData;
        }
      })
    );
  };

  render() {
    return (
      <Query query={GET_POSTS_COUNT}>
        {({
          loading,
          error,
          data: {
            _allPostsMeta: { count }
          }
        }) => {
          if (loading) <p>Loading...</p>;
          if (error) return `Error! ${error.message}`;

          return (
            <Query
              query={GET_POSTS}
              variables={{
                first: 10,
                skip: 0
              }}
              fetchPolicy="cache-and-network"
              notifyOnNetworkStatusChange={true}
            >
              {({ loading, error, networkStatus, data: { allPosts }, fetchMore }) => {
                if (loading) <p>Loading...</p>;
                if (error) return `Error! ${error.message}`;
                return (
                  <InfiniteScroll
                    pageStart={0}
                    loadMore={() => (networkStatus === 7 ? this.loadMorePosts(fetchMore, allPosts.length) : null)}
                    hasMore={count > allPosts.length}
                    loader={
                      <div className="loader" key={0}>
                        Loading ...
                      </div>
                    }
                  >
                    {this.props.render(allPosts)}
                  </InfiniteScroll>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default GetPostQuery;
