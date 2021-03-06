const Normal = ({
  language,
  category,
  icon,
  title,
  year,
  image,
  caption,
  images,
  imageType,
  imageAlign,
  content,
  ending,
  endingImage,
  endingAlign,
  endingCaption,
  contacts,
  tags,
  anotherid,
  thisid
}) => (
  <div id="sub">
    <div className="subContentContainer">
      <div className="center">
        <div>
          <img
            src="http://newsletter.kf.or.kr/news/news_201804/images/sub_home.png"
            alt=""
          />
          {category} &gt; {title}
        </div>
        <div class="subContent">
          <div class="title">
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
            {title.split("\n").map((line, index) => {
              return (
                <span className="colorBlack" style={{ display: "block" }}>
                  {line}
                </span>
              );
            })}
          </div>
          {image && image !== "" && imageType === "vertical" && (
            <img
              src={"http://newsletter.kf.or.kr/news/news_" + year + "/" + image}
              alt=""
              className="vertical"
            />
          )}
          {image && imageType === "" && (
            <img
              src={"http://newsletter.kf.or.kr/news/news_" + year + "/" + image}
              alt=""
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
                  marginBottom: "40px"
                }}
              >
                {images.map(image => (
                  <img
                    src={image}
                    alt=""
                    style={{ width: "50%", margin: "0px" }}
                  />
                ))}
              </div>
            )}
          {images && images.length > 0 && imageAlign && imageAlign === "12" && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "40px",
                marginBottom: "40px"
              }}
            >
              {images.map(image => (
                <img
                  src={image}
                  alt=""
                  style={{ width: "50%", margin: "0px" }}
                />
              ))}
            </div>
          )}
          {caption && <div className="caption">{caption}</div>}
          {content.split("\n").map((line, index) => {
            if (index === 0) {
              return (
                <>
                  <p
                    style={{ textAlign: "justify" }}
                    key={index}
                    className="first"
                  >
                    {line}
                  </p>
                  <br />
                </>
              );
            } else {
              return (
                <>
                  <p style={{ textAlign: "justify" }} key={index}>
                    {line}
                  </p>
                  <br />
                </>
              );
            }
          })}
          {ending &&
            ending.split("\n").map((line, index) => {
              return (
                <p
                  style={{ textAlign: "right", fontWeight: "bold" }}
                  key={index}
                >
                  {line}
                </p>
              );
            })}
          {endingImage && endingImage.length > 0 && endingAlign === "22" && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "550px",
                marginTop: "32px",
                marginBottom: "32px"
              }}
            >
              {endingImage.map(image => (
                <div
                  style={{
                    width: "50%",
                    height: "50%",
                    backgroundImage: "url('" + image + "')",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                ></div>
              ))}
            </div>
          )}
          {endingImage && endingImage.length > 0 && endingAlign === "11" && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "550px",
                marginTop: "32px",
                marginBottom: "32px"
              }}
            >
              {endingImage.map(image => (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('" + image + "')",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                ></div>
              ))}
            </div>
          )}
          {endingImage && endingImage.length > 0 && endingAlign === "12" && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "275px",
                marginTop: "32px",
                marginBottom: "32px"
              }}
            >
              {endingImage.map(image => (
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    backgroundImage: "url('" + image + "')",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                ></div>
              ))}
            </div>
          )}
          {endingCaption !== "" && (
            <div className="caption">{endingCaption}</div>
          )}
          {contacts.length > 0 && (
            <div class="contact">
              {contacts.map(contact => (
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
            <div class="tags">
              <img
                src="http://newsletter.kf.or.kr/news/news_201804/images/sub_tag.png"
                alt=""
              />
              {tags.map(tag => (
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

export default Normal;
