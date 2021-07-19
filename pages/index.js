import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
    </Layout>
  );
}
