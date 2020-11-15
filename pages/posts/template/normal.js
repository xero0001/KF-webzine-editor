const contacts = [
  { type: "place", name: "공공외교주간 홈페이지 www.pdweek.or.kr" },
  { type: "time", name: "11/12-11/15" },
  { type: "contact", name: "KF 글로벌센터사업부 02-2151-6526" },
  { type: "email", name: "pdweek@kf.or.kr" },
];

const contactsE = [
  { type: "place", name: "Public Diplomacy Week website: www.pdweek.or.kr" },
  { type: "time", name: "11/12–11/15" },
  {
    type: "contact",
    name: "KF Global Center	02-2151-6526",
  },
  { type: "email", name: "pdweek@kf.or.kr" },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <p className="first">
        KF는 공공외교에 대한 우리 국민의 관심과 이해를 높이고자 ‘제3회 공공외교주간: 코로나-19 시대의 공공외교’를 11월 12일부터 4일간 공공외교주간 홈페이지(<a href="http://www.pdweek.or.kr/" target="_blank">www.pdweek.or.kr/</a>)에서 비대면으로 개최합니다.
      </p>
      <p>
        이번 행사에는 공공외교 최전선의 전문가들과 함께 코로나-19 시대의 공공외교를 살펴보고, 다양한 분야에서 위기의 순간을 기회로 만든 인사들의 공공외교 활동 이야기를 들어봅니다. 또한, 주한외국공관이 소개하는 각국의 정보를 만나보실 수 있으며, 내 방에서 즐길 수 있는 문화행사도 마련되어 있습니다. 공공외교 분야로 진로를 모색하는 청년을 위한 프로그램도 제공합니다.
      </p>
      <p>
        이 행사는 공공외교에 관심있는 분이라면 누구나 무료로 참여할 수 있습니다. KF뉴스레터 구독자분들의 많은 관심 바랍니다!
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <p className="first">
    From November 12 through 15, the KF presents the 3rd Public Diplomacy Week. This year’s theme is “Public Diplomacy in the COVID-19 Era,” and the event, which aims to enhance people’s interest in and understanding of public diplomacy, will be available online through its digital platform (<a href="http://www.pdweek.or.kr/" target="_blank">www.pdweek.or.kr/</a>).
    </p>
    <p>
      Experts on the frontline of public diplomacy will look into non-governmental diplomatic efforts made since the start of the COVID-19 pandemic and introduce public diplomacy activities in various fields that have turned crisis into opportunity. Foreign embassies in Korea will provide information about their respective countries, and cultural events will be offered for participants to enjoy online from the safety of their homes. The Public Diplomacy Week will also offer events specifically catering to young adults who are interested in pursuing public diplomacy-related careers. The four-day event is free of charge and open to all and who are interested in public diplomacy. All KF Newsletter readers are welcome to join! 
    </p>
  </>
);

export default {
  type: "normal",
  title: "제3회 공공외교주간 개최",
  titleEn: "3rd Public Diplomacy Week Begins November 12",
  category: 0,
  icon: "global",
  image: "1.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
