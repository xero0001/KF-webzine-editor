const Normal = ({
  type,
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
  Content,
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
            .subStyle {width:100%; background-color:white; padding-top:18px;}
            .indent {text-indent:-14px !important; margin-left:14px !important;}
            .contact span{ display:inline-block;}
            a { text-decoration:none;}

            @media(max-width:750px){
              .tileContainer{
                column-count:1 !important;
              }
            }
          `,
      }}
    />
    <div className="subContentContainer">
      {type === "normal" && (
        <div
          className="subStyle"
          style={{
            width: "100%",
            backgroundColor: "white",
            paddingTop: "18px",
          }}
        >
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
        </div>
      )}
      {type === "unnormal" && (
        <div
          className="subStyle"
          style={{
            width: "100%",
            backgroundColor: "transparent",
            paddingTop: "78px",
          }}
        ></div>
      )}
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
            {icon === "southafrica" && (
              <img
                style={{ width: "50px" }}
                src="http://newsletter.kf.or.kr/news/news_202005/11_1.jpg"
                alt=""
              />
            )}
            {icon === "plane" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_202004/plane.png"
                alt=""
              />
            )}
            {icon === "calendar" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201804/images/event_topicon.png"
                alt=""
              />
            )}
            {icon === "uzb" && (
              <img
                src="http://kf.or.kr/newsletter/images/202010/15_1.jpg"
                style={{ width: "50px" }}
                alt=""
              />
            )}
            {icon === "publish" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201807/images/sub_topicon8.png"
                alt=""
              />
            )}
            {icon === "calendar" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201804/images/event_topicon.png"
                alt=""
              />
            )}
            {icon === "interview" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201804/images/sub_topicon5.png"
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
                src="http://kf.or.kr/newsletter/images/202009/11_1.jpg"
                style={{ width: "50px" }}
                alt=""
              />
            )}
            {icon === "news" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_201804/images/news_topicon.png"
                alt=""
              />
            )}
            {icon === "columbia" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_202006/10_1.jpg"
                alt=""
              />
            )}
            {icon === "mexico" && (
              <img
                src="http://kf.or.kr/newsletter/images/202007/10_1.jpg"
                style={{ width: "50px" }}
                alt=""
              />
            )}
            {icon === "portugal" && (
              <img
                src="http://kf.or.kr/newsletter/images/202008/9_1.jpg"
                style={{ width: "50px" }}
                alt=""
              />
            )}
            {icon === "ukraine" && (
              <img
                src="http://newsletter.kf.or.kr/news/news_202003/ukraine.png"
                alt=""
              />
            )}
            {icon === "spain" && (
              <img
                src="http://kf.or.kr/newsletter/images/202011/13_flag.jpg"
                alt=""
                style={{width:"50px"}}
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
          {
            // caption && <div className="caption">{caption}</div>
          }
          {
            // content !== "" &&
            // content.split("\n").map((line, index) => {
            //   if (index === 0) {
            //     return (
            //       <p
            //         style={{ textAlign: "justify" }}
            //         key={index}
            //         className="first"
            //       >
            //         {line}
            //       </p>
            //     );
            //   } else {
            //     return (
            //       <p style={{ textAlign: "justify" }} key={index}>
            //         {line}
            //       </p>
            //     );
            //   }
            // })
          }
          {
            //   images && images.length > 0 && imageAlign && imageAlign === "12" && (
            //   <div
            //     style={{
            //       display: "flex",
            //       flexWrap: "wrap",
            //       marginLeft: "auto",
            //       marginRight: "auto",
            //       marginTop: "40px",
            //       marginBottom: "40px",
            //     }}
            //   >
            //     {images.length > 0 &&
            //       images.map((image) => (
            //         <img
            //           src={image}
            //           alt=""
            //           style={{ width: "50%", margin: "0px" }}
            //         />
            //       ))}
            //   </div>
            // )
          }
          <Content />
          {
            // console.log(contacts)
          }
          {contacts.length > 0 && (
            <div className="contact">
              {contacts.map((contact, i) => (
                <span key={i}>
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
              {contacts2 && contacts2.length > 0 && <br />}
              {contacts2 &&
                contacts2.length > 0 &&
                contacts2.map((contact) => (
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
          {tags.length > 1 && (
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

export default Normal;
