const Normal = ({ issues, year, language, anotherid, thisid }) => (
  <div id="sub">
    <div id="news">
      <div className="newsContainer">
        <div className="center">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
              marginBottom: "28px",
            }}
          >
            <img
              alt=""
              src="http://newsletter.kf.or.kr/news/news_201804/images/sub_home.png"
            />
            {language === "kr" && (
              <span>What's On &gt; 세계 속 한국 이슈 & 현장</span>
            )}
            {language === "en" && (
              <span>What's On &gt; Worldwide Korea: Issues & Scenes</span>
            )}
          </div>
          <div className="newsContent clearfix">
            <div className="title">
              <img
                alt=""
                src="http://newsletter.kf.or.kr/news/news_201804/images/news_topicon.png"
              />
              {language === "kr" && (
                <span className="colorBlack">세계 속 한국 이슈 & 현장 </span>
              )}
              {language === "en" && (
                <span className="colorBlack">
                  Worldwide Korea: Issues & Scenes
                </span>
              )}
            </div>
            <div className="tileContainer">
              {issues &&
                issues.map((issue) => (
                  <a href={issue.link} className="tile" target="_blank">
                    <div className="name">
                      {issue.name.split("\n").map((e) => (
                        <p style={{ wordBreak: "keep-all" }}>{e}</p>
                      ))}
                    </div>
                    <img
                      src={
                        "http://newsletter.kf.or.kr/news/news_" +
                        year +
                        "/" +
                        issue.img
                      }
                      alt=""
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
        {language && language === "kr" && (
          <>
            <div className="center goTranslatePage">
              <a href={"http://enewsletter.kf.or.kr/?menuno=" + anotherid}>
                ENGLISH
              </a>
            </div>
            <div className="center">
              <div className="share">
                <a
                  href={
                    "https://twitter.com/home?status=http%3A//knewsletter.kf.or.kr/?menuno=" +
                    thisid
                  }
                  className="twitter"
                  target="_blank"
                ></a>
                <a
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=http%3A//knewsletter.kf.or.kr/?menuno=" +
                    thisid
                  }
                  className="facebook"
                  target="_blank"
                ></a>
              </div>
            </div>
          </>
        )}
        {language && language === "en" && (
          <>
            <div className="center goTranslatePage">
              <a href={"http://knewsletter.kf.or.kr/?menuno=" + thisid}>
                KOREAN
              </a>
            </div>
            <div className="center">
              <div className="share">
                <a
                  href={
                    "https://twitter.com/home?status=http%3A//enewsletter.kf.or.kr/?menuno=" +
                    anotherid
                  }
                  className="twitter"
                  target="_blank"
                ></a>
                <a
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=http%3A//enewsletter.kf.or.kr/?menuno=" +
                    anotherid
                  }
                  className="facebook"
                  target="_blank"
                ></a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);

export default Normal;
