import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { getUser } from "../lib/user";
import useSWR from "swr";

import { between } from "./api/randomid";

// Static/compile time fetching
// Data is at T1
// dev compile the app ->
//   app get static props data at T1
// User request the app -> app serve T1

// Data is at T2
// User request the app -> app serve T1

// Developer compile the app again ->
//   app get static props data at T2
//   User request the app -> app serve T2

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const allUsers = await getUser();

  return {
    props: {
      allPostsData,
      allUsers,
      number: between(-100, -200),
    },
  };
}

// Server fetching
// Data is at T1
// User request the app -> server fetch then serve data at T1

// Data is at T2
// User request the app -> server fetch then serve data at T2

// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }

// Client fetching
// Data is at T1
// User request the app -> server fetch then serve data at T1

// Data is at T2
// User request the app -> server fetch then serve data at T2

export default function Home({ allPostsData, allUsers, number }) {
  const { data, revalidate } = useSWR("api/randomid");
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle} - {number}
        </title>
      </Head>
      <section className={utilStyles.headingMd}>
<<<<<<< HEAD
        <p>Hello, I'm Camilla. I'm passionate about Web Development and Geogprahic Information Systems.
        I love coding in Javascript and Java.
        </p>

=======
        <h2>Your lucky number is: {data?.number}</h2>
        <button onClick={() => revalidate()}>Redraw</button>
        <p>
          Hello, I'm Camilla. I'm passionate about Web Development and
          Geogprahic Information Systems. I love coding in Javascript and Java.
        </p>
>>>>>>> de4442d54b6546ad19787c6d31c7f84042fb10fd
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h1 className="title">
        Go to
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
<<<<<<< HEAD
=======
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
>>>>>>> de4442d54b6546ad19787c6d31c7f84042fb10fd

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>User</h2>
        <ul className={utilStyles.list}>
          {allUsers.map(({ name, email, id }) => (
            <li className={utilStyles.listItem} key={email + id}>
              {name}
              <br />
              {email}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
