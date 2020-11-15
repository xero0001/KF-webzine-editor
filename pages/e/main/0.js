import Head from "next/head";
import Main from "../../../comps/Main_e";

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
      <Main />
    </div>
  );
}

const Title = `코리아나 일본어판 100호 발간 기념 행사`;

const Image = "http://kf.or.kr/newsletter/images/202007/banner.jpg";

const Content = `대한민국 대표 한국문화예술 소개 전문 외국어 종합 계간지 『코리아나』의 일본어판 통권 제 100호가 발간되었습니다. 1988년에 창간된 『코리아나』 일본어판은 2019년 겨울호를 기점으로 100호가 출간되었습니다.
KF는 이번 『코리아나』 일본어판 100호 발간을 계기로 2월 28일(금요일) 오전 10시부터 서울 프레지던트 호텔에서 ‘한-일 문화교류의 수용과 변용’을 주제로 심포지엄을 개최합니다.
이번 심포지엄에서는 『코리아나』 일본어판 편집장인 김종덕 한국외대 일본언어문화학부 명예교수, 이용미 명지전문대학 일본어과 교수, 가토 타케시 일본국제교류기금 서울문화센터 소장 그리고 고지마 나오코 일본 릿쇼대학 문학부 교수가 한일 문화교류 관련하여 유익하고 흥미로운 발표를 진행할 예정입니다.
『코리아나』 일본어판 100호 발간 기념 행사를 통해 최근 경색된 한일 관계에 대한 해결의 실마리를 찾을 수 있기를 희망합니다.
『코리아나』 일본어판은 웹진(www.koreana.or.kr)에서도 만날 수 있습니다.`;

const Contacts = [
  { type: "place", name: "서울" },
  { type: "time", name: "2/28" },
  { type: "contact", name: "문화예술사업부 064-804-1148" },
  { type: "email", name: "siim@kf.or.kf" },
];

const Tags = ["코리아나", "100호", "심포지엄", "일본"];
