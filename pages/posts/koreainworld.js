const contacts = [
  // { type: "place", name: "아세안문화원 (부산)" },
  // { type: "time", name: "5/12-" },
  // { type: "contact", name: "글로벌센터사업부 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
  // { type: "school", name: "리스본대학교" },
  // { type: "student", name: "최은희 KF 한국어 객원교수" },
];

const contactsE = [
  // { type: "contact", name: "KF Global Center 02-2151-6542" },
  // { type: "email", name: "miyoungkim@kf.or.kr" },
  // { type: "school", name: "University of Lisbon " },
  // {
  //   type: "student",
  //   name: "Eun Hee Choi, KF Visiting Professor of Korean Language",
  // },
];

const contacts2 = [];

const contacts2E = [];

const Content = () => {
  return (
    <>
      <p className="first">
      유럽에서 한국 전통가옥을 볼 수 있는 곳이 있을까요. 한옥의 창틀과 한지, 문양 같은 특징을 살려 꾸민 갤러리는 있어도 실제 한옥은 한 곳뿐입니다. 프랑스 파리 근교의 보쉬르센, 센강을 바라보는 배산임수의 터에 자리잡은 고암서방은 자연 속에 한 폭의 그림처럼 어우러진 한국의 한옥이 떠오르게 합니다. 유럽에서 처음으로 지어졌고 지금도 유일하게 존재하는 한옥입니다.
      </p>
      <br />
      <p className="first">
      프랑스에서 활동하고 있는 이융세 화백은 선친 이응노 화백을 기리고 한국을 알리자는 취지로 고암서방을 건축했습니다. 한옥문화원장을 역임한 한옥전문가이자, 지난 5월 별세한 신영훈 대목수가 설계했는데 한국에서 구조를 완성하고 그대로 분해해 프랑스로 옮겨왔다고 합니다. 대청마루와 두 개의 방, 대들보를 중심으로 균형 있게 짜여진 구조는 유럽에서 찾아보기 힘든 한옥만의 미학을 보여줍니다. 창살문을 열고 센강을 내다보거나 호젓한 숲길을 걸으며 한옥을 바라볼 때의 운치도 이색적입니다.
      </p>
      <br />
      <p className="first">
      고암서방 건너편에는 또 다른 건축 거장 장 미셀 빌모트가 지은 아틀리에가 있습니다. 고(故) 이응노 화백이 설립한 파리동양미술학교의 건물로 쓰이는 곳인데 독특한 것은 이 건물의 지붕입니다. 장 미셀 빌모트는 한옥의 지붕에 영향을 받아 살짝 기울어진 형태로 아틀리에 지붕을 올리면서 고암서방과 연결고리를 만들었습니다.
      </p>
      <br />
      <p className="first">
      고암은 파리에서 동양화가로 활동했던 이응노 화백의 호입니다. 고암서방, 아틀리에, 파리이응노레지던시 등이 모여 있는 고암문화유적은 한국의 미술을 세계에 알리고자 했던 고인의 뜻을 이어 지금도 한국의 예술가와 유럽을 연결하는 역할을 해오고 있습니다. 신영훈 대목수는 1992년 고암서방의 대들보를 직접 상량하며 ‘무궁무진’이라는 문구를 새겼습니다. 먼 나라에서 한국의 전통과 아름다움을 소중히 간직하고 세계에 알리는 예술가의 마음도 한옥의 멋처럼 무궁무진할 것입니다.
      </p>
      <br />
      <p className="first" style={{ textAlign: "right" }}>
        글 김문영
        <br/>
        사진 제공 대전고암미술문화재단
      </p>
    </>
  );
};

const ContentEn = () => (
  <>
    <p className="first">
    Is it possible to find a hanok, a traditional Korean house, in Europe? There are a few galleries that are adorned with Korean-style window frames, hanji (traditional Korean paper), or patterns, but there is only one hanok in all of Europe. It is called Goam Seobang, named after the Korean artist Lee Ungno, who worked as an artist under the pen name Goam. Located in Vaux-sur-Seine on the outskirts of Paris, France, the residence allows visitors to enjoy traditional Korean architecture against a picturesque natural backdrop, with a hill at its back and a commanding view of the Seine to the front. To this day, the house remains the only hanok ever to be built in Europe. 
    </p>
    <br />
    <p className="first">
    Goam Seobang was constructed by Lee Yoongse, a France-based painter and son of the late Lee Ungno, to cherish the memory of his father and raise awareness of Korea. The house was designed by the late Shin Young-hoon, a master carpenter who passed away last May. Shin is said to have completed the structure in Korea, before disassembling and taking it to France. The balanced structure consisting of the living quarters with wooden floors, two rooms, and a crossbeam embody the Korean aestheticism unique to hanok that is hard to find elsewhere in Europe. One is filled with an unusual sense of lyricism as one sees the Seine through the latticed door of the house or looks at the residence from the secluded forest path. 
    </p>
    <br />
    <p className="first">
    Across from Goam Seobang is an atelier built by Jean-Michel Wilmotte, a grand master of architecture. It is home to the Academy of Oriental Painting in Paris, founded by Lee Ungno. Particularly eye-catching is the building’s slightly slanted roof, which shows the influence of hanok architecture, creating a natural connection with Goam Seobang. 
    </p>
    <br />
    <p className="first">
    Goam’s cultural legacy, comprising Goam Seobang, the atelier, and the Lee Ungno Residence in Paris, still connects Korean artists and Europe, carrying on the late painter’s will to make Korean fine art more widely known around the world. Putting up the crossbeams of Goam Seobang in 1992, Shin Young-hoon engraved them with the word “mugungmujin” (무궁무진), meaning infinity. The late artist’s wishes to preserve and share Korean traditions and aestheticism with the outside world will remain as infinite as the beauty of hanok. 
    </p>
    <br />
    <p className="first" style={{ textAlign: "right" }}>
      Written by Kim Moon-young
      <br/>
      Photo: Courtesy of the Goam Arts & Culture Foundation in Daejeon
    </p>
  </>
);

export default {
  type: "normal",
  title: `[해외에서 만나는 한국문화]
  유럽 최초로 지어진 한옥, 고암서방`,
  titleEn: `[Meeting Korean Culture Abroad]
  Goam Seobang: Europe’s First Hanok`,
  category: 3,
  icon: "",
  image: "16.jpg",
  vertical: false,
  Content,
  ContentEn,
  contacts,
  contactsE,
  contacts2,
  contacts2E,
};
