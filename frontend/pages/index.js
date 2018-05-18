import React from 'react';
import Typography from '@material-ui/core/Typography';
import withData from '../lib/withData';
import PageLayout from '../components/PageLayout';
import ArticleGrid from '../components/ArticleGrid';
import GetPostQuery from '../components/GetPostQuery';
import CreatePostBtn from '../components/CreatePost';
import CreatePostModal from '../components/CreatePostModal';

class Index extends React.Component {
  render() {
    return (
      <PageLayout>
        <GetPostQuery render={posts => <ArticleGrid posts={posts} />} />
        <CreatePostBtn />
        <CreatePostModal />
      </PageLayout>
    );
  }
}

export default Index;
