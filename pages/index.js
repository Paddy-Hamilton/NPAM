import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withRoot from '../src/withRoot';
import PageLayout from '../components/PageLayout';
import ArticleGrid from '../components/ArticleGrid';
import { Query } from 'react-apollo';
import GET_fesPOSTS from '../src/graphql/posts.graphql';
console.log({ GET_fesPOSTS });

class Index extends React.Component {
  render() {
    return (
      <PageLayout>
        <Query query={GET_fesPOSTS}>
          {({ loading, error, data }) => {
            console.log({ data });
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return <ArticleGrid items={data.allPosts} />;
          }}
        </Query>
      </PageLayout>
    );
  }
}

// Index.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withRoot(Index);
