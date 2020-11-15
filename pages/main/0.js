import Head from "next/head";
import Normal from "../../comps/Main";

export default function Index() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="http://newsletter.kf.or.kr/news/news_202005/assets/style.css"
          type="text/css"
        />
      </Head>
      <Normal />
    </div>
  );
}
