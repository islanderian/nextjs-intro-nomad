import Head from "next/head"; //NextJS가 제공하는 head

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
