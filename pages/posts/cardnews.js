const contacts = [
  // { type: "place", name: "아세안문화원 (부산)" },
  // { type: "time", name: "5/12-" },
  // { type: "contact", name: "글로벌센터사업부 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
];

const contactsE = [
  // { type: "contact", name: "KF Global Center 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <img
        src="http://kf.or.kr/newsletter/images/202011/cardnews_1.jpg"
        alt=""
        className="vertical"
      />
      <img
        src="http://kf.or.kr/newsletter/images/202011/cardnews_2.jpg"
        alt=""
        className="vertical"
      />
      <img
        src="http://kf.or.kr/newsletter/images/202011/cardnews_3.jpg"
        alt=""
        className="vertical"
      />
      <img
        src="http://kf.or.kr/newsletter/images/202011/cardnews_4.jpg"
        alt=""
        className="vertical"
      />
      <p className="first">
        아세안문화원 유튜브 채널: <a href="https://www.youtube.com/c/ASEANCultureHouse" target="_blank">https://www.youtube.com/c/ASEANCultureHouse</a>
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <img
      src="http://kf.or.kr/newsletter/images/202011/cardnews_e_1.jpg"
      alt=""
      className="vertical"
    />
    <img
      src="http://kf.or.kr/newsletter/images/202011/cardnews_e_2.jpg"
      alt=""
      className="vertical"
    />
    <img
      src="http://kf.or.kr/newsletter/images/202011/cardnews_e_3.jpg"
      alt=""
      className="vertical"
    />
    <img
      src="http://kf.or.kr/newsletter/images/202011/cardnews_e_4.jpg"
      alt=""
      className="vertical"
    />
      <p className="first">
        ASEAN Culture House YouTube Channel: <a href="https://www.youtube.com/c/ASEANCultureHouse" target="_blank">https://www.youtube.com/c/ASEANCultureHouse</a>
      </p>
  </>
);

export default {
  type: "unnormal",
  title: `[KF 카드뉴스]
  AKF ASEAN-Korea Futurist 4기 미션을 시작합니다`,
  titleEn: `[KF Card News]
  4th ASEAN-Korea Futurist Group Goes into Action `,
  category: 1,
  icon: "magazine",
  image: "1.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
