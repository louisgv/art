import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return  (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h1>Camilla's first post</h1>
      <p>
        Hello, this is my first post.
      </p>
      <p>
        Nothing to see here. I am trying to get to 25 commit before 11:59PM.
        
      </p>
      <h2>
        Why it's important to not procrastinate:
      </h2>
      <p>
        So you don't have to type meaningless stuff to reach
        25 commits.I am writing random stuff. I won't reach
        25 commits because I ran out of time. I did not make it in time but I will
        keep trying to make it to 25 commit before I sleep.
      </p>
    </Layout>
  )
}