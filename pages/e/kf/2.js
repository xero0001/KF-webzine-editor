import Head from "next/head";
import Normal from "../../../comps/Normal";

export default function Index() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="http://newsletter.kf.or.kr/news/news_201912/assets/style.css"
          type="text/css"
        />
      </Head>
      <Normal
        language={Language}
        category={Category}
        icon={Icon}
        year={Year}
        title={Title}
        image={Image}
        caption={Caption}
        imageType={Vertical ? "vertical" : ""}
        images={Images}
        imageAlign="12"
        content={Content}
        ETC={ETC}
        contacts={Contacts}
        contacts2={Contacts2}
        tags={Tags}
        thisid={KoreanId}
        anotherid={EnglishId}
      />
    </div>
  );
}

const Language = "en";
const KoreanId = "6628";
const EnglishId = "6643";

const Category = "KF Activities";

const Icon = "exhibition";

const Title = `ASEAN Culture House-Asia Culture Institute Cooperative Exhibition:
‘Light of ASEAN, One Community and Harmony’`;

const Year = "202004";

const Image = "2.jpg";

const Images = [];

const Vertical = true;

const Caption = "";

const Content = ``;

const ETC = () => {
  return (
    <>
      <p style={{ textAlign: "justify" }} className="first">
        The KF is pleased to present the special exhibition{" "}
        <i>Light of ASEAN, One Community and Harmony</i> at the ASEAN Culture
        House in Busan from April 1 to May 20. This exhibition was first held at
        the Asia Culture Center in Gwangju to commemorate the 30th anniversary
        of ASEAN-ROK dialogue relations (October 17–November 17, 2019). Media
        art group SILO Lab renders the “light of Asia” through two pieces (
        <i>Breeze Fire</i> and <i>Mysterious Fire</i>) that embody wishes for
        peace and prosperity in Korea and the countries of ASEAN. Accompanying
        these kinetic media art pieces will be additional information and video
        materials on the lights and festivals of the ASEAN region.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40px",
          marginBottom: "40px"
        }}
      >
        <img
          src="http://newsletter.kf.or.kr/news/news_202004/2_1.jpg"
          alt=""
          style={{ width: "50%", margin: "0px" }}
        />
        <img
          src="http://newsletter.kf.or.kr/news/news_202004/2_2.jpg"
          alt=""
          style={{ width: "50%", margin: "0px" }}
        />
      </div>
      <div class="caption">
        Simulated image of the exhibition{" "}
        <i>Light of ASEAN, One Community and Harmony</i>
      </div>
    </>
  );
};

const Contacts = [
  {
    type: "place",
    name: "Special Exhibition Gallery, ASEAN Culture House (Busan)"
  },
  { type: "time", name: "4/1–5/20" }
];

const Contacts2 = [
  {
    type: "contact",
    name: "Performing Arts and Exhibition Department 051-775-2025"
  },
  { type: "email", name: "jeim@kf.or.kr" }
];

const Tags = ["ASEAN", "Exhibition", "Media_art", "SILO Lab"];
