import './recommend.css';

export const RecommendNearby = (props) => {
  return (
    <>
      <hr />
      <div className="container">
        <div className="chano1">
          <p className="reco-title">내 근처 카페</p>
          <p className="reco-subtitle">나와 거리가 가까운 카페!</p>
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
                <span className="congestion">여유</span>
                <span className="distance">200m</span>
              </p>
            </a>
          </p>
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
                <span className="congestion">여유</span>
                <span className="distance">200m</span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a href="">
              <img src={require("./cookieCake.jpg").default} />
              <p>
                <span className="congestion">여유</span>
                <span className="distance">200m</span>
              </p>
            </a>
          </p>
        </div>
      </div>
    </>
  );
        }
