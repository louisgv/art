import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.heading2X1}>Arts</h1>
        <ul className={utilStyles.list}>
          <li>
            <Link href="/arts/donuts">Donuts</Link>
          </li>
          <li>
            <Link href="/arts/planets">Planets</Link>
          </li>
          <li>
            <Link href="/arts/mobius-strip">Mobius Strip</Link>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.heading2X1}>Tools</h1>
        <ul className={utilStyles.list}>
          <li>
            <Link href="/population">Population</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
