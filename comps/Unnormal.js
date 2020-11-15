const Unnormal = ({
  category,
  language,
  icon,
  title,
  year,
  image,
  images,
  caption,
  ETC,
  imageType,
  imageAlign,
  content,
  contacts,
  contacts2,
  tags,
  anotherid,
  thisid,
}) => (
  <div id="sub">
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .vertical { max-width: 500px; display:block; margin-left:auto; margin-right:auto; width: 100%;}
      .image {max-width: 1112px; display:block; margin-left:auto; margin-right:auto; width:100%;}
      .subStyle {width:100%; background-color:white, padding-top:18px;}
      .indent {text-indent:-16px !important; margin-left:16px !important;}
      .contact span{ display:inline-block;}
    `,
      }}
    />
    <div className="subContentContainer">
      <div
        className="subStyle"
        style={{
          width: "100%",
          backgroundColor: "transparent",
          paddingTop: "78px",
        }}
      ></div>
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
            style={{ width: "13px", height: "16px" }}
            src="http://newsletter.kf.or.kr/news/news_201804/images/sub_home.png"
            alt=""
          />
          {category} &gt; {title}
        </div>
        <div className="subContent">
          <div className="title">
            {icon === "calendar" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201804/images/event_topicon.png"
                alt=""
              />
            )}
            {icon === "magazine" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201807/images/sub_topicon4.png"
                alt=""
              />
            )}
            {icon === "global" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201911/images/sub_topicon3.png"
                alt=""
              />
            )}
            {icon === "culture" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201806/images/sub_topicon2.png"
                alt=""
              />
            )}
            {icon === "exhibition" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201911/images/sub_topicon.png"
                alt=""
              />
            )}
            {icon === "america" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201911/images/sub_flag.png"
                alt=""
              />
            )}
            {icon === "ukraine" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_202003/ukraine.png"
                alt=""
              />
            )}
            {icon === "plane" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_202004/plane.png"
                alt=""
              />
            )}
            {icon === "news" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201804/images/news_topicon.png"
                alt=""
              />
            )}
            {title.split("\n").map((line, index) => {
              if (line.charAt(0) === "[") {
                return (
                  <span
                    key={index}
                    className="colorBlack"
                    style={{ display: "block", fontSize: "20pt" }}
                  >
                    {line}
                  </span>
                );
              } else {
                return (
                  <span
                    key={index}
                    className="colorBlack"
                    style={{ display: "block" }}
                  >
                    {line}
                  </span>
                );
              }
            })}
          </div>
          {image && image !== "" && imageType === "vertical" && (
            <img
              src={"http://kf.or.kr/newsletter/images/" + year + "/" + image}
              alt=""
              className="vertical"
            />
          )}
          {image && imageType === "" && (
            <img
              src={"http://kf.or.kr/newsletter/images/" + year + "/" + image}
              alt=""
              className="image"
            />
          )}
          {images &&
            images.length > 0 &&
            imageType === "vertical" &&
            imageAlign &&
            imageAlign === "22" && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  maxWidth: "500px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                {images.length > 0 &&
                  images.map((image) => (
                    <img
                      src={image}
                      alt=""
                      style={{ width: "50%", margin: "0px" }}
                    />
                  ))}
              </div>
            )}
          {caption && <div className="caption">{caption}</div>}
          {content !== "" &&
            content.split("\n").map((line, index) => {
              if (index === 0) {
                return (
                  <p
                    style={{ textAlign: "justify" }}
                    key={index}
                    className="first"
                  >
                    {line}
                  </p>
                );
              } else {
                return (
                  <p style={{ textAlign: "justify" }} key={index}>
                    {line}
                  </p>
                );
              }
            })}
          {images && images.length > 0 && imageAlign && imageAlign === "12" && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              {images.length > 0 &&
                images.map((image) => (
                  <img
                    src={image}
                    alt=""
                    style={{ width: "50%", margin: "0px" }}
                  />
                ))}
            </div>
          )}
          <ETC />
          {contacts.length > 0 && (
            <div className="contact">
              {contacts.map((contact) => (
                <span>
                  {contact.type === "place" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_location.png"
                      alt=""
                    />
                  )}
                  {contact.type === "time" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_time.png"
                      alt=""
                    />
                  )}
                  {contact.type === "contact" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_call.png"
                      alt=""
                    />
                  )}
                  {contact.type === "email" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_mail.png"
                      alt=""
                    />
                  )}
                  {contact.type === "note" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_note.png"
                      alt=""
                    />
                  )}
                  {contact.type === "school" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_school.png"
                      alt=""
                    />
                  )}
                  {contact.type === "student" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_student.png"
                      alt=""
                    />
                  )}
                  {contact.name}
                </span>
              ))}
              {contacts2.length > 0 && <br />}
              {contacts2.map((contact) => (
                <span>
                  {contact.type === "place" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_location.png"
                      alt=""
                    />
                  )}
                  {contact.type === "time" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_time.png"
                      alt=""
                    />
                  )}
                  {contact.type === "contact" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_call.png"
                      alt=""
                    />
                  )}
                  {contact.type === "email" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_mail.png"
                      alt=""
                    />
                  )}
                  {contact.type === "note" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_note.png"
                      alt=""
                    />
                  )}
                  {contact.type === "school" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_school.png"
                      alt=""
                    />
                  )}
                  {contact.type === "student" && (
                    <img
                      src="http://newsletter.kf.or.kr/news/news_201804/images/sub_student.png"
                      alt=""
                    />
                  )}
                  {contact.name}
                </span>
              ))}
            </div>
          )}
          {tags.length > 0 && (
            <div className="tags">
              <img
                src="http://newsletter.kf.or.kr/news/news_201804/images/sub_tag.png"
                alt=""
              />
              {tags.map((tag) => (
                <a
                  href={
                    "http://knewsletter.kf.or.kr/search_newsletter.html?query=" +
                    tag
                  }
                >
                  {tag}
                </a>
              ))}
            </div>
          )}
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
                style={{ marginLeft: "4px" }}
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
            <a href={"http://knewsletter.kf.or.kr/?menuno=" + thisid}>KOREAN</a>
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
                style={{ marginLeft: "4px" }}
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
);

export default Unnormal;
