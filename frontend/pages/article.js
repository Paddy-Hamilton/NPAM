import SingleArticle from '../components/SingleArticle';
import PageLayout from '../components/PageLayout';
const ArticlePage = ({ query: { id } }) => {
  return (
    <PageLayout>
      <SingleArticle id={id} />
    </PageLayout>
  );
};

export default ArticlePage;
