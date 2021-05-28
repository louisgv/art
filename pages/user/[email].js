import Layout from "../../components/layout";
import { getUser } from "../../lib/user";

// We supply the data for nextjs to render the page
export async function getStaticProps({ params: { email } }) {
  const allUsers = await getUser();

  const user = allUsers.filter((u) => u.email === email)[0];

  return {
    props: {
      user,
    },
  };
}

// We tell nextjs what to pre-rerender
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const allUsers = await getUser();
  // Get the paths we want to pre-render based on posts
  const paths = allUsers.map((user) => ({
    params: { email: user.email },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default function User({ user: { email, name } }) {
  return (
    <Layout>
      <h2>{name}</h2>
      <h3>{email}</h3>
    </Layout>
  );
}
