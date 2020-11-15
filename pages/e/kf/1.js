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
const KoreanId = "6627";
const EnglishId = "6642";

const Category = "KF Activities";

const Icon = "global";

const Title = `Young People Invited to KF Eurasia Youth Academy`;

const Year = "202004";

const Image = "1.jpg";

const Vertical = false;

const Caption =
  "The Eurasia Youth Academy class of 2019 visits Narxoz University in Kazakhstan";

const Content = `The Korea Foundation’s Korea-Central Asia Cooperation Forum Secretariat will invite young men and women to the Eurasia Youth Academy training this year during the month of April. The academy was launched last year to cultivate young experts specializing in Central Asia who can help support Korea’s progress in the region. It offers educational programs at home and abroad, fostering basic capability based on language skills and understanding of the region, conducting on-site studies and training through visits to regional spots and industrial firms, and providing overseas internships to build practical competence.
Any Korean under the age of 35 may apply for the training, and a maximum 130 successful applicants will be selected. Preference will be given to candidates who have industrial or technical licenses that may be utilized in Central Asia, candidates from the legally prescribed social bracket for special consideration, and candidates who reside in provincial areas. All young adults who are eager to realize their dreams in Eurasia are welcome to apply.
`;

const ETC = () => {
  return (
    <>
      <br />
      <p className="first">
        ㆍApplication period: Wednesday, April 1–Thursday, April 30, 2020
      </p>
      <p className="first">
        ㆍMethod of application: Online application via the KF website (
        <a href="www.kf.or.kr" target="_blank">
          www.kf.or.kr
        </a>
        ), the Secretariat website (
        <a href="www.centralasia-korea.org" target="_blank">
          www.centralasia-korea.org
        </a>
        ), and the Eurasia Youth Academy website (
        <a href="http://central.hri.co.kr" target="_blank">
          http://central.hri.co.kr
        </a>
        )
      </p>
      <p className="first">
        ㆍRequired documents: An application form; a three-minute or shorter
        video on “Finding Opportunities in Eurasia” produced by the applicant; a
        certificate of English and/or Russian language skills, if any; and
        copies of industrial and/or technical licenses, if any.
      </p>
      <p className="first">ㆍMethod of selection: Document screening</p>
    </>
  );
};

const Contacts = [
  { type: "place", name: "South Korea and Central Asian Countries" },
  { type: "time", name: "4/1–4/30" }
];

const Contacts2 = [
  {
    type: "contact",
    name: "Korea-Central Asia Cooperation Forum Secretariat	02-2151-6573"
  },
  { type: "email", name: "smlee@kf.or.kr" }
];

const Tags = ["Eurasia", "Central_Asia", "Academy", "Internship"];
