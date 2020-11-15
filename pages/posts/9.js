const contacts = [
  { type: "place", name: "F1963 스퀘어 (부산)" },
  { type: "time", name: "10/30-11/1" },
  { type: "contact", name: "문화사업부 051-775-2026" },
  { type: "email", name: "syjung@kf.or.kr" },
];

const contactsE = [
  { type: "place", name: "F1963 Square, Busan" },
  { type: "time", name: "10/30-11/1" },
  {
    type: "contact",
    name: "Performing Arts and Exhibition Department: 051-775-2026",
  },
  { type: "email", name: "syjung@kf.or.kr" },
];

const contacts2 = [
  // { type: "contact", name: "학술교육사업부 051-775-2032" },
  // { type: "email", name: "mhpark@kf.or.kr" },
];

const contacts2E = [
  // {
  //   type: "contact",
  //   name: "Academic and Educational Programs Department 051-775-2032",
  // },
  // { type: "email", name: "mhpark@kf.or.kr" },
];

const Content = () => {
  return (
    <>
      <img src="http://kf.or.kr/newsletter/images/202010/9.jpg" alt="" />
      <p className="caption">
        지난해 열린 {"<"}메콩바자: 수공예품과 디자인 상품{">"} 전시에서 선보였던
        상품들
      </p>
      <p className="first">
        한-아세안 11개국의 수공예품을 한 자리에서 만나는 ‘2020 한-아세안
        공예장터’가 10월 30일부터 3일간 부산 수영구 F1963 스퀘어에서 개최됩니다.
        각 나라별 공예문화의 전통과 현재를 한 눈에 살펴볼 수 있는 자리로,
        직조‧염색, 칠, 자개, 도자, 금속, 나무 등 다양한 소재와 기법을 활용한
        생활용품, 패션용품, 주방용품 수백 종을 전시, 판매합니다. 뿐만 아니라
        공예를 배우고 체험할 수 있는 공예문화 워크숍, 아세안 이주민 공예작가의
        공방 등도 운영합니다.
      </p>
      <p>
        이 행사는 사회적‧환경적 가치를 함께 고려하는 ‘착한 소비’를 지향하며,
        각국 공예 분야의 사회적 기업 및 공정무역 기업과 함께할 예정입니다. ‘2020
        한-아세안 공예장터’에서 우리에게 가깝고도 친숙한, 그러나 당분간은 쉽게
        떠날 수 없는 아세안으로의 여행을 즐겨 보시기 바랍니다.
      </p>
      <br />
      <p className="first">
        *코로나바이러스감염증-19 방역을 위해 아세안문화원을 잠시 벗어나 실외
        문화공간에서 개최되는 행사입니다. 정부의 방역관리 지침을 준수하며,
        관람객의 안전을 최우선으로 고려합니다.
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <img src="http://kf.or.kr/newsletter/images/202010/9.jpg" alt="" />
    <p className="caption">
      Crafts on show and sale at last year’s Bazaar Mekong exhibition
    </p>
    <p className="first">
      For three days, from October 30 to November 1, the 2020 ASEAN-Korea Craft
      Market will be open to the public at F1963 Square in Busan’s Suyeong
      District, featuring handicrafts of the 10 ASEAN countries and Korea and
      offering a rare chance to find traditional and contemporary crafts of the
      11 nations in one place.
    </p>
    <p>
      On display and on sale will be hundreds of household goods, fashion items,
      and kitchen utensils made with a variety of skills, such as weaving and
      dyeing, and an abundance of materials, including lacquerware,
      mother-of-pearl, ceramics, metal, and wood. There will also be a hands-on
      craft culture workshop where visitors can learn making crafts of their own
      and a craft studio for ASEAN artists who have settled in Korea.
      <br />
      With the aim of promoting ethical consumer behavior considering social
      values and the environment, social enterprises and fair trade companies
      from the ten ASEAN countries and Korea will be participating in the market
      as well. <br />
      Shoppers are invited to explore Southeast Asia through the 2020
      ASEAN-Korea Craft Market, at a time when visiting the region in person
      will remain difficult for the foreseeable future due to the COVID-19
      pandemic.
      <br />
    </p>
    <br />
    <p className="first">
      Please note that the market will not be held at the ASEAN Culture House
      but in an outdoor space in order to help prevent the spread of COVID-19.
      The KF will abide by the government’s social distancing guidelines to
      prevent infections, giving top priority to the safety of visitors.
    </p>
  </>
);

export default {
  type: "unnormal",
  title: `2020년 11월 KF 행사안내`,
  titleEn: `November 2020 EVENTS`,
  category: 0,
  icon: "exhibition",
  image: "2.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
