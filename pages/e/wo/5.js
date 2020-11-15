import Head from "next/head";
import Calendar from "../../../comps/Calendar";

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
      <Calendar
        language="en"
        category="What's On"
        icon="global"
        title={Title}
        image={Image}
        images={Images}
        imageType="vertical"
        imageAlign="22"
        events={Events}
        contacts={Contacts}
        tags={Tags}
        thisid="6632"
        anotherid="6647"
      />
    </div>
  );
}

const Title = `April 2020 EVENTS`;

const Image = "http://newsletter.kf.or.kr/news/news_202002/5.jpg";
const Images = [];

const Content = `KF는 주한레바논대사관과 함께 아랍어의 미적, 기능적 조화를 보여주는 타이포그래피 전시 「시각적 동의어」를 2월 11일부터 3월 13일까지 KF 갤러리에서 개최합니다. 이번 전시는 세계 가장 위대한 언어 중 하나로 알려진 아랍어의 역사와 기원을 기반으로 중동의 다채로운 문화유산을 홍보하고자 기획되었습니다. 레바논대학교를 중심으로 모인 중동 청년들이 개성을 살려 디자인한 타이포그래피 작품 100여 점을 선보입니다. 전시 연계행사로 레바논대학교 교수 (디자이너)의 특강 등 다양한 프로그램이 준비되어 있으니 많은 관심과 참여 바랍니다. 자세한 정보는 KF 홈페이지를 통해 확인하실 수 있습니다.`;

const Events = [
  {
    date: "4/1-4/30",
    title: `Recruitment of participants for 2020 Eurasian Youth Academy`,
    place: "South Korea and Central Asian Countries"
  },
  {
    date: "4/1-5/20",
    title: `ASEAN Culture House-Asia Culture Institute Special Co-Operative Exhibition:
    <i>Light of ASEAN, One Community and Harmony</i>`,
    place: "Special Exhibition Gallery, ASEAN Culture House (Busan)"
  },
  {
    date: "3/2-4/24",
    title: `The 3rd ASEAN Culture House Photo & Video Contest`,
    place: "ASEAN Culture House (Busan)"
  }
];

const Contacts = [
  { type: "place", name: "KF갤러리(서울)" },
  { type: "time", name: "2/11-3/13" },
  { type: "contact", name: "글로벌센터사업부 02-2151-6520" },
  { type: "email", name: "kfcenter@kf.or.kf" }
];

const Tags = [];
