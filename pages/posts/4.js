const contacts = [
  { type: "place", name: "아세안문화원 (부산)" },
  { type: "time", name: "11/7-11/8" },
  { type: "contact", name: "문화사업부 051-775-2045" },
  { type: "email", name: "chdahe@kf.or.kr" },
];

const contactsE = [
  {
    type: "place",
    name: "ASEAN Culture House in Busan",
  },
  { type: "time", name: "11/7–11/8" },
  {
    type: "contact",
    name: "Performing Arts and Exhibition Department 051-775-2045",
  },
  { type: "email", name: "chdahe@kf.or.kr" },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <p className="first">
      KF 아세안문화원은 한국과 말레이시아의 수교 60주년을 맞아 ‘쿠알라룸푸르의 밤-말레이시아 영화 상영회’를 11월 7일과 8일 이틀간 개최합니다. 이 기간에는 주한말레이시아대사관에서 추천한 3편의 재미있는 말레이시아 영화가 상영됩니다. 애디위라쿠 선생과 학생들이 합창대회를 준비하는 과정을 그리는 실화 바탕의 감동적인 이야기 &lt;마이 슈퍼히어로즈(2017)&gt;, 쿠알라룸푸르를 배경으로 한 범죄 스릴러 &lt;쿠알라룸푸르의 밤(2018)&gt;, 말레이시아의 인기 TV 시리즈를 리메이크한 애니메이션 &lt;비밀요원 알리 극장판(2019)&gt;를 만나보실 수 있습니다. 자세한 작품 정보와 상영 일정은 아세안문화원 홈페이지(<a href="https://www.ach.or.kr" target="_blank">www.ach.or.kr</a>)에서 확인하세요!
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <p className="first">
    On the weekend of November 7–8, the ASEAN Culture House in Busan, operated by the KF, will present “Fly by Night,” a Malaysian film screening event held in celebration of the 60th anniversary of Korean-Malaysian diplomatic relations. The program will feature three Malaysian films recommended by the Malaysian Embassy in Korea. Adiwiraku, a 2017 drama, warms hearts through the true story of a rural schoolteacher and her students preparing for a choral speaking competition. Fly By Night is a 2018 crime thriller set in Kuala Lumpur, and Ejen Ali: The Movie is the 2019 animated version of a popular TV series.</p>
<p>Detailed information and the screening schedule are available on the ACH website (<a href="https://www.ach.or.kr" target="_blank">www.ach.or.kr</a>). 
    </p>
  </>
);

export default {
  type: "normal",
  title: "쿠알라룸푸르의 밤 – 말레이시아 영화 상영회",
  titleEn: `‘Fly by Night’: ACH Hosts Malaysian Film Screenings`,
  category: 0,
  icon: "culture",
  image: "4.jpg",
  vertical: true,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
