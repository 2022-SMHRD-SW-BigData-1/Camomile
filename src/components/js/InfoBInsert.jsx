import "../css/InfoBInsert.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const InfoBInsert = (props) => {
  useEffect(function () {
    document.getElementById("SearchHeader").style.display = "none";
    document.getElementById("AdHeader").style.display = "none";
  });

  // let user = JSON.parse(localStorage.getItem("cafeName"));

  const cafeNameRef = useRef();
  const cafeTelRef = useRef();
  const cafeLocRef = useRef();
  const cafeKeyWordRef = useRef();
  const cafeOpenTimeRef = useRef();
  const cafeCloseTimeRef = useRef();
  const cafeIntroRef = useRef();
  const cafeTableNumRef = useRef();
  const [mon, setMon] = useState("");
  const [tue, setTue] = useState("");
  const [wed, setWed] = useState("");
  const [thu, setThu] = useState("");
  const [fri, setFri] = useState("");
  const [sat, setSat] = useState("");
  const [sun, setSun] = useState("");

  const cafeInfo = (e) => {
    e.preventDefault();
    console.log("cafeinfo!");
    console.log(cafeIntroRef.current.value);
    const holiday = [mon, tue, wed, thu, fri, sat, sun];

    axios
      .post("http://127.0.0.1:3000/infoinsert", {
        cafeName: cafeNameRef.current.value,
        cafeTel: cafeTelRef.current.value,
        cafeLoc: cafeLocRef.current.value,
        cafeTableNum: cafeTableNumRef.current.value,
        cafeKeyWord: cafeKeyWordRef.current.value,
        cafeTableNum: cafeTableNumRef.current.value,
        cafeOpentime: cafeOpenTimeRef.current.value,
        cafeClosetime: cafeCloseTimeRef.current.value,
        cafeIntro: cafeIntroRef.current.value,
        holiday: holiday.join("").split("").join(", "),
      })
      .then((response) => {
        console.log("데이터 보내기 성공", response.data);
        alert("성공!");
        console.log(response.data.cafeName);
        localStorage.setItem("cafeName", response.data.cafeName);
        // localStorage.clear();
        window.location.replace("/BookingCheck");
      })
      .catch((err) => {
        console.log("데이터 보내기 실패");
        console.log(holiday.join("").split("").join(", "));
      });
  };

  return (
    <div className="container">
      <form onSubmit={cafeInfo}>
        <div>
          <h1 className="BookingHistoryH1">카페 정보 입력</h1>
          <hr className="BookingHistoryHr" style={{ marginTop: "35px" }}></hr>

          <div className="CafeName">
            <h3>카페명</h3>
            <input
              ref={cafeNameRef}
              placeholder="카페 이름을 입력하세요"
              name="cafeName"
            ></input>
          </div>

          <div className="CafePhone">
            <h3>카페 연락처</h3>
            <input
              ref={cafeTelRef}
              name="cafeTel"
              placeholder="카페 연락처를 입력하세요"
            ></input>
          </div>

          <div className="CafeAd">
            <h3>카페 주소</h3>
            <input
              ref={cafeLocRef}
              placeholder="카페 주소를 입력하세요"
              style={{ width: 390 }}
              name="cafeLoc"
            ></input>
          </div>

          <div className="CafeKey">
            <h3>
              카페 키워드{" "}
              <span style={{ fontSize: 16, color: "gray" }}>
                키워드는 #으로 구분해서 입력해주세요
              </span>
            </h3>

            <input
              ref={cafeKeyWordRef}
              placeholder="내용을 입력해주세요"
              style={{ width: 800 }}
              name="cafeKeyWord"
            ></input>
          </div>

          <div className="CafeTableNum">
            <h3>
              카페 테이블 수{" "}
              <span style={{ fontSize: 16, color: "gray" }}>
                카페 내 테이블 수를 입력해주세요
              </span>
            </h3>
            <input
              type="number"
              ref={cafeTableNumRef}
              name="cafeTableNum"
              placeholder="테이블 수를 입력하세요"
            ></input>
          </div>

          <div className="CafeTime">
            <h3>영업 시간</h3>
            OPEN
            <input
              type="time"
              className="opentime"
              ref={cafeOpenTimeRef}
              name="cafeOpentime"
            ></input>
            <input
              type="time"
              className="closetime"
              ref={cafeCloseTimeRef}
              name="cafeClosetime"
            ></input>{" "}
            CLOSE
          </div>
          <div className="refresh">
            <h3>휴무</h3>
            <form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "800px",
                }}
              >
                <span>
                  <input
                    onChange={(e) => {
                      let now;
                      if (e.currentTarget.checked == true) {
                        now = "월";
                      } else if (e.currentTarget.checked == false) {
                        now = "";
                      }
                      setMon(now);
                    }}
                    type="checkbox"
                    className="monday"
                    style={{ marginRight: "3px" }}
                    name="holiday"
                    value="월요일"
                  ></input>{" "}
                  월요일
                </span>
                <span>
                  <input
                    onChange={(e) => {
                      let now;
                      if (e.currentTarget.checked == true) {
                        now = "화";
                      } else if (e.currentTarget.checked == false) {
                        now = "";
                      }
                      setTue(now);
                    }}
                    type="checkbox"
                    className="tuesday"
                    style={{ marginRight: "3px" }}
                    name="holiday"
                    value="화요일"
                  ></input>{" "}
                  화요일
                </span>
                <span>
                  <input
                    onChange={(e) => {
                      let now;
                      if (e.currentTarget.checked == true) {
                        now = "수";
                      } else if (e.currentTarget.checked == false) {
                        now = "";
                      }
                      setWed(now);
                    }}
                    type="checkbox"
                    className="wednesday"
                    style={{ marginRight: "3px" }}
                    name="holiday"
                    value="수요일"
                  ></input>{" "}
                  수요일
                </span>
                <span>
                  <input
                    onChange={(e) => {
                      let now;
                      if (e.currentTarget.checked == true) {
                        now = "목";
                      } else if (e.currentTarget.checked == false) {
                        now = "";
                      }
                      setThu(now);
                    }}
                    type="checkbox"
                    className="thursday"
                    style={{ marginRight: "3px" }}
                    name="holiday"
                    value="목요일"
                  ></input>{" "}
                  목요일
                </span>
                <span>
                  <input
                    onChange={(e) => {
                      let now;
                      if (e.currentTarget.checked == true) {
                        now = "금";
                      } else if (e.currentTarget.checked == false) {
                        now = "";
                      }
                      setFri(now);
                    }}
                    type="checkbox"
                    className="friday"
                    style={{ marginRight: "3px" }}
                    name="holiday"
                    value="금요일"
                  ></input>{" "}
                  금요일
                </span>
                <span>
                  <input
                    onChange={(e) => {
                      let now;
                      if (e.currentTarget.checked == true) {
                        now = "토";
                      } else if (e.currentTarget.checked == false) {
                        now = "";
                      }
                      setSat(now);
                    }}
                    type="checkbox"
                    className="saturday"
                    style={{ marginRight: "3px" }}
                    name="holiday"
                    value="토요일"
                  ></input>{" "}
                  토요일
                </span>
                <span>
                  <input
                    onChange={(e) => {
                      let now;
                      if (e.currentTarget.checked == true) {
                        now = "일";
                      } else if (e.currentTarget.checked == false) {
                        now = "";
                      }
                      setSun(now);
                    }}
                    type="checkbox"
                    className="sunday"
                    style={{ marginRight: "3px" }}
                    name="holiday"
                    value="일요일"
                  ></input>{" "}
                  일요일
                </span>
              </div>
            </form>
          </div>

          <div className="CafeIntro">
            <h3>카페 소개</h3>
            <textarea
              ref={cafeIntroRef}
              placeholder="내용을 입력해주세요"
              style={{ width: 800, height: 150, resize: "none" }}
            ></textarea>
          </div>

          <hr className="BookingHistoryHr1" style={{ marginTop: "5px" }}></hr>
          <button className="InsertButton">카페등록</button>
        </div>
      </form>
    </div>
  );
};
