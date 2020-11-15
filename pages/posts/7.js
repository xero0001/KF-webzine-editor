const contacts = [
  // { type: "place", name: "아세안문화원, 부산외국어대학교" },
  // { type: "time", name: "9/14-12/2" },
  { type: "contact", name: "문화예술사업부 064-804-1151" },
  { type: "email", name: "nkkim@kf.or.kr" },
];

const contactsE = [
  // {
  //   type: "place",
  //   name: "ASEAN Culture House, Busan University of Foreign Studies",
  // },
  // { type: "time", name: "9/14-12/2" },
  {
    type: "contact",
    name: "Arts and Culture Department 064-804-1151",
  },
  { type: "email", name: "nkkim@kf.or.kr" },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <p className="first">
      KF는 일본의 쿠온출판사와 함께 &lt;한국현대단편소설선집 일본어판&gt;을 발간하였습니다. KF는 2018년부터 한국현대단편소설선집 발간 사업을 추진하고 있으며, 이번 책은 2020년 첫 번째 선집입니다. 한국 문화예술 종합 계간지 『코리아나』 일본어판에 수록된 소설 중 12편을 엮었습니다.</p>
<p>&lt;한국현대단편소설선집 일본어판&gt;은 구효서 작가의 ‘소금가마니’, 권여선 작가의 ‘분홍 리본의 시절’ 등 총 12편의 흥미로운 단편소설을 소개합니다. 수록된 소설들은 한국인의 과거와 현재, 현실과 이상, 사랑과 상처에 관한 이야기 등을 담고 있습니다. 본 도서를 통해 일본 독자들이 한국과 한국 문학을 더 쉽고 재미있게 경험할 수 있기를 바랍니다.

      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <p className="first">
    The KF, together with Cuon Publishing in Japan, recently published a Japanese version of its anthology, <i>Korean Contemporary Short Stories</i>. This collection of short stories, taken from the KF’s arts and culture quarterly, <i>Koreana</i>, was first published in English in 2018. Since then, different versions of it have been published in Indonesian, Russian, Thai and Vietnamese.</p>
  <p>The new book contains twelve stories that were previously featured in the Japanese version of <i>Koreana</i>, including Koo Hyo-seo’s “A Bale of Salt” and Kwon Yeo-sun’s “Pink Ribbon Days.” The stories narrate the past and present of Koreans, their reality and ideals, and their love and scars. The book is intended to help make Korea and Korean literature more accessible and interesting to Japanese readers. 
    </p>
  </>
);

export default {
  type: "unnormal",
  title: "계간 『코리아나』  ‘On the Road’, 영상 콘텐츠로 제작",
  titleEn: `‘Koreana’ Travel Column Launches in Video Format`,
  category: 0,
  icon: "magazine",
  image: "7.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
