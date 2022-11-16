import "../css/recommend.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const RecommendNearby = (props) => {
  const cafeName1 = useRef();
  const cafeName2 = useRef();
  const cafeName3 = useRef();
  const cafeName4 = useRef();
  const cafeName5 = useRef();

  const nav = useNavigate();

  // 혼잡도 계산하는 recommend 라우터
  // console.log("카페이름은 보내지나?" + name);
  // axios
  //   .post("http://127.0.0.1:3000/Recommend", {
  //     //params에서 받아온 name을 라우터로 보냄.
  //     cafeName1: cafeName1,
  //     cafeName2: cafeName2,
  //     cafeName3: cafeName3,
  //     cafeName4: cafeName4,
  //     cafeName5: cafeName5,
  //   })
  //   .then((response) => {
  //     console.log("혼잡도값 보내기 성공", response.data.honjap);
  //     setHonjap1(response.data.honjap);
  //     console.log("이 카페의 혼잡도는? hopjap1 " + honjap1);
  //   })
  //   .catch((err) => {
  //     console.log("혼잡도 보내기 실패");
  //   });

  return (
    <>
      <hr />
      <div className="container">
        <div className="chano1">
          <p className="reco-title">나와 관련있는 카페</p>
          <p className="reco-subtitle"># 예약된 카페</p>
        </div>
        <div className="reco-more"></div>
      </div>

      <div className="container">
        <div className="innerContainer">
          <p className="reco-cafe">
            <a
              href=""
              type="button"
              onClick={() => {
                nav(
                  "/CafeInfo?name=" +
                    cafeName1.current.innerText +
                    "&i=./image/1시리즈인트로.jpeg"
                );
              }}
            >
              <img src={require("./image/1시리즈인트로.jpeg").default} />
              <p>
                <span className="congestion" ref={cafeName1}>
                  시리즈인트로
                </span>
                <span className="distance">
                  <img
                    src={require("../혼잡도혼잡.png").default}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      width: "20px",
                      bottom: "2px",
                      left: "3px",
                    }}
                  />
                </span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a
              href=""
              type="button"
              onClick={() => {
                nav(
                  "/CafeInfo?name=" +
                    cafeName2.current.innerText +
                    "&i=./image/2티거훗타임쿠키in동명.jpg"
                );
              }}
            >
              <img src={require("./image/2티거훗타임쿠키in동명.jpg").default} />
              <p>
                <span className="congestion" ref={cafeName2}>
                  티거훗타임쿠키 in동명
                </span>
                <span className="distance">
                  <img
                    src={require("../혼잡도여유.png").default}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      width: "20px",
                      bottom: "2px",
                      left: "3px",
                    }}
                  />
                </span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a
              href=""
              type="button"
              onClick={() => {
                nav(
                  "/CafeInfo?name=" +
                    cafeName3.current.innerText +
                    "&i=./image/3로타리커피.jpeg"
                );
              }}
            >
              <img src={require("./image/3로타리커피.jpeg").default} />
              <p>
                <span className="congestion" ref={cafeName3}>
                  로타리커피
                </span>
                <span className="distance">
                  <img
                    src={require("../혼잡도보통.png").default}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      width: "20px",
                      bottom: "2px",
                      left: "3px",
                    }}
                  />
                </span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a
              href=""
              type="button"
              onClick={() => {
                nav(
                  "/CafeInfo?name=" +
                    cafeName4.current.innerText +
                    "&i=./image/4토라네코.jpg"
                );
              }}
            >
              <img src={require("./image/4토라네코.jpg").default} />
              <p>
                <span className="congestion" ref={cafeName4}>
                  토라네코
                </span>
                <span className="distance">
                  <img
                    src={require("../혼잡도혼잡.png").default}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      width: "20px",
                      bottom: "2px",
                      left: "3px",
                    }}
                  />
                </span>
              </p>
            </a>
          </p>
          <p className="reco-cafe">
            <a
              href=""
              type="button"
              onClick={() => {
                nav(
                  "/CafeInfo?name=" +
                    cafeName5.current.innerText +
                    "&i=./image/5소뇨.jpg"
                );
              }}
            >
              <img src={require("./image/5소뇨.jpg").default} />
              <p>
                <span className="congestion" ref={cafeName5}>
                  소뇨
                </span>
                <span className="distance">
                  <img
                    src={require("../혼잡도여유.png").default}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      width: "20px",
                      bottom: "2px",
                      left: "3px",
                    }}
                  />
                </span>
              </p>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
