import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import BaseTemplate from '../components/templates/base/BaseTemplate';
import { mockBaseTemplateProps } from '../components/templates/base/BaseTemplate.mocks';
import { NextPageWithLayout } from '../pages/page';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <BaseTemplate {...mockBaseTemplateProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
