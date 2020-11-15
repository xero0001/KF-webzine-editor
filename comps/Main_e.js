import ids from "./ids";
import idsEn from "./idsEn";

const idList = idsEn;

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
        href={"http://enewsletter.kf.or.kr/?menuno=" + idList[1]}
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
          href={"http://enewsletter.kf.or.kr/?menuno=" + idList[2]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/KF_Activities_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/KF_Activities_e_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/KF_Activities_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/KF_Activities_e_on.jpg"
              alt=""
            />
          </div>
        </a>

        <a
          className="article two"
          href={"http://enewsletter.kf.or.kr/?menuno=" + idList[12]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Interview_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Interview_e_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Interview_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Interview_e_on.jpg"
              alt=""
            />
          </div>
        </a>
        <div className="padding"></div>
        <a
          className="article three"
          href={"http://enewsletter.kf.or.kr/?menuno=" + idList[15]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Info_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Info_e_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Info_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Info_e_on.jpg"
              alt=""
            />
          </div>
        </a>

        <a
          className="article three three2"
          href={"http://enewsletter.kf.or.kr/?menuno=" + idList[11]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/What's_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/What's_e_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/What's_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/What's_e_on.jpg"
              alt=""
            />
          </div>
        </a>

        <a
          className="article three"
          href={"http://enewsletter.kf.or.kr/?menuno=" + idList[8]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Event_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Event_e_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Event_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Event_e_on.jpg"
              alt=""
            />
          </div>
        </a>
        <div className="padding"></div>
        <a
          className="article two"
          href={"http://enewsletter.kf.or.kr/?menuno=" + idList[16]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Feature1_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Feature_e_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Feature1_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Feature_e_on.jpg"
              alt=""
            />
          </div>
        </a>
        <a
          className="article two"
          href={"http://enewsletter.kf.or.kr/?menuno=" + idList[17]}
        >
          <div className="desktop">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Feature2_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Feature2_e_on.jpg"
              alt=""
            />
          </div>
          <div className="mobile">
            <img
              src="http://kf.or.kr/newsletter/images/202011/Feature2_e_off.jpg"
              alt=""
            />
            <img
              className="on"
              src="http://kf.or.kr/newsletter/images/202011/Feature2_e_on.jpg"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Normal;
