import Head from "next/head";
import Features from "../../../comps/Features";

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
      <Features
        language="en"
        category="KF Features"
        icon=""
        title={Title}
        year={Year}
        image={Image}
        images={Images}
        imageType=""
        imageAlign="22"
        content={Content}
        contacts={Contacts}
        ending={Ending}
        endingImage={EndingImage}
        endingAlign={EndingAlign}
        tags={Tags}
        thisid="6639"
        anotherid="6654"
      />
    </div>
  );
}

const Title = `The World in Korea:
Exotic Tastes, Foreign Language, and People Mingle at Philippine Market`;

const Year = "202004";
const Image = "10.jpg";
const Images = [];

const Content = `Every Sunday, the Seoul neighborhood near the Hyehwa-dong intersection on Daehakro turns into “Little Manila” as the Philippine Market opens. To Filipinos in Korea, the market brings the taste and love of home; to Koreans and other foreigners, it’s an exotic tourist attraction offering the ethnic flavor of Southeast Asia in the heart of Seoul.
Subway riders can take line 4 to Hyehwa Station and leave through Exit 1. As they walk towards the Hyehwa Catholic Church, they’ll be able to see the green tents lined up along the way. As the Philippines is a majority Christian country with more than 80 percent of citizens identifying as Catholic, there’s a religious background to the birth of this special market. In the 1990s, Hyehwa Catholic Church began to hold mass in Tagalog, the national language of the Philippines, for the sake of Filipino residents in Korea. From that time on, merchants from the Philippines gathered around the church to sell foods and goods from their motherland to their countrymen attending the Tagalog mass, and this grew naturally into today’s market.
At 10 o’clock on Sunday morning, vendors are busy preparing to meet customers. Here, one can taste such traditional dishes as sinigang, a sour meat stew, and lechon, roasted suckling pig. There are also rice cakes, fried snacks, and beverages all in the style of the Philippines. Customers can add rice and side dishes of their choice on trays and enjoy their meal at the tables provided. The price is rather reasonable, with a big serving of grilled skewered pork usually costing KRW 2,000, so visitors can enjoy their meals with no financial burden. At the stalls selling everything including Pancit Canton, the instant noodles dubbed “Filipino ramen,” and all kinds of food, ingredients, and everyday commodities, customers feel as if they were at a local supermarket in the Philippines. As they roam about the market buying green mangos and relishing in the rich smell of Southeast Asian dishes, they may feel transported to a night market in another part of the Asian continent. But this is a day market, which may be why its atmosphere is so subtle and unique.
These days, nearly 2,000 Filipinas and Filipinos attend the Tagalog mass, which is presided over by a Filipino priest at Hyehwa Catholic Church. The market is most crowded around 3 p.m., after the mass ends. From then on, Tagalog is heard most frequently, even though merchants ordinarily use the Korean language and deal in Korean currency. Sellers and buyers alike appear bright as they chat and trade in their native language. The market comes to a close at around 5 p.m., and the merchants and customers seem reluctant to leave. However, all of them know that they can meet there again after another week of living and working hard.`;

const Contacts = [];

const Ending = `Written by Kim Moonyoung`;

const EndingImage = [];

const EndingAlign = "11";

const Tags = ["Philippine", "Southeast_Asia", "Food", "Catholic"];
