const contacts = [
  { type: "time", name: "11/25-11/26" },
  { type: "contact", name: "한-중앙아협력포럼사무국 02-2151-6573" },
  { type: "email", name: "smlee@kf.or.kr" },
];

const contactsE = [
  { type: "time", name: "11/25-11/26" },
  {
    type: "contact",
    name: "Korea-Central Asia Cooperation Forum Secretariat 02-2151-6573",
  },
  { type: "email", name: "smlee@kf.or.kr" },
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
      KF 한-중앙아협력포럼사무국은 올해 장관급으로 개최되는 제13차 한-중앙아 협력포럼에 맞춰 ‘2020 컬러풀 중앙아시아 패션쇼’를 11월 25일(수) 오후 2시에 온라인으로 개최합니다.</p>
<p>이번 행사는 중앙아시아 의복의 아름다움을 한국에 알리고 양 지역 간 문화협력의 기반을 확대하기 위해 기획되었으며, 카자흐스탄, 타지키스탄, 키르기스스탄 중앙아시아 3개 국가가 참가합니다.</p>
<p>카자흐스탄의 디자이너 사비나 잔자코바(Sabina ZHANZAKOVA), 타지키스탄의 흐루쉐드 사토로프(Khurshed SATTOROV), 키르기스스탄의 자미라 몰도쉐바(Zamira MOLDOSHEVA)와 주마굴 사리예바(Jumagul SARIEVA)가 소개하는 60여 벌의 중앙아시아 전통 및 현대의상은 특유의 기하학적 무늬와 화려한 색감으로 패션쇼를 화려하게 채울 예정입니다.</p>
<p>코로나바이러스 감염증-19로 인한 글로벌 팬데믹 상황이 장기화되어 패션쇼를 온라인으로 전격 전환했습니다. 패션쇼 전 과정을 KF 공식 유튜브를 통해 영상으로 공개함에 따라 오프라인 초청 인원의 한계를 넘어 전 세계 더 많은 국가의 참여자와 소통할 2020 컬러풀 중앙아시아 패션쇼에 많은 참여와 관심 바랍니다.
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <p className="first">
    On November 25, the KF’s Korea-Central Asia Cooperation Forum Secretariat will present the online fashion show, “2020 Colorful Central Asia,” concurrently with the 13th edition of the Korea-Central Asia Cooperation Forum. The show will begin at 2 p.m. on the KF’s YouTube channel, showcasing both traditional and contemporary clothes from the three Central Asian countries — Kazakhstan, Kyrgyzstan, Tajikistan. Viewers will experience Central Asian culture through the vibrant attires, characterized by geometric patterns and bright colors.</p>
<p>The fashion show has been designed to introduce the beauty of Central Asian garments to the Korean public and to expand the basis for Korean-Central Asian cultural cooperation, while continuing to maintain COVID-19-related social distancing measures. Everyone is welcome to this special event!

    </p>
  </>
);

export default {
  type: "normal",
  title: `2020 컬러풀 중앙아시아 패션쇼`,
  titleEn: `2020 Colorful Central Asia Fashion Show `,
  category: 0,
  icon: "culture",
  image: "2.jpg",
  vertical: true,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
