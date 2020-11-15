const events = [
  {
    date: "9/21-12/9",
    title: `아세안 언어 강좌`,
    place: `아세안문화원 (부산)
    부산외국어대학교`,
  },
  {
    date: "9/24–11/29",
    title: `제3회 아세안문화원 
    사진·영상 공모 
    우수작 전시 <교환일기>`,
    place: "아세안문화원 기획전시실 (부산)",
  },
  {
    date: "9/29–",
    title: `<한국 미학의 정수 
    – 고금 분청사기> 展`,
    place: `온라인 시행`,
  },
  {
    date: "10/1-21/1/24.",
    title: `캐나다 온타리오미술관 
    양혜규 작가 회고전`,
    place: "온타리오미술관 (캐나다)",
  },
  {
    date: "10/20-12/2",
    title: `가브리엘레 바질리코, 
    이탈리아 사진전`,
    place: "KF갤러리 (서울)",
  },
  {
    date: "10/22-11/19",
    title: `2020 Korea Festival 
    at Home 
    온라인 공연 콘텐츠
    <Shaping the Future 
    Together>`,
    place: "매주 목요일 KF 유튜브 업로드",
  },
  {
    date: "10/23-11/28",
    title: `<알기쉬운 아세안> 요리교실`,
    place: "아세안문화원 (부산)",
  },
  {
    date: "10/23-12/11",
    title: `계간 『코리아나』 
    ‘On the Road’, 
    영상 공개`,
    place: `온라인`,
  },
  {
    date: "10/30-11/1",
    title: `2020 한-아세안 공예장터`,
    place: `F1963 스퀘어 (부산)`,
  },
  {
    date: "10/30-11/1",
    title: `2020 한일시민 100인 
    미래대화`,
    place: `온라인`,
  },
  {
    date: "11/4-12/2",
    title: `<알기쉬운 아세안> 문화강좌`,
    place: `아세안문화원 (부산)ㆍ온라인`,
  },
  {
    date: "11/6",
    title: `2020 제주포럼 KF 세션`,
    place: `제주`,
  },
  {
    date: "11/7-11/8",
    title: `쿠알라룸푸르의 밤 – 
    말레이시아 영화 상영회`,
    place: `아세안문화원 (부산)`,
  },
  {
    date: "11/12-11/13",
    title: `2020 KF 한국학 온라인 특강 (베트남)`,
    place: `온라인`,
  },
  {
    date: "11/12-11/15",
    title: `제3회 공공외교주간`,
    place: `공공외교주간 홈페이지 
    www.pdweek.or.kr`,
  },
  {
    date: "11/13",
    title: `제28차 한일포럼`,
    place: `온라인`,
  },
  {
    date: "11/18-11/19",
    title: `실크로드 무형유산 네트워크 구축 웨비나 & 전략회의`,
    place: `온라인`,
  },
  {
    date: "11/25-11/26",
    title: `2020 컬러풀 중앙아시아`,
    place: `KF 유튜브 채널`,
  },
  {
    date: "11월 중",
    title: `2020 KF국민공공외교
    프로젝트 비대면 행사`,
    place: `온라인`,
  },
  {
    date: "11월 중",
    title: `한스페인포럼`,
    place: `온라인`,
  },
  {
    date: "11월 중",
    title: `2020 대양주 차세대 
    정책전문가 포럼`,
    place: `캔버라 또는 온라인`,
  },
  {
    date: "11월 중",
    title: `2020 중앙아시아 스마트 물관리 전문가 웨비나`,
    place: `미정`,
  },
  {
    date: "11월 중",
    title: `아세안 밀키트 프로젝트`,
    place: `www.wadiz.com`,
  },
];

const eventsEn = [
  {
    date: "9/21-12/9",
    title: `ASEAN Language Courses`,
    place: `ASEAN Culture House (Busan)
    and Busan University of
    Foreign Studies`,
  },
  {
    date: "9/24–11/29",
    title: `The 3rd ACH Photo 
    & Video Contest 
    Exhibition 
    Friendship Diary`,
    place: `Special Exhibition Gallery,
    ASEAN Culture House (Busan)`,
  },
  {
    date: "9/29-",
    title: `The Essence of Korean 
    Aesthetics – Ancient and 
    Modern Buncheong
    Exhibition`,
    place: `Online`,
  },
  {
    date: "10/1-21/1/24.",
    title: `Haegue Yang Exhibition 
    at Art Gallery of Ontario, 
    Canada`,
    place: "Art Gallery of Ontario (Canada)",
  },
  {
    date: "10/20-12/2",
    title: `Gabriele Basilico, 
    Photographs of Italy`,
    place: `KF Gallery (Seoul)`,
  },
  {
    date: "10/22-11/19",
    title: `2020 Korea Festival at Home 
    Shaping the Future Together`,
    place: `New uploads every Thursday on 
    KF Youtube channel`,
  },
  {
    date: "10/23-11/28",
    title: `‘Easy Access ASEAN’
    Cooking Classes`,
    place: "ASEAN Culture House (Busan)",
  },
  {
    date: "10/23-12/11",
    title: `Launching Koreana 
    Travel Column 
    ‘On the Road’ 
    in Video Format`,
    place: `Online`,
  },
  {
    date: "10/30-11/1",
    title: `2020 ASEAN-Korea 
    Craft Market`,
    place: `F1963 Square (Busan)`,
  },
  {
    date: "10/30-11/1",
    title: `2020 Korea-Japan 
    100 Citizens’ Future Dialogue`,
    place: `Online`,
  },
  {
    date: "11/4-12/2",
    title: `‘Easy Access ASEAN’
    Lecture Series`,
    place: `ASEAN Culture House (Busan)ㆍOnline`,
  },
  {
    date: "11/6",
    title: `KF Session during 
    2020 Jeju Forum`,
    place: `Jeju`,
  },
  {
    date: "11/7-11/8",
    title: `Fly By Night:       
    Malaysian Film Screenings`,
    place: `ASEAN Culture House (Busan)`,
  },
  {
    date: "11/12-11/13",
    title: `2020 KF Online Special Lectures on Korea (Vietnam)`,
    place: `Online`,
  },
  {
    date: "11/12-11/15",
    title: `The 3rd Public Diplomacy Week`,
    place: `Public Diplomacy Week website: www.pdweek.or.kr`,
  },
  {
    date: `11/13`,
    title: `The 28th Korea-Japan Forum`,
    place: `Online`,
  },
  {
    date: `11/18-11/19`,
    title: `2020 Silk Roads ICH Networking Program`,
    place: `Online`,
  },
  {
    date: `11/25-11/26`,
    title: `2020 Colorful Central Asia`,
    place: `KF YouTube channel`,
  },
  {
    date: `November`,
    title: `2020 KF Public Diplomacy
    Project Contactless Events`,
    place: `Online`,
  },
  {
    date: `November`,
    title: `Korea-Spain Forum`,
    place: `Online`,
  },
  {
    date: `November`,
    title: `2020 Oceania Next Generation Policy Experts Forum`,
    place: `Canberra / Online`,
  },
  {
    date: `November`,
    title: `2020 Central Asia Smart Water Management Webinar`,
    place: `TBA`,
  },
  {
    date: `November`,
    title: `ASEAN Meal Kit Project`,
    place: `www.wadiz.com`,
  },
];

export default {
  type: "events",
  title: `2020년 11월 KF 행사안내`,
  titleEn: `November 2020 EVENTS`,
  events,
  eventsEn,
};
