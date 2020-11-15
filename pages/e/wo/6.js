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
const KoreanId = "6633";
const EnglishId = "6648";

const Category = "What's On";

const Icon = "";

const Title = `KF Card News`;

const Year = "202004";

const Image = "";

const Images = [];

const Vertical = true;

const Caption = "";

const Content = ``;

const ETC = () => {
  return (
    <>
      <img
        className="vertical"
        src="http://newsletter.kf.or.kr/news/news_202004/6_1e.jpg"
      />
      <img
        className="vertical"
        src="http://newsletter.kf.or.kr/news/news_202004/6_2e.jpg"
      />
      <img
        className="vertical"
        src="http://newsletter.kf.or.kr/news/news_202004/6_3e.jpg"
      />
      <img
        className="vertical"
        src="http://newsletter.kf.or.kr/news/news_202004/6_4e.jpg"
      />
    </>
  );
};

const Contacts = [];

const Contacts2 = [];

const Tags = [];
