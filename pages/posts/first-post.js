// Import the script component used for the Facebook SDK.
import Script from 'next/script';
// Import the component that sets the page title.
import Head from 'next/head';
// Import the client-side navigation component.
import Link from 'next/link';
// Import the shared layout for the post page.
import Layout from '../../components/layout';
// Import the post page's custom styles.
import styles from '../../styles/FirstPost.module.css';

// Render the first post page.
export default function FirstPost() {
    // Return the shared layout and post content.
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => {
                    // Confirm that the Facebook SDK finished loading.
                    console.log(`script loaded correctly, window.FB has been populated`)
                }}
            />
            <section className={styles.post}>
                <h1 className={styles.title}>First Post</h1>
                <h2>
                    <Link className={styles.link} href="/">Back to home</Link>
                </h2>
            </section>
        </Layout>
    );
}