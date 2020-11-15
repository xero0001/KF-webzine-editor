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
        language="kr"
        category="KF Features"
        icon=""
        title={Title}
        year={Year}
        image={Image}
        caption={Caption}
        images={Images}
        imageType=""
        imageAlign="12"
        content={Content}
        spacing={true}
        ending={Ending}
        endingImage={EndingImage}
        endingAlign="12"
        endingCaption={EndingCaption}
        contacts={Contacts}
        tags={Tags}
        thisid="6638"
        anotherid="6653"
      />
    </div>
  );
}

const Title = `Han Collection: Gallery of the Korean Spirit in the Heart of London`;

const Year = "202004";
const Image = "9.jpg";
const Images = [
  "http://newsletter.kf.or.kr/news/news_202004/9_1.jpg",
  "http://newsletter.kf.or.kr/news/news_202004/9_2.jpg"
];
const Caption =
  "Buncheong sagi dangchomun byeong, a 16th century vase with a simple white glaze and incised decoration of flowers and lines, and najeon chilbomun sibigakham, a 19th century black lacquered 12-sided hat box. Courtesy of Han Collection (www.hancollection.co.uk).";

const Content = `In 18th century Europe, white ceramics were regarded as artworks that were more valuable than gold. In Britain and many other European countries, a tradition of ceramic art still lives on, maintaining a relatively high status. Today, more Europeans than ever are able to appreciate the beauty of Korean ceramics. Han Collection is an art and antique gallery in London that introduces the beauty and essence of Korea to those Europeans.
The British Museum is famous for its history and the scale of its collection of artworks from around the world. Adding to its fame are the numerous galleries and tourist attractions in its vicinity, which create another inviting appeal for its 6 million visitors a year. Han Collection, located quite close to the British Museum, is the only space in London that is singularly devoted to Korean antiques. It’s the foremost gallery for local academics studying East Asian art history and visitors interested in East Asian culture and art, allowing them a chance to closely observe both Goryeo celadon and Joseon porcelain pieces on permanent exhibition.
Han Collection was founded in 2006 by an antique lover with Korean ancestry who put his own collection on display. Various objects including woodcrafts, lacquerware, and accessories like binyeo hairpins are on exhibit on the first and second floors of the building. In addition to displaying these time-honored items, the gallery invites contemporary Korean artists and masters in the traditional arts and crafts to showcase their work. Han Collection has thereby served as a bridgehead for Korean artists making inroads into Europe—the gallery has staged a group exhibition of contemporary Korean ceramic artists, including Kim Mun-ho and Kim Dong-joon; solo shows of the pottery painting pioneer Oh Man-chul; and an invitational exhibition of the late master Ji Sun-tak, also known by the name Doam, who was an intangible cultural property holder designated by the Gyeonggi Provincial Administration. 
Han Collection also takes part in various expositions specializing in ceramics and antiques across Europe. It participates annually in the Art & Antiques Fair Olympia, the largest antiques fair in Britain. And this past February, the gallery entertained art lovers at Collect 2020 at the Somerset House. While enjoying steady interest and love from ceramic enthusiasts since its opening, the collection has remained committed to bringing its art to new viewers outside its exhibition halls. Courtesy of this passionate endeavor, the light and spirit of Korea has been able to permeate into the hearts of the European people.`;

const Contacts = [];

const Tags = ["UK", "Exhibition", "ceramics", "antique"];

const Ending = `Written by Kim Moonyoung`;

const EndingImage = [
  "http://newsletter.kf.or.kr/news/news_202004/9_3.jpg",
  "http://newsletter.kf.or.kr/news/news_202004/9_4.jpg"
];

const EndingCaption =
  "Han Collection, a gallery specializing in Korean antiques, is located near the British Museum. / Courtesy of Han Collection.";
