import React from "react";
import Head from "next/head";
import Main from "../comps/Main";
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
  return (
    <div>
      <div className="container">
        <div>
          <Head>
            <link
              rel="stylesheet"
              href="http://kf.or.kr/newsletter/style/202009/style.css"
              type="text/css"
            />
          </Head>
          <Main />
        </div>
      </div>
    </div>
  );
};
