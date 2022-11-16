

export const Banner = (props) => {

  return (
    <header id="header">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="intro-text" style={{ padding: 0 }}>
              <div
                style={{ display: "flex", height: "200px", width: "1200px" }}
              >
                <img
                  src={require("../배너3390px.png").default}
                  style={{ display: "inline-block", width: "390px" }}
                />
                <a href="http://localhost:3001/Map_basic">
                  <img
                    src={require("../배너2390px.png").default}
                    style={{ display: "inline-block", width: "390px", height:'200px'}}
                  />
                </a>
                <img
                  src={require("../배너1390px.png").default}
                  style={{ display: "inline-block", width: "390px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
