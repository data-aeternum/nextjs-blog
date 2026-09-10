// Import the shared page metadata component.
import Head from 'next/head';
// Import the shared site layout and its title.
import Layout, { siteTitle } from '../components/layout';
// Import reusable typography styles.
import utilStyles from '../styles/utils.module.css';
// Import page-specific homepage styles.
import styles from '../styles/Home.module.css';

// Render the homepage content.
export default function Home() {
  // Return the shared layout and homepage content.
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${styles.intro}`}>
        <p>[Hello, I'm Tad MacPherson, wishing I was in Maui right now!]</p>
        <p>
          (It looks like I may have just finished {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}