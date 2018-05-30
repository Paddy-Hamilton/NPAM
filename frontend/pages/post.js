import SinglePost from '../components/SinglePost';
import PageLayout from '../components/PageLayout';
const PostPage = ({ query: { id } }) => {
  return (
    <PageLayout>
      <SinglePost id={id} />
    </PageLayout>
  );
};

export default PostPage;
