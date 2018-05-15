import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import GET_POSTS from '../../src/graphql/posts.graphql';
import GET_POSTS_COUNT from '../../src/graphql/postsCount.graphql';
import InfiniteScroll from 'react-infinite-scroller';

class GetPostQuery extends Component {
  loadMorePosts = (fetchMore, allPosts) => {
    fetchMore({
      variables: {
        skip: allPosts.length,
        first: 20
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          allPosts: [...prev.allPosts, ...fetchMoreResult.allPosts]
        });
      }
    });
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
            >
              {({ loading, error, data: { allPosts }, fetchMore }) => {
                if (loading) <p>Loading...</p>;
                if (error) return `Error! ${error.message}`;
                return (
                  <InfiniteScroll
                    pageStart={0}
                    loadMore={() => this.loadMorePosts(fetchMore, allPosts)}
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
