import SingleArticle from '../components/SingleArticle';
import PageLayout from '../components/PageLayout';
const ArticlePage = props => {
  console.log('article page', { props });
  return (
    <PageLayout>
      <SingleArticle />
    </PageLayout>
  );
};

export default ArticlePage;
