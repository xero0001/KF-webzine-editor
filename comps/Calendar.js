const Normal = ({
  language,
  category,
  icon,
  title,
  image,
  images,
  imageType,
  imageAlign,
  content,
  events,
  contacts,
  tags,
  anotherid,
  thisid,
}) => (
  <div id="events">
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .vertical { max-width: 500px; display:block; margin-left:auto; margin-right:auto; width: 100%;}
          .image {max-width: 1112px; display:block; margin-left:auto; margin-right:auto; width:100%;}
          .subStyle {width:100%; background-color:white; padding-top:18px;}
        `,
      }}
    />
    <div class="eventsContainer">
      <div
        className="subStyle"
        style={{
          width: "100%",
          backgroundColor: "transparent",
          paddingTop: "78px",
        }}
      ></div>
      <div class="center">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
            marginBottom: "28px",
          }}
        >
          <img
            style={{ width: "13px", height: "16px" }}
            src="http://newsletter.kf.or.kr/news/news_201804/images/sub_home.png"
            alt=""
          />
          {category} &gt; {title}
        </div>
        <div class="eventsContent">
          <div class="title">
            <img
              alt=""
              src="http://newsletter.kf.or.kr/news/news_201804/images/event_topicon.png"
            />
            <span className="colorBlack" style={{ display: "block" }}>
              {title}
            </span>
          </div>
          <div class="tileContainer clearfix">
            {events &&
              events.map((event) => (
                <div class="tile">
                  <div class="box">
                    <div class="date">{event.date}</div>
                    <div class="event">
                      {event.title.split("\n").map((line, index) => {
                        return (
                          <span
                            style={{ display: "block", wordBreak: "keep-all" }}
                          >
                            {line}
                          </span>
                        );
                      })}
                      <small>
                        {event.place.split("\n").map((line, index) => {
                          return (
                            <span style={{ display: "block" }}>{line}</span>
                          );
                        })}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="center goTranslatePage">
        {language === "en" && (
          <a href={"http://knewsletter.kf.or.kr/?menuno=" + thisid}>KOREAN</a>
        )}
        {language === "kr" && (
          <a href={"http://enewsletter.kf.or.kr/?menuno=" + anotherid}>
            ENGLISH
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Normal;
