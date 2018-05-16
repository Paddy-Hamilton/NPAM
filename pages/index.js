import React from 'react';
import Typography from '@material-ui/core/Typography';
import withData from '../lib/withData';
import PageLayout from '../components/PageLayout';
import ArticleGrid from '../components/ArticleGrid';
import GetPostQuery from '../components/GetPostQuery';
import CreatePostBtn from '../components/CreatePost';

class Index extends React.Component {
  render() {
    return (
      <PageLayout>
        <GetPostQuery render={allPosts => <ArticleGrid allPosts={allPosts} />} />
        <CreatePostBtn />
      </PageLayout>
    );
  }
}

export default withData(Index);
