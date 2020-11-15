const contacts = [
  // { type: "place", name: "아세안문화원 기획전시실 (부산)" },
  { type: "time", name: "11/13" },
  { type: "contact", name: "글로벌네트워크사업부 064-804-1125" },
  { type: "email", name: "hjlee@kf.or.kr" },
];

const contactsE = [
  // {
  //   type: "place",
  //   name: "ASEAN Culture House Special Exhibition Hall, Busan",
  // },
  { type: "time", name: "11/13" },
  {
    type: "contact",
    name: "Global Networking Department	064-804-1125",
  },
  { type: "email", name: "hjlee@kf.or.kr" },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <img src="http://kf.or.kr/newsletter/images/202011/3.jpg" alt="" />
      <p className="caption">2019 제27차 한일포럼</p>
      <p className="first">
      KF는 오는 11월 13일 제28차 한일포럼을 개최합니다. 이 행사는 당초 일본에서 개최될 예정이었지만 코로나바이러스감염증-19로 인해 한일 양국을 온라인으로 연결하게 됐습니다. 한국에서는 그랜드하얏트서울, 일본에서는 아카사카 인터시티 AIR에 참가자들이 각각 모이게 됩니다.</p>
      <p>한일포럼은 1993년 11월 경주에서 개최된 한일정상회담을 계기로, 민간 차원에서 양국 간 폭넓고 지속적인 대화를 촉진한다는 목적으로 시작되었습니다. 올해는 양국 대표단이 한일 양국의 정세와 사회 현황, 미 대선 후의 미중 관계와 동아시아, 한일 정치경제 관계, 코로나 이후의 양국 사회 변화와 협력에 대해 논의할 예정입니다. 올해 제5회를 맞는 한일포럼상은 목포 공생원에서 30년간 3,000명의 고아를 길러 ‘한국 고아의 어머니’라 불린 다우치 치즈코씨와 윤치호씨의 장남인 윤기(일본명 다우치 모토이) 사회복지법인 마음의가족 이사장에게 수여됩니다.
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
        <img src="http://kf.or.kr/newsletter/images/202011/3.jpg" alt="" />
      <p className="caption">The 27th Korea-Japan Forum in 2019</p>
    <p className="first">
    On November 13, the KF will hold the 28th Korea-Japan Forum. This year’s meeting was originally scheduled to be held in Japan, but due to the COVID-19 pandemic it had to be changed into an online event that will connect participants in the two neighboring countries. While Korean participants will gather at the Grand Hyatt Seoul, their Japanese counterparts will gather at the Akasaka Intercity AIR skyscraper in Tokyo.</p>
<p>The bilateral forum was launched in the wake of the Korea-Japan summit held in November 1993 in Gyeongju, Korea, with the aim of promoting expansive and sustainable dialogue between the private sectors of the two countries. This year, the forum will discuss the socio-political situations in Korea and Japan, US-China relations after the presidential elections in the United States, political and economic relations between Korea and Japan, and post-COVID-19 social changes and bilateral cooperation.</p>
<p>The fifth Korea-Japan Forum Award will be given to Yun Ki, whose Japanese name is Motoi Tauchi. Yun is director of the Family of Heart Foundation and the eldest son of the late Yun Chi-ho and his Japanese wife, Chizuko Tauchi, whose Korean name is Yun Hak-ja. Chizuku Tauchi is known as the “Mother of Korean Orphans,” having raised and taken care of some 3,000 orphans over 30 years at the Gongsaengwon foster home in Mokpo, Korea.
    </p>
  </>
);

export default {
  type: "unnormal",
  title: `2020 제28차 한일포럼`,
  titleEn: `The 28th Korea-Japan Forum in November`,
  category: 0,
  icon: "publish",
  image: "3.jpg",
  vertical: true,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
