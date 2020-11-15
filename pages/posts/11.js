const contacts = [
  // { type: "place", name: "아세안문화원 (부산)" },
  // { type: "time", name: "5/12-" },
  // { type: "contact", name: "글로벌센터사업부 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
  { type: "school", name: "리스본대학교" },
  { type: "student", name: "최은희 KF 한국어 객원교수" },
];

const contactsE = [
  // { type: "contact", name: "KF Global Center 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
  { type: "school", name: "University of Lisbon " },
  {
    type: "student",
    name: "Eun Hee Choi, KF Visiting Professor of Korean Language",
  },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <p className="first">
        한국국제교류재단(KF)의 방한연구펠로십 지원대상자로 선정된 건 큰 행운이고
        영광이었습니다. 덕분에 저는 2019년 3월부터 8월까지 한국에서 한국의
        이민정책에 관한 박사학위논문을 준비할 수 있었습니다. 2013년에 연세대
        국제대학원에서 석사학위를 취득한 저는 KF 방한 펠로로서 연세대
        정치학과에서 연구하게 되어 다시 한 번 신촌에 둥지를 틀었습니다. 집에
        돌아온 기분을 느끼며 여기가 박사학위를 무사히 마칠 곳이라고
        생각했습니다.
      </p>
      <br />
      <p className="first">
        제 논문은 지난 20년 동안 변화한 한국의 이민정책에 초점을 두고 있습니다.
        한국의 급진적인 변화는 다양한 그룹의 외국인 유입을 이끌고 있습니다. 이민
        통합과 시민권을 연구하는 학자들에게 한국의 이민은 매우 흥미로운
        사례입니다. 저는 결혼 이민과 이주 노동을 포함한 이민자 및 장기 거주자
        정책을 연구합니다. 이민자들에게 나라를 개방할 때 수반되는 복잡한
        이해관계와 해결해야 할 과제를 한국 정부가 어떻게 조정하고 대응해 왔는지
        주목합니다.
      </p>
      <br />
      <p className="first">
        서울에서 머무는 반년 동안 보고 듣는 게 가장 중요했습니다. 가능한 한 많은
        학자와 정치인, 정부 관료, 시민단체 활동가, 다른 이해 당사자들이 이주
        문제를 어떻게 생각하고 무엇을 지지하며 옹호하는지 알고자 했습니다. KF
        방한연구펠로십과 연세대 지도교수님 덕분에 이주 문제 관련 행사나 단체와도
        연이 닿았습니다. 이주지원센터, 안산 다문화특구, 서울의 글로벌빌리지센터
        등을 방문했고 국회와 서울시청에서 열린 공개 포럼에도 참가했습니다.
        한국의 학자들과 함께하는 학술회의에 참여한 것도 굉장한 영광이었습니다.
        그분들의 관점으로 현대 이주 문제를 바라보고 해결책을 규명하는 데 큰
        도움을 받았습니다.
      </p>
      <br />
      <p className="first">
        KF는 방한 펠로의 네트워크도 지원했습니다. 방한 펠로들이 사흘간 전라도를
        여행할 수 있도록 주선해주기도 했습니다. 저는 훌륭한 여행 가이드와 함께
        잊지 못할 여행을 하며 한국의 역사와 문화를 경험할 수 있었습니다. 함께한
        펠로들과 유대를 쌓으며 우리의 문화 교류가 한국에 대한 공동 연구로
        통합되는 특별한 경험을 했습니다. KF의 지원 덕분에 저는 학위논문을 위한
        연구를 지속했고 학자로서 더 많은 경력을 쌓았습니다. 앞으로도 계속
        연구결과와 관련해저술하고 발표하고, 가르치면서, 제 잠재력을 신뢰한
        재단의 기대에 부응하여 한국학 발전에 기여할 수 있기를 희망합니다.
      </p>
      <br />
      <p style={{ textAlign: "right" }}>
        존스홉킨스대학교
        <br />
        달시 드라우트 (미국)
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <p className="first">
      From March through August 2019, I had the honor and fortune of benefitting
      from the support of a KF Field Research Fellowship to support my
      dissertation research on immigration policy in Korea. During my time as a
      KF fellow, I was affiliated with Yonsei University’s Department of
      Political Science. I was delighted to have Yonsei as my home base; as a
      2013 master’s alumna from Yonsei’s Graduate School of International
      Studies, being based back in Sinchon was both like a homecoming and a
      launching pad for my PhD scholarship.
    </p>
    <br />
    <p className="first">
      My dissertation research focuses on the evolution of Korea’s immigration
      policies over the past twenty years. For scholars of immigrant
      incorporation and citizenship studies, Korea’s experience with immigration
      is an interesting case because of the country’s dynamic changes that
      permit diverse groups of foreigners entry. My research looks at how the
      Korean government has grappled with balancing the complex interests and
      challenges of opening the country to long-term residents and immigrants,
      including marriage migrants and migrant workers.
    </p>
    <br />
    <p className="first">
      My overarching goal for my six months in Seoul was to watch and listen—to
      soak up as much as possible about how Korean scholars, politicians,
      government officials, NGO workers, and other stakeholders think about and
      advocate for migrant issues. Through my fellowship and my sponsor faculty
      at Yonsei, I was able to make connections to events and organizations
      involved in the debates around migrant issues today. During my time in
      Korea, I visited migrant support centers, the Ansan Multicultural
      District, and Global Village Centers around Seoul. I also attended public
      forums at the National Assembly and Seoul City Government offices, and was
      honored to be able to participate in academic conferences with Korean
      scholars. I benefited greatly from their perspectives on identifying the
      challenges and solutions to contemporary migration issues.
    </p>
    <br />
    <p className="first">
      In addition to supporting the time for research, the KF also supported
      networking among fellows. The KF organized a three-day trip for fellows to
      Jeolla-do, and I was able to see so much more of the history and culture
      of the country through some truly memorable tours with a great tour guide.
      I also bonded with other fellows, and our cross-cultural exchanges, united
      through our mutual study of Korea, were an exceptional experience. The
      support of the Korea Foundation made my dissertation research and
      continuing scholarly career possible. As I continue to write, speak, and
      teach about my research, I hope I can live up to the faith the KF placed
      in my potential to contribute to the field of Korean studies.
    </p>
    <br />
    <p style={{ textAlign: "right" }}>
      Johns Hopkins University
      <br />
      Darcie Draudt (United States)
    </p>
  </>
);

export default {
  type: "normal",
  title: `[KF 방한 펠로 레터]
  한국의 이민정책을 입체적으로 연구한 기회
  `,
  titleEn: `[Letter from a KF Visiting Fellow]
  Continuing My Scholarly Career with 
  Research on Korean Immigration Policy`,
  category: 2,
  icon: "america",
  image: "11_2.jpg",
  vertical: true,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
