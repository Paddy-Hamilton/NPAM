import React from 'react';
import Typography from '@material-ui/core/Typography';
import withRoot from '../src/withRoot';
import PageLayout from '../components/PageLayout';
import ArticleGrid from '../components/ArticleGrid';
import GetPostQuery from '../components/GetPostQuery';

class Index extends React.Component {
  render() {
    return (
      <PageLayout>
        <GetPostQuery render={allPosts => <ArticleGrid allPosts={allPosts} />} />
      </PageLayout>
    );
  }
}

export default withRoot(Index);
