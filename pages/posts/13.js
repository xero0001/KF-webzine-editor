const contacts = [
  // { type: "place", name: "아세안문화원 (부산)" },
  // { type: "time", name: "5/12-" },
  // { type: "contact", name: "글로벌센터사업부 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
  { type: "school", name: "스페인 하엔대학교" },
  { type: "student", name: "Manuel Herrador (스페인) " },
];

const contactsE = [
  // { type: "contact", name: "KF Global Center 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
  { type: "school", name: "Universidad de Jaen" },
  {
    type: "student",
    name: "Manuel Herrador (Spain)",
  },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <p className="first">
      안녕하세요? 저는 2019년 4월부터 6개월 동안 서울대학교 보건대학원에서 조영태 교수님의 지도 아래 KF 박사후연구원으로 활동했습니다. 연구하는 동안 킨텍스와 코엑스 등에서 열리는 6개 행사에 참가해 자료를 수집하기도 했습니다. 저는 책상 앞 연구보다 현장에 나가는 연구를 더 좋아했습니다. 개인 인터뷰를 통해 기업과 공공기관의 관점을 알게 되었고 그로 인해 놀라운 정보를 접할 수 있었기 때문입니다. KF의 현장연구 펠로십 덕택에 저는 150쪽 분량의 리포트와 기사를 쓸 수 있었습니다. 기사의 제목은 ‘한국의 최근 순환경제 정책과 방향: 향상의 여지’로, &lt;청정생산저널(Journal of Cleaner Production)&gt; 2020년 7월호에 실렸습니다.
      </p>
      <br />
      <p className="first">
      연구 시간 외에는 다른 펠로들과 함께 멋진 여행을 즐겼습니다. DMZ를 비롯해 인천, 대구, 부산, 진주, 제주 등 다양한 지역을 방문했습니다. 서울 곳곳의 아름다운 절들과 경이로운 풍경을 감상하고 어마어마한 쇼핑센터들, 신나는 놀이공원, 흥미로운 박물관을 찾기도 했습니다. 손에 땀을 쥐게 하는 축구와 야구, e스포츠를 즐겼고 흥미진진한 사격장과 K팝 아이돌 트와이스의 콘서트까지 가보았습니다.
      </p>
      <img src="http://kf.or.kr/newsletter/images/202011/13_2.jpg" className="vertical"/>
      <p className="first">
      저는 스페인, 포르투갈, 일본, 아르헨티나, 베트남, 네덜란드 등지에서도 일한 적이 있지만 한국에서 최고의 시간을 보냈다고 생각합니다. 학문 성과로 보아도 가장 생산적인 경험이었습니다. 호의적 연구 분위기에서 KF 직원 외 많은 분들로부터 아낌없는 지원을 받았습니다. 더 이상 좋을 수 없는 생활조건에서 맛있는 김치까지 즐기고자 하는 학자가 있다면 꼭 KF의 현장연구 펠로십에 지원하라고 하겠습니다. 
      </p>
      <br />
      <p className="first">
      순환경제라는 주제는 매우 광범위합니다. 재벌의 역할이나, 순환성과 관련된 최근 정책으로 높은 이산화탄소 배출을 해결하는 방법 등 구체적인 문제도 많습니다. 저는 유럽공동체와 한국 사이의 순환경제 사업 기회가 전도유망하다고 생각하며 관련 연구를 계속하고 싶습니다. 이것이야말로 포스트 코로나 시대 한국의 지속적 발전에 이로운 촉매제가 되리라 생각하기 때문입니다.
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
      <p className="first">
          Hi there! Beginning in April 2019, I spent a six-month postdoc stay as a KF Field Research Fellow at the Graduate School of Public Health at Seoul National University (SNU), hosted by Professor Cho Youngtae. My activities consisted of both desk and field research to collect data, predominantly during six events taking place at the KINTEX and COEX exhibition centers. I enjoyed the field research more than the desk work, as personal interviews provided sensational input from the point of view of companies and public entities. As a result of the KF Field Research Fellowship, I produced a 150-page report and an article titled “Latest circular economy policy and direction in the Republic of Korea: Room for enhancements” published in the <i>Journal of Cleaner Production</i> in July 2020.
      </p>
      <br />
      <p className="first">
      In terms of leisure time — besides the wonderful trip spent with the KF officials and the rest of the fellows — I had time to visit different regions such as Incheon, Daegu, Busan, Jinju, Jeju Island, and the DMZ, not to mention my explorations of pretty much every corner of the capital, including beautiful temples, gorgeous landscapes, huge malls, impressive amusement parks, interesting museums, thrilling football/baseball/eSports events, an exciting shooting range, and even a Twice (K-pop music group) concert.
      </p>
      <img src="http://kf.or.kr/newsletter/images/202011/13_2.jpg" className="vertical"/>
      <p className="first">
      I have worked in Spain, Portugal, Japan, Argentina, Viet Nam, and the Netherlands, and I had by far the best time in Korea. It was one of the most productive experiences in terms of scientific outcomes as well. If you are a scholar looking to enjoy a favorable research environment, generous support from the KF staff, an unbeatable quality of living, and delicious kimchi, then you should apply for the KF Field Research Fellowship.
      </p>
      <br />
      <p className="first">
      Undoubtedly, the topic of circular economy is quite broad, and additional specific issues beg to be addressed, such as the role of <i>chaebols</i> (large industrial conglomerates) in sustainable product design, or how to tackle high CO2 emissions with recent policies related to circularity. I would like to keep conducting research to support the promising bilateral circular economy business opportunities between the EU and Korea, which will be a highly beneficial catalyst towards the sustainable development of the country in the aftermath of the COVID-19 pandemic.
      </p>
  </>
);

export default {
  type: "normal",
  title: `[KF 방한 펠로 레터]
  한국의 지속가능한 발전과 순환경제 연구`,
  titleEn: `[Letter from a KF Visiting Fellow]
  Circular Economy as Prominent Catalyst 
  towards the Sustainable Development of Korea`,
  category: 2,
  icon: "spain",
  image: "13.jpg",
  vertical: true,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
