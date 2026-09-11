// Import the shared page metadata component.
import Head from 'next/head'; // Imports the Head component so the page can use document metadata like the title.
// Import the shared site layout and its title.
import Layout, { siteTitle } from '../components/layout'; // Imports the layout wrapper and the shared siteTitle value used in the page header.
// Import reusable typography styles.
import utilStyles from '../styles/utils.module.css'; // Imports the shared utility CSS classes used across the page.
// Import page-specific homepage styles.
import styles from '../styles/Home.module.css'; // Imports the CSS module for the homepage-specific styling.

// Render the homepage content.
export default function Home() { // Defines and exports the Home page component for this route.
  // Return the shared layout and homepage content.
  return ( // Starts the return statement that renders the page's JSX.
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${styles.intro}`}>
        <p>[Hello, I'm Tad MacPherson, wishing I was in Maui right now!]</p>
        <p>
          (I am looking forward to our {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  ); // Ends the return statement and closes the JSX expression.
} // Closes the Home function block.