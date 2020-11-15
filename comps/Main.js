import ids from "./ids";
import idsEn from "./ids";

const idList = ids;

const Normal = () => (
  <div id="index">
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .padding{width: 100%; display:inline-block; height: 64px;}
          .toppad{width: 100%; display:inline-block; height:15px;}
          .center2{max-width:1200px;}
          .articles2{max-width:1080px !important;}
          .three { width:33.3333333% !important; }

          @media(max-width:750px){
            .padding{
              height:32px;
            }
            .toppad{ height:12px;}
          }
        `,
      }}
    />
    <div className="toppad"></div>
    <div className="center center2">
      <a
        href={"http://knewsletter.kf.or.kr/?menuno=" + idList[1]}
        className="slider clearfix"
      >
        <img
          className="desktop"
          src="http://kf.or.kr/newsletter/images/202011/banner.jpg"
          alt=""
        />
        <img
          className="mobile"
          src="http://kf.or.kr/newsletter/images/202011/banner.jpg"
          alt=""
        />
      </a>
      <div className="articles clearfix articles2">
        <a
          className="article two"
          href={"http://knewsletter.kf.or.kr/?menuno=" + idList[2]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/KF_Activities_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/KF_Activities_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/KF_Activities_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/KF_Activities_on.jpg"
              alt=""
            />
          </div>
        </a>

        <a
          className="article two"
          href={"http://knewsletter.kf.or.kr/?menuno=" + idList[12]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Interview_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Interview_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Interview_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Interview_on.jpg"
              alt=""
            />
          </div>
        </a>
        <div className="padding"></div>
        <a
          className="article three"
          href={"http://knewsletter.kf.or.kr/?menuno=" + idList[15]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Info_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Info_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Info_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Info_on.jpg"
              alt=""
            />
          </div>
        </a>

        <a
          className="article three three2"
          href={"http://knewsletter.kf.or.kr/?menuno=" + idList[11]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/What's_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/What's_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/What's_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/What's_on.jpg"
              alt=""
            />
          </div>
        </a>

        <a
          className="article three"
          href={"http://knewsletter.kf.or.kr/?menuno=" + idList[8]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Event_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Event_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Event_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Event_on.jpg"
              alt=""
            />
          </div>
        </a>
        <div className="padding"></div>
        <a
          className="article two"
          href={"http://knewsletter.kf.or.kr/?menuno=" + idList[16]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Feature1_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Feature1_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Feature1_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Feature1_on.jpg"
              alt=""
            />
          </div>
        </a>
        <a
          className="article two"
          href={"http://knewsletter.kf.or.kr/?menuno=" + idList[17]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Feature2_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Feature2_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Feature2_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Feature2_on.jpg"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Normal;
