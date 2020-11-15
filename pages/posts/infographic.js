const contacts = [
  // { type: "place", name: "아세안문화원 (부산)" },
  // { type: "time", name: "5/12-" },
  // { type: "contact", name: "글로벌센터사업부 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
  // { type: "school", name: "리스본대학교" },
  // { type: "student", name: "최은희 KF 한국어 객원교수" },
];

const contactsE = [
  // { type: "contact", name: "KF Global Center 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
  // { type: "school", name: "University of Lisbon " },
  // {
  //   type: "student",
  //   name: "Eun Hee Choi, KF Visiting Professor of Korean Language",
  // },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <p className="first">
      한국 콘텐츠의 세계적 인기를 실감할 때가 있으신가요?  한국콘텐츠진흥원에 따르면 해마다 꾸준히 증가해온 콘텐츠 수출액이 작년에는 사상 처음으로 100억 달러를 돌파했습니다. 가장 크게 성장한 분야는 만화 산업으로 전년보다 13.6퍼센트가 증가했고, 음악 산업이 근소한 차이로 뒤를 이었습니다. 전체 수출액에서 가장 큰 비중을 차지하는 게임 수출액도 8.9 퍼센트 증가했습니다. 국경과 문화 차이를 초월하여 더 많은 사람들에게 다가서는 콘텐츠는 한국의 새로운 매력 자산이자 경쟁력입니다.
      </p>
      <img src="http://kf.or.kr/newsletter/images/202011/infographic.jpg" alt="" />
      <img src="http://kf.or.kr/newsletter/images/202011/infographic_2.jpg" alt="" />
      <p className="first">
      * 본 인포그래픽은 한국콘텐츠진흥원의 ‘2019 하반기 및 연간 콘텐츠산업 동향분석보고서’(기준시점 2019. 12. 31)와 ‘2019 콘텐츠산업 통계조사 보고서’(기준시점 2018. 12. 31)의 내용을 바탕으로 구성하였습니다.
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <p className="first">
    Have you noticed how popular Korean media has become worldwide? According to the Korea Creative Content Agency, Korean media exports have increased every year and have surpassed the USD 10 billion mark for the first time last year. At 13.6 percent, <i>manhwa</i> (comic books, webtoons, animated cartoons, etc.) registered the highest growth, followed closely by music. The outbound sale of games, which occupy the largest portion of total media exports, increased by 8.9 percent. Korean media appeals to a growing number of people worldwide, transcending national boundaries and cultural differences.
    </p>
    <img src="http://kf.or.kr/newsletter/images/202011/infographic.jpg" alt="" />
    <img src="http://kf.or.kr/newsletter/images/202011/infographic_2.jpg" alt="" />
    <p className="first">
    *This infographic has been produced on the basis of data from the Korea Creative Content Agency’s <i>Analysis Report on the Trends in Contents Industries for the Latter Half of 2019 and by the Year</i> as of December 31, 2019, and the <i>2019 Statistical and Analytical Report on Contents Industries</i> as of December 31, 2018. 
    </p>
  </>
);

export default {
  type: "unnormal",
  title: `[Infographic]
  K뷰티가 가장 좋은 이유`,
  titleEn: `[Infographic]
  Why Is K-beauty the No. 1 Choice?`,
  category: 3,
  icon: "",
  image: "13.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
