import React from "react";
import Head from "next/head";
import Normal from "../comps/Normal";
import Calendar from "../comps/Calendar";
import Year from "../comps/Year";
import Tags from "../comps/Tags";
import TagsEn from "../comps/TagsEn";
import Ids from "../comps/Ids";
import IdsEn from "../comps/IdsEn";

import Posts from "./posts/posts";

const Categories = ["KF Activities", "What's On", "People", "KF Features"];

export default () => {
  const [state, setState] = React.useState({
    id: 11,
    language: "kr",
  });

  const [inputState, setInputState] = React.useState({
    id: 11,
    language: "kr",
  });

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>ID: </div>
        <input
          value={inputState.id}
          onChange={(e) => {
            setInputState({ ...inputState, id: parseInt(e.target.value) });
          }}
          type="number"
        />
        <div style={{ marginLeft: "32px" }}>언어: </div>
        <select
          name="언어"
          value={inputState.language}
          onChange={(e) => {
            setInputState({ ...inputState, language: e.target.value });
          }}
        >
          <option value="kr">KR</option>
          <option value="en">EN</option>
        </select>
        <button
          style={{ marginLeft: "32px" }}
          onClick={() => {
            setState({
              id: parseInt(inputState.id),
              language: inputState.language,
            });
          }}
        >
          조회
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "32px" }}>
        <div>ID: {state.id}</div>
        <div style={{ marginLeft: "32px" }}>언어: {state.language}</div>
      </div>
      <hr />
      {state.language === "kr"
        ? "한글:" + Ids[state.id]
        : "영어:" + IdsEn[state.id]}
      <hr />
      <div className="container">
        <div>
          <Head>
            <link
              rel="stylesheet"
              href="http://newsletter.kf.or.kr/news/news_202005/assets/style.css"
              type="text/css"
            />
          </Head>
          {(Posts[state.id - 1].type === "normal" ||
            Posts[state.id - 1].type === "unnormal") && (
            <Normal
              type={Posts[state.id - 1].type}
              language={state.language}
              category={Categories[Posts[state.id - 1].category]}
              icon={Posts[state.id - 1].icon}
              year={Year}
              title={
                state.language === "kr"
                  ? Posts[state.id - 1].title
                  : Posts[state.id - 1].titleEn
              }
              image={Posts[state.id - 1].image}
              imageType={Posts[state.id - 1].vertical ? "vertical" : ""}
              // content={""}
              Content={
                state.language === "kr"
                  ? Posts[state.id - 1].Content
                  : Posts[state.id - 1].ContentEn
              }
              contacts={
                state.language === "kr"
                  ? Posts[state.id - 1].contacts
                  : Posts[state.id - 1].contactsE
              }
              contacts2={Posts[state.id - 1].contacts2}
              tags={
                state.language === "kr"
                  ? Tags[state.id - 1].split(" / ")
                  : TagsEn[state.id - 1].split(" / ")
              }
              thisid={Ids[state.id]}
              anotherid={IdsEn[state.id]}
            />
          )}
          {Posts[state.id - 1].type === "events" && (
            <Calendar
              type={Posts[state.id - 1].type}
              language={state.language}
              category="What's On"
              icon="calendar"
              title={
                state.language === "kr"
                  ? Posts[state.id - 1].title
                  : Posts[state.id - 1].titleEn
              }
              events={
                state.language === "kr"
                  ? Posts[state.id - 1].events
                  : Posts[state.id - 1].eventsEn
              }
              image={{}}
              images={{}}
              imageType=""
              imageAlign=""
              contacts={{}}
              contacts2={{}}
              tags={{}}
              thisid={Ids[state.id]}
              anotherid={IdsEn[state.id]}
            />
          )}
        </div>
      </div>
    </div>
  );
};
