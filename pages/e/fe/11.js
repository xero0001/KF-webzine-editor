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

const Language = "kr";
const KoreanId = "6640";
const EnglishId = "6655";

const Category = "KF Features";

const Icon = "";

const Title = `[[Infographic]
Breakdown of Global Hallyu Fans on the Threshold of 100 Million Mark`;

const Year = "202004";

const Image = "";

const Images = [];

const Vertical = true;

const Caption = "";

const Content = `The global fandom of Korean culture continues to expand. The film Parasite ignited even more worldwide interest in Korean cinema and Hallyu (the Korean Wave) by winning four awards at the 92nd Academy Awards in February. Meanwhile, the number of overseas Hallyu fans enjoying Korean mukbang (“eating broadcasts” shown on television or through social media) has increased markedly, along with the number of people watching and following make-up tutorials based on the looks of Korean celebrities. Hallyu is no longer a one-time fad of popular music and TV dramas, but has instead grown into one aspect of Korea’s soft power, exuding appeal to people of all walks of life around the globe.`;

const ETC = () => {
  return (
    <>
      <img src="http://newsletter.kf.or.kr/news/news_202004/11_1.jpg" />
      <img src="http://newsletter.kf.or.kr/news/news_202004/11_2.jpg" />
      <div className="first">
        {
          "* This infographic has been produced using statistics from Global Hallyu 2019, a report published by the Korea Foundation. The data quoted here has been computed by collecting the number of online members of Hallyu fan organizations in foreign countries, as reported by the Korean missions to those countries."
        }
      </div>
    </>
  );
};

const Contacts = [];

const Contacts2 = [];

const Tags = ["한류", "지구촌", "팬클럽", "소프트파워"];
