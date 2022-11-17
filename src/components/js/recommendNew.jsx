import "../css/recommend.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const RecommendNew = (props) => {
  const cafeName1 = useRef();
  const cafeName2 = useRef();
  const cafeName3 = useRef();
  const cafeName4 = useRef();
  const cafeName5 = useRef();


  const nav = useNavigate();

  return (
    <>
      <hr />
      <div className="container">
        <div className="chano1">
          <p className="reco-title">New 카페</p>
          <p className="reco-subtitle"># 광주에 신상카페가 생겼어요!</p>
        </div>
        <div className="reco-more">
        </div>
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
                    "&i=./image/6herecafe.jpg"
                );
              }}
            >
              <img src={require("./image/6herecafe.jpg").default} />
              <p>
                <span className="congestion" ref={cafeName1}>
                  여기카페
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
                    cafeName2.current.innerText +
                    "&i=./image/7올데이피크닉.jpeg"
                );
              }}
            >
              <img src={require("./image/7올데이피크닉.jpeg").default} />
              <p>
                <span className="congestion" ref={cafeName2}>
                  올데이피크닉
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
                    "&i=./image/8카페벨벳.jpeg"
                );
              }}
            >
              <img src={require("./image/8카페벨벳.jpeg").default} />
              <p>
                <span className="congestion" ref={cafeName3}>
                  카페벨벳
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
                    "&i=./image/9하삼동커피 동명점.jpg"
                );
              }}
            >
              <img src={require("./image/9하삼동커피 동명점.jpg").default} />
              <p>
                <span className="congestion" ref={cafeName4}>
                  하삼동커피 동명점
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
                    "&i=./image/10루야.jpeg"
                );
              }}
            >
              <img src={require("./image/10루야.jpeg").default} />
              <p>
                <span className="congestion" ref={cafeName5}>
                  루야
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
