import "./recommend.css";

export const RecommendNew = (props) => {
  return (
    <>
      <hr />
      <div className="container">
        <div className="chano1">
          <p className="reco-title">NEW 카페</p>
          <p className="reco-subtitle">새로 등록된 카페!</p>
        </div>
        <div className="reco-more">
          <a href="#">더보기</a>
        </div>
      </div>

      <div className="container">
        <div className="innerContainer">
          <p className="reco-cafe">
            <a href="">
              <img src={require("./cookieCake.jpg").default} />
              <p>
                <span className="congestion">여유</span>
                <span className="distance">200m</span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a href="">
              <img src={require("./cookieCake.jpg").default} />
              <p>
                <span className="congestion">혼잡</span>
                <span className="distance">60m</span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a href="">
              <img src={require("./cookieCake.jpg").default} />
              <p>
                <span className="congestion">보통</span>
                <span className="distance">200m</span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a href="">
              <img src={require("./cookieCake.jpg").default} />
              <p>
                <span className="congestion">여유</span>
                <span className="distance">450m</span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a href="">
              <img src={require("./cookieCake.jpg").default} />
              <p>
                <span className="congestion">여유</span>
                <span className="distance">300m</span>
              </p>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
