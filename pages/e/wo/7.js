import Head from "next/head";
import WO from "../../../comps/WO";

export default function Index() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="http://newsletter.kf.or.kr/news/news_201912/assets/style.css"
          type="text/css"
        />
      </Head>
      <WO
        issues={Issues}
        year={Year}
        thisid="6634"
        anotherid="6649"
        language="en"
      />
    </div>
  );
}

const Year = "202004";

const Issues = [
  {
    name: `Korean Cultural Center Spain -
Korean Classic Music Concert`,
    img: "7_1e.png",
    link: "http://spain.korean-culture.org/es/448/board/138/read/101939"
  },
  {
    name: `Korean Cultural Centre India -
Request for Proposal:
2020 All India K-POP Contest Regional Round`,
    img: "7_2e.jpg",
    link: "http://india.korean-culture.org/en/610/board/414/read/101949"
  },
  {
    name: `Korean Cultural Center UAE –
Group tours to introduce various aspects Korean culture`,
    img: "7_3e.jpg",
    link: "http://uae.korean-culture.org/en/549/contents/421"
  },
  {
    name: `Korean Cultural Center Nigeria –
Excursion Program`,
    img: "7_4e.jpg",
    link: "http://ngr.korean-culture.org/en/829/contents/749"
  },
  {
    name: `London Korean Links - 
Where to start in Korean translated literature`,
    img: "7_5e.jpg",
    link:
      "https://londonkoreanlinks.net/2020/03/17/where-to-start-in-korean-translated-literature"
  },
  {
    name: `Official Korea.net YouTube Channel –
“Korea, Wonderland? 참 이상한 나라”`,
    img: "7_6e.jpg",
    link: "https://youtu.be/xbbU1PBemC4"
  },
  {
    name: `Ministry of Foreign Affairs –
Korea's Fight against COVID-19 “Trust Korea” Campaign`,
    img: "7_7e.jpg",
    link: "https://mofakr.blog.me/221848726998"
  }
];

const Tags = ["프랑스", "전시", "한국", "문화원"];
