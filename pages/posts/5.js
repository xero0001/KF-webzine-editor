const contacts = [
  { type: "time", name: "10/9-10/13 (벽화 제작), 10월 말-11월 초 (온라인 전시 공개)" },
  { type: "contact", name: "글로벌센터사업부 02-2151-6509" },
  { type: "email", name: "pdweek@kf.or.kr" },
];

const contactsE = [
  { type: "time", name: "10/9–10/13 (Wall painting) Late October–early November (Online exhibition for the public)" },
  { type: "contact", name: "KF Global Center  02-2151-6509" },
  { type: "email", name: "pdweek@kf.or.kr" },
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
      <p className="first">
      2020 KF국민공공외교 프로젝트의 일환으로 선발된 모로코리아(Morocorea) 팀은 ‘살람! 코리아’라는 제목으로 모로코 청소년과 대중이 한국문화를 경험하고 가깝게 느낄 수 있는 문화예술 활동을 전개하고 있습니다. 이 팀은 모로코에 한국문화를 소개할 컬러링 키트를 제작하는 한편, TV 프로그램 &lt;어서와 한국은 처음이지?&gt;를 통해 한국인에게도 잘 알려진 모로코 출신의 우메이마 파티흐(Oumeyma Fatih) 씨와 협업하여 모로코에 보낼 예술교육 영상을 제작하고 서울의 한 고등학교에서 벽화 작업을 실시했습니다. 벽화는 한복을 입은 어린왕자, 모로코리아 팀이 온라인 공모로 접수한 시안을 모티프로 그려졌으며, 이 벽화를 기반으로 증강현실 기술을 활용한 온라인 전시를 개최합니다.
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <p className="first">
    Morocorea, one of the KF’s Public Diplomacy Project Teams of 2020, has launched a series of cultural and artistic activities under the slogan of “Salam! Korea” to share Korean culture with youth and others in Morocco.</p>
<p>The team has produced coloring kits designed to introduce Korean culture to Moroccans, and has also created videos for art education in cooperation with Oumaima Fatih, a Moroccan who is well-known in Korea through her appearance on the television program <i>Welcome, First Time in Korea</i>?</p>
<p>In addition to its Morocco-focused activities, the team has painted the wall of a high school in Seoul, depicting the Little Prince in Hanbok, the Korean traditional costume, on the basis of the works the team received through an online contest. The mural will serve as the seed of an online exhibition utilizing augmented reality technology.   
    </p>
  </>
);

export default {
  type: "normal",
  title: `2020 KF국민공공외교 프로젝트
  모로코리아 팀, ’살람! 코리아’ 예술 워크숍`,
  titleEn: `KF Public Diplomacy Project 
  Team Morocorea Presents ‘Salam! Korea’`,
  category: 0,
  icon: "global",
  image: "5.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
