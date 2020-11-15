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
const KoreanId = "6629";
const EnglishId = "6644";

const Category = "KF Activities";

const Icon = "global";

const Title = `April 24: Application Deadline for 3rd ACH Photo & Video Contest `;

const Year = "202004";

const Image = "3.jpg";

const Vertical = true;

const Caption = "Jump for Hope. The grand prize winner of the 2019 competition";

const Content = `
`;

const ETC = () => {
  return (
    <>
      <p className="first">
        The March issue of the KF Newsletter included information about the
        third ASEAN Culture House Photo & Video Contest. The grand prize winner
        of the 2019 competition was a photograph entitled <i>Jump for Hope</i>{" "}
        by Cho Hoon. Mr. Cho took the picture at a small elementary school in
        Siem Reap, Cambodia, when he visited as a member of a group that taught
        Korean children’s games and provided hygiene education to the students.
        To see other prize-winning photos and videos, visit the gallery of the
        contest website (contest.ach.or.kr/gallery.php).
      </p>
      <br />
      <p className="first">
        ㆍApplication period: 9 a.m. on Monday, March 2 to 6 p.m. on Friday,
        April 24, 2020 (KST)
      </p>
      <p className="first">
        ㆍAwards Exhibition: June–August 2020 / Special Exhibition Gallery,
        ASEAN Culture House
      </p>
      <p className="first">ㆍContest website: contest.ach.or.kr</p>
    </>
  );
};

const Contacts = [
  { type: "place", name: "ASEAN Culture House (Busan)" },
  { type: "time", name: "3/2-4/24" },
  {
    type: "contact",
    name: "Performing Arts and Exhibition Department  051-775-2025"
  }
];

const Contacts2 = [{ type: "email", name: "jeim@kf.or.kr" }];

const Tags = ["ASEAN", "COntest", "Photo", "Video"];
