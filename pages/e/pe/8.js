import Head from "next/head";
import Normal from "../../../comps/Normal";
import Interview from "../../../comps/Interview";

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
      <Interview
        language="en"
        category="People"
        icon={Icon}
        title={Title}
        year={Year}
        image={Image}
        images={Images}
        imageType="vertical"
        imageAlign="22"
        content={Content}
        content2={Content2}
        Content3={Content3}
        ending={Ending}
        contacts={Contacts}
        tags={Tags}
        thisid="6636"
        anotherid="6651"
      />
    </div>
  );
}

const Icon = "interview";
const Title = `Illustrator Wooh Na Young
Dressing Western Fairytale Characters in Hanbok`;

const Year = "202004";

const Image = "8.jpg";
const Images = [];

const Content = `Western fairytale characters including Alice, Cinderella, and Rapunzel are dressed in unique Korean Hanbok outfits. As these familiar characters put on new attire, they captivate viewers with a fresh new charm. Wooh Na Young, the Korean illustrator better known as Obsidian and the artist behind these fairytale characters in Hanbok, has won the love of fans around the world for her creative ideas. Wooh’s illustrations maximize the appeal of cultural heritage from both the East and the West by uniting them, conveying the power of art that transcends language.`;

const Content2 = [
  `Wooh realizes that the most uniquely Korean culture is actually the most global. She participated in the exhibition Expanded Animation hosted by the KF in 2019 and has worked with overseas companies like Disney and Netflix. As she gains a growing number of fans in Korea and abroad, Wooh is preparing to unveil the result of her collaboration with an American comic book publisher.`,
  `Q. Why did you begin to paint these characters in Hanbok? Was there a special motive behind your decision? 
  I used to do my own experiments while working for a game company. It was in 2010 that I had the idea of dressing up my favorite Western fairytale characters in Hanbok and began to draw these illustrations.`,
  `Q. Last February, you had a solo exhibition themed “Hanbok Fairytales.” How did you like the show?
  My works have received a lot of love at home and abroad, and I’ve had many exhibitions, but this show was a little different. This time, I produced a limited number of works, signed each of them and gave them serial numbers, and sold them. It’s extremely rare for illustrators to sell their works at exhibitions and I was very worried about how it would go. Fortunately, the show turned out well and I felt lucky. I was very happy, as I felt that illustrations, as a sort of pop art, had been accepted as artworks worthy of purchase and collection.`,
  `Q. Your “Hanbok Fairytales” series, which was first shown in 2010, seems to have gained even greater recognition for its commercial value overseas than in Korea. You’ve done a lot of collaborations with enterprises like Disney and Netflix. What do you think it is about your work that’s attracted such attention abroad? 
  I think the key is showing familiar things in an unfamiliar way while rendering the particulars of the characters at first glance. It’s also interesting for viewers to see how the characters and props in the original story have been Koreanized. Another appeal could be the beauty of the colors, textures, and atmosphere of Hanbok and Korean accessories. The more I work, the more I agree that “what’s most Korean is most global.”`,
  `Q. Are there any special elements that you give particular consideration to in the course of expressing Hanbok and other Korean objects? 
  What characterizes Hanbok for me is the asymmetrical lapels and strings and the unique creases and lines created as a result of flat pattern making. Even if a Westerner doesn’t know much about Hanbok, they recognize that Hanbok is different from Western dresses. As more and more people see and love my work, I think it’s increasingly important that I study more about Hanbok to verify the truest features of the clothes. I want to express the beauty of Hanbok effectively, while simultaneously delivering the specifics of each character with clarity. For instance, when I was drawing the Koreanized version of Mother Gothel from Tangled, I imagined the character of Ppaengdeok Eomeom from the Korean pansori (narrative song) Simcheong-ga. When I saw viewers’ comments comparing my Gothel to Ppaengdeok Eomeom, I knew that my intentions had been delivered.`,
  `Q. Gothel and all of the Disney villains you’ve reinterpreted have been impressive. Is there any one of your works that you especially like?
  After my solo exhibition, I casually posted them on social media and many people expressed their support. While I was working on them, I found it interesting to personify Scar from The Lion King and to work on Cruella from One Hundred and One Dalmatians, who became the first in the Disney villain series. Cruella wears dalmatian fur and carries a cigarette holder, which I switched to a Korean jangot (veiled cloak) and a jangjuk (long smoking pipe), and it was amazing how the viewers recognized her as Cruella right away.`,
  `Q. When you portray lesser-known objects of Korean culture like the Korean jangjuk pipe, have there been any incidents involving people’s lack of knowledge or misunderstanding about the items you’re expressing?
  Yes, there have. There were many misunderstandings about golpae, the Korean dominoes that I illustrated for Alice’s Adventures in Wonderland. More than a few people thought they were mahjong tiles, but in fact, golpae were widely used for games during the Joseon period.`,
  `Q. Among the social media comments on your work, we can see more comments left in foreign languages than in Korean. It’s also well known that Hollywood stars like Angelina Jolie have posted your illustrations on social media. Do you have any unforgettable memories of foreign fans?
  Once, I received an email from an American who was presumably of Korean ancestry. She said she’d liked to play princess as a child, but one day she was struck by the idea that she could never be a princess because she was Asian, not white like them. When she happened to see the princesses in Hanbok that I had drawn, she shed tears. It was heart-warming to know that I could console someone with what I’d begun to do just for fun. I’ve also seen and heard comments that my works have helped people develop an interest in and love for Hanbok, which makes me feel a greater sense of responsibility. I’ve personally come to cherish our tradition more deeply.`,
  `Q. In 2019, you received a Letter of Appreciation from the Minister of Culture, Sports and Tourism for your contribution to publicizing traditional Korean culture worldwide. You’ve also worked with our foundation. Could you comment on that?
  I feel very honored and grateful to have received the Letter of Appreciation. I framed it and hung it on my wall, and every time I see it, I feel proud. Last year, I took part in the KF exhibition Expanded Animation, celebrating the 60th anniversary of the Korea-Denmark diplomatic relationship. I’ve also visited Denmark as part of a bilateral artists exchange project. Thanks to the visit, I’m working on a new project with the National Museum of Denmark, reinterpreting myths of Northern Europe through Hanbok and Korean paintings.`,
  `Q. Your book Story of Hanbok Drawn by Obsidian deals with women’s traditional attire. We understand that you plan to publish another book on men’s clothing. Would you tell us about your future plans?
  As I began to study men’s clothing, I learned that menswear developed in much more diverse ways than womenswear, due to laws that restricted women from outdoor activities. I’d like to highlight pieces of clothing from that period, though it takes a lot of time to draw them and verify that they’re accurate. Even if it takes quite some time, I want to produce a good book that meets the expectations of those who will have waited for it. In the meantime, the result of my collaboration with an American comic book publisher will go public soon. It’s a variant cover featuring a Korean heroine in Hanbok. A variant cover is a special-edition cover of a comic book that’s newly drawn by an artist. My previous collaborations with overseas firms were aimed at Korean audiences, but this time, our collaboration is aimed directly at the American market. I think it’s quite meaningful. I feel that the status of Korean cultural media has been elevated.`
];

const Content3 = () => {
  return (
    <>
      <img
        className="vertical"
        src="http://newsletter.kf.or.kr/news/news_202004/8_1.jpg"
      />
      <div class="caption">
        {"Alice’s Adventures in Wonderland, 2011. / Courtesy of Wooh Na-young."}
      </div>
      <img
        className="vertical"
        src="http://newsletter.kf.or.kr/news/news_202004/8_2.jpg"
      />
      <div class="caption">
        {"Coronet Dance, 2012. / Courtesy of Wooh Na-young."}
      </div>
      <img
        className="vertical"
        src="http://newsletter.kf.or.kr/news/news_202004/8_3.jpg"
      />
      <div class="caption">
        {
          "Special Thor: Ragnarok poster for Chuseok, 2017. / Courtesy of the Walt Disney Company Korea."
        }
      </div>
    </>
  );
};

const Ending = ``;

const Contacts = [];

const Tags = [];
