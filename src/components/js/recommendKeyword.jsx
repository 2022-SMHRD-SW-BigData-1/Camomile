import "../css/recommend.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RecommendKeyword = (props) => {
  const cafeName1 = useRef();
  const cafeName2 = useRef();
  const cafeName3 = useRef();
  const cafeName4 = useRef();
  const cafeName5 = useRef();

  // let n1 = cafeName1.current.innerText;
  // let n2 = cafeName2.current.innerText;
  // let n3 = cafeName3.current.innerText;
  // let n4 = cafeName4.current.innerText;
  // let n5 = cafeName5.current.innerText;
  
  // const [honjap1, setHonjap1] = useState([]);
  // const nav = useNavigate();

  // // 혼잡도 계산하는 recommend 라우터
  // console.log("라우터 들어간다아~");

  // axios
  //   .post("http://127.0.0.1:3000/Recommend", {
  //     cafeName : [n1, n2, n3, n4, n5]
  //   })
  //   .then((response) => {
  //     console.log("혼잡도값 보내기 성공", response.data.honjap);
  //     setHonjap1(honjap1.concat(response.data.honjap));
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
          <p className="reco-title">리뷰가 많은 카페</p>
          <p className="reco-subtitle"># 많은 손님이 다녀갔어요!</p>
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
                    "&i=./image/11맷차.jpg"
                );
              }}
            >
              <img src={require("./image/11맷차.jpg").default} />
              <p>
                <span className="congestion" ref={cafeName1}>
                  맷차
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
                    "&i=./image/12아노씨스튜디오.jpg"
                );
              }}
            >
              <img src={require("./image/12아노씨스튜디오.jpg").default} />
              <p>
                <span className="congestion" ref={cafeName2}>
                  아노씨스튜디오
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
                    cafeName3.current.innerText +
                    "&i=./image/13카페플랜비.jpeg"
                );
              }}
            >
              <img src={require("./image/13카페플랜비.jpeg").default} />
              <p>
                <span className="congestion" ref={cafeName3}>
                  카페플랜비
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
                    cafeName4.current.innerText +
                    "&i=./image/14카페주덴.jpeg"
                );
              }}
            >
              <img src={require("./image/14카페주덴.jpeg").default} />
              <p>
                <span className="congestion" ref={cafeName4}>
                  카페주덴
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
                    cafeName5.current.innerText +
                    "&i=./image/15비비드.jpg"
                );
              }}
            >
              <img src={require("./image/15비비드.jpg").default} />
              <p>
                <span className="congestion" ref={cafeName5}>
                  비비드
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
