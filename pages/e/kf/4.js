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
const KoreanId = "6630";
const EnglishId = "6645";

const Category = "KF Activities";

const Icon = "";

const Title = `KF Newsletter for April 2020
Crossword Puzzle`;

const Year = "202004";

const Image = "";

const Vertical = true;

const Caption = "";

const Content = ``;

const ETC = () => {
  return (
    <>
      <p className="first">
        To share our sincere appreciation with everyone who has shown continuous
        interest in the KF’s activities, this issue of the KF newsletter
        features a crossword puzzle. Readers can find the answers to each clue
        throughout the April issue of the newsletter. Special gifts will be
        awarded on a first-come first-served basis to 10 people who send the
        right answers via email to <u>newsletter@kf.or.kr</u>.
        <br />
        Please don’t forget to include your name and cellphone number in your
        email.
      </p>
      <img
        className="vertical"
        src="http://newsletter.kf.or.kr/news/news_202004/4.jpg"
      />
      <div class="caption">All answers should be written in Korean.</div>
      <br />
      <p className="first">Across</p>
      <p className="first">
        1. Applications for this project are due March 24, and those selected
        will attend the launching ceremony in May. What is the name of this
        project, open to all Koreans who want to support the overseas publicity
        of Korea?
        <br />
        (6 letters)
      </p>
      <br />
      <p className="first">
        4. The first article of our new series entitled “The World in Korea”
        features the Hyehwa-dong market of a certain country. What is the
        capital of that country?
        <br />
        (3 letters)
      </p>
      <br />
      <p className="first">
        5. The ASEAN Culture House is receiving applications for its 3rd Photo &
        Video Contest until April 24. In the second year of the contest, a
        photograph taken in this country won the grand prize. What is the name
        of this country?
        <br />
        (4 letters)
      </p>
      <br />
      <br />
      <br />
      <p className="first">세로 문제</p>
      <p className="first">
        1 The official name of our foundation is “한국_ _ _ _ 재단.” Fill in the
        blank.
      </p>
      <br />
      <p className="first">
        2. The Korean title of the exhibition opening at the ASEAN Culture House
        in Busan on March 27 is {"<아세안의 빛, 하나의 _ _ _ >"}. Fill in the
        blank.
      </p>
      <br />
      <p className="first">
        3. The Korea-Central Asia Cooperation Forum Secretariat invites aspiring
        Youth Academy trainees to apply from April 1. The Korean name of the
        academy is “_ _ _ _ 청년 아카데미.” Fill in the blank.
      </p>
      <br />
    </>
  );
};

const Contacts = [];

const Contacts2 = [];

const Tags = [];
