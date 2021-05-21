import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Camilla. I'm passionate about Web Development and Geogprahic Information Systems.
          I love coding in Javascript and Java.
        </p>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h1 className="title">
        Go to{' '}
        <Link href="/posts/first-post">
        <a>this page!</a>
  </Link>
</h1>

    </Layout>
  )
}