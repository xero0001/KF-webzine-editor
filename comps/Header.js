const Header = () => {
  return (
    <>
      <div className="center">
        <div className="logo">
          <button>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAk0lEQVRoge3XwQqAIBCE4Tnp2xtCz5n0BHXIU4jbKVf5P5j77kI1SQAALCRKypKKpMtZzjpb6C2QHQxqJfcW8Hj5d8rSC2wOBrSSeguEusThYNDW5ZOMhxgAxoqSdj29Y/Rr851PXWh3MKiVbhfyePnWB23dBWao02YX8vpDQxcCMAG60A+hC40OXWjk5elCAIC13Nw92bl4QOPWAAAAAElFTkSuQmCC" />
          </button>
          <a href="http://knewsletter.kf.or.kr/?menuno=6624">
            <img src="http://newsletter.kf.or.kr/news/news_201805/images/LOGO.png" />
          </a>
        </div>
        <nav style={{ display: "block" }}>
          <div className="link" id="activities">
            KF Activities
            <div className="submenuContainer">
              <div className="submenu">
                <div className="arrowUp"></div>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6627"
                >
                  2020 유라시아 청년아카데미 교육생 모집
                </a>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6628"
                >
                  '아세안의 빛, 하나의 공동체' 전시
                </a>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6629"
                >
                  제3회 아세안문화원 사진,영상 공모전
                  <br /> - 제 2회 수상작
                </a>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6630"
                >
                  4월호 뉴스레터 이벤트 - 십자말풀이 퀴즈
                </a>
              </div>
            </div>
          </div>
          <div className="delimiter"></div>
          <div className="link" id="whatsOn">
            What's On
            <div className="submenuContainer">
              <div className="submenu">
                <div className="arrowUp"></div>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6632"
                >
                  2020년 4월 KF 행사안내
                </a>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6633"
                >
                  [KF 카드뉴스] 2020 국민공공외교 프로젝트
                </a>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6634"
                >
                  세계 속 한국 이슈 &amp; 현장
                </a>
              </div>
            </div>
          </div>
          <div className="delimiter"></div>
          <div className="link" id="people">
            People
            <div className="submenuContainer">
              <div className="submenu">
                <div className="arrowUp"></div>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6636"
                >
                  [Interview] 우나영 - "서양 동화의 주인공에게 한복을
                  입혔습니다"
                </a>
              </div>
            </div>
          </div>
          <div className="delimiter"></div>
          <div className="link" id="kfFeatures">
            KF Features
            <div className="submenuContainer">
              <div className="submenu">
                <div className="arrowUp"></div>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6638"
                >
                  [해외에서 만나는 한국문화] 런던 도심 속 한국의 멋을 품은
                  갤러리, 한콜렉션
                </a>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6639"
                >
                  [한국 속의 세계] 이국의 맛, 언어, 사람을 만나는 '필리핀 마켓'
                </a>
                <a
                  className="item"
                  href="http://knewsletter.kf.or.kr/?menuno=6640"
                >
                  [Infographic] 1억 명 돌파 앞둔 지구촌 한류 팬 숫자
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
