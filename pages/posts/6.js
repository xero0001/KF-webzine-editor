const contacts = [
  { type: "place", name: "제주" },
  { type: "time", name: "11/6" },
  { type: "contact", name: "인적교류사업부	02-2151-6557" },
  { type: "email", name: "cecilia@kf.or.kr" },
];

const contactsE = [
  { type: "place", name: "Jeju" },
  { type: "time", name: "11/6" },
  {
    type: "contact",
    name: "Invitation and Fellowship Department	 02-2151-6557",
  },
  { type: "email", name: "cecilia@kf.or.kr" },
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
      <img src="http://kf.or.kr/newsletter/images/202011/6.jpg" alt="" />
      <p className="caption">
      2019 제주포럼 KF 해외 언론인 세션에서 환영사를 하는 김성인 KF 교류이사(왼쪽 단상)
      </p>
      <p className="first">
        KF는 ‘코로나-19 극복을 위한 다자협력 가능성과 언론의 역할’을 주제로 11월 6일 ‘2020 제15차 제주포럼’에서 세션을 개최합니다. 지영미 KF 보건외교특별대표가 기조 발표를 맡고, 해외 언론인들이 온라인으로 참석할 예정입니다. KF는 이 세션에서 코로나-19 확산 방지를 위한 한국의 보건 및 의료 시스템과 대응 능력, 국제 언론의 시각에서 본 각 국가별 대응과 협력방안을 논의하고자 합니다.
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
      <img src="http://kf.or.kr/newsletter/images/202011/6.jpg" alt="" />
      <p className="caption">
      KF Executive Vice President Kim Seong-in, at the podium, welcomes overseas journalists during the KF session at the 2019 Jeju Forum.
      </p>
      <p className="first">
      On November 6, the KF will hold the session “COVID-19 Management: Possibility of Multilateral Cooperation and the Role of the Media” during the 15th Jeju Forum for Peace and Prosperity. Dr. Jee Young-mee, KF Special Representative for Health Diplomacy, will give the keynote speech, and journalists from around the world will participate in the meeting online.</p>
<p>The session will delve into Korea’s health and medical systems and countermeasures to prevent the spread of COVID-19. It will also explore different countries’ actions and forms of multilateral cooperation against the pandemic from the perspective of international journalists.
      </p>
  </>
);

export default {
  type: "unnormal",
  title: `제15차 제주포럼에서 KF 세션 개최
  ‘코로나-19 극복과 언론의 역할’`,
  titleEn: `KF Session on COVID-19 Management during the 15th Jeju Forum:
  Possibility of Multilateral Cooperation and the Role of the Media`,
  category: 0,
  icon: "publish",
  image: "6.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
