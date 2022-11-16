import "../css/ReservationMain.css";

export const ReservationMain = () => {
  return (
    <>
      {/* 검색창 */}
      <div
        className="container"
        style={{ position: "relative", height: 70, backgroundColor: "white" }}
      >
        <p className="searchP">
          <input className="searchBar"></input>
          <button
            style={{
              position: "inherit",
              width: "50px",
              height: "35px",
              bottom: "2px",
              backgroundColor: "rgb(241, 193, 0, 0)",
              border: "0px",
            }}
          >
            <img
              className="searchImg"
              src={require("../search.png").default}
            ></img>
          </button>
          <span>
            <select className="selectBar">
              <option value={"popular"}> 인기순 </option>
              <option value={"new"}> 신규순 </option>
            </select>
          </span>
        </p>
      </div>

      {/* 1행 */}
      <div className="girdContainer">
        <div className="reservationCafeList">
          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 2행 */}
      <div className="girdContainer">
        <div className="reservationCafeList">
          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3행 */}
      <div className="girdContainer">
        <div className="reservationCafeList">
          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 4행 */}
      <div className="girdContainer">
        <div className="reservationCafeList">
          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>

          <div className="reservationCafe">
            <img
              className="reservationImg"
              src={require("../cookieCake.jpg").default}
            ></img>
            <p className="reservationName">
              <span className="reservationNameSapn"> 카페 이름 </span>
              <span>
                <img
                  className="reservationHeart"
                  src={require("../emptyheart.png").default}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
