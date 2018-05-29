import React from 'react';
import PageLayout from '../components/PageLayout';
import GetPostQuery from '../components/GetPostQuery';
import ArticleGrid from '../components/ArticleGrid';
import CreatePostBtn from '../components/CreatePost';
import EditPostModal from '../components/EditPostModal';
import { CURRENT_USER } from '../graphql/queries.graphql';
import { Query } from 'react-apollo';
class Index extends React.Component {
  render() {
    return (
      <PageLayout>
        <GetPostQuery render={(posts, currentUser) => <ArticleGrid posts={posts} currentUser={currentUser} />} />
        <Query query={CURRENT_USER}>
          {({ loading, error, data: { me } }) => {
            if (loading || !me) return null;
            if (error) return console.error(error);
            return (
              <React.Fragment>
                <CreatePostBtn />
                <EditPostModal />
              </React.Fragment>
            );
          }}
        </Query>
      </PageLayout>
    );
  }
}

export default Index;
