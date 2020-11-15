const contacts = [
  { type: "time", name: "10/30-11/1" },
  { type: "contact", name: "글로벌네트워크사업부 064-804-1134" },
  { type: "email", name: "sy.kim@kf.or.kr" },
];

const contactsE = [
  { type: "time", name: "10/30–11/1" },
  {
    type: "contact",
    name: "Global Networking Department 064-804-1134",
  },
  { type: "email", name: "sy.kim@kf.or.kr" },
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
      <img src="http://kf.or.kr/newsletter/images/202010/8.jpg" alt="" />
      <p className="caption">2019 한일 시민 100인 미래 대화 </p>
      <p className="first">
      KF의 활동에 항상 관심을 가져주시는 여러분께 감사드리며 11월호 뉴스레터의 내용과 관련된 십자말풀이 퀴즈를 준비했습니다. 11월호 내용에서 정답의 힌트를 찾아보세요.<br/>
* 10월호 이벤트 당첨자는 밑에서 공개합니다!<br/>
<br/>
이메일 newsletter@kf.or.kr로 정답을 보내주시는 선착순 10분께 소정의 선물을 드립니다!<br/>
* 성함과 휴대전화 번호도 함께 보내주세요.<br/>
* 정답과 당첨자는 2020년 12월호에 공개됩니다.<br/>
* 한 번 당첨되신 분들은 이후 재당첨이 어려운 점 양해 부탁드립니다.
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <img src="http://kf.or.kr/newsletter/images/202010/8.jpg" alt="" />
    <p className="caption">2019 Korea-Japan 100 Citizens’ Future Talk</p>
    <p className="first">
      From October 30 to November 1, the 2020 Korea-Japan 100 Citizens’ Future
      Talk will be held in the form of an online video conference through joint
      efforts of the KF, Seoul National University’s Institute for Japanese
      Studies, and Waseda University’s Institute for Korean Studies.
    </p>
    <p>
      The forum was launched in 2017 as a citizens’ channel of consultation,
      separate from high-level summits. Ever since, it has garnered attention of
      both countries’ civil societies as a platform through which to discuss
      current issues and create momentum for mutual cooperation.
      <br />
      This year, citizens who attended the bilateral talks over the past three
      years will get together online under the theme of “Korea-Japan Future
      Cooperation Envisaged by Citizens.” Participants will have discussions on
      topics such as the impact of the COVID-19 pandemic, citizens’ solidarity
      for peace, youth education, safe living and environments, and
      socio-cultural cooperation.
    </p>
  </>
);

export default {
  type: "unnormal",
  title: `2020 한일 시민 100인 미래 대화`,
  titleEn: `2020 Korea-Japan 100 Citizens’ Future Talk`,
  category: 0,
  icon: "global",
  image: "2.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
