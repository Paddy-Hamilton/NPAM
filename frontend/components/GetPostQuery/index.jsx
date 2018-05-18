import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { ALL_POST } from '../../graphql/queries.graphql';
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
      <Query
        query={ALL_POST}
        variables={{
          first: 20,
          skip: 0
        }}
        fetchPolicy="cache-and-network"
        notifyOnNetworkStatusChange={true}
      >
        {({
          loading,
          error,
          networkStatus,
          data,
          // data: {
          //   posts,
          //   postsConnection: {
          //     aggregate: { count }
          //   }
          // },
          fetchMore
        }) => {
          if (loading) <p>Loading...</p>;
          if (error) return `Error! ${error.message}`;
          console.log('GetPostQuery', { data });
          return (
            <p>Help</p>
            // <InfiniteScroll
            //   pageStart={0}
            //   loadMore={() => (networkStatus === 7 ? this.loadMorePosts(fetchMore, posts.length) : null)}
            //   hasMore={count > posts.length}
            //   loader={
            //     <div className="loader" key={0}>
            //       Loading ...
            //     </div>
            //   }
            // >
            //   {this.props.render(posts)}
            // </InfiniteScroll>
          );
        }}
      </Query>
    );
  }
}

export default GetPostQuery;
