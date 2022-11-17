import "../css/InfoBInsert.css";
import { useEffect } from "react";
export const InfoBInsertUpdate = (props) => {
  //   useEffect(function () {
  //     document.getElementById("SearchHeader").style.display = "none";
  //   });
  return (
    <div className="container">
      <div>
        <h1 className="BookingHistoryH1">카페 정보 수정</h1>
        <hr className="BookingHistoryHr" style={{ marginTop: "35px" }}></hr>
        <div className="CafeName">
          <h3>카페명</h3>
          <input placeholder="카페이름을 입력하세요"></input>
        </div>
        <div className="CafePhone">
          <h3>카페 연락처</h3>
          <input placeholder="카페이름을 입력하세요"></input>
        </div>
        <div className="CafeAd">
          <h3>카페 주소</h3>
          <input placeholder="우편번호"></input>
          <button className="CafeAdbutton">우편번호 검색</button>
          <br></br>
          <br></br>
          <input
            placeholder="상세주소를 입력하세요"
            style={{ width: 390 }}
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
            placeholder="내용을 입력해주세요"
            style={{ width: 800 }}
          ></input>
        </div>
        <div className="CafeTime">
          <h3>영업 시간</h3>
          OPEN<input type="time" className="opentime"></input>
          <input type="time" className="closetime"></input> CLOSE
        </div>
        <div className="refresh">
          <h3>휴무</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "800px",
            }}
          >
            <span>
              <input
                type="checkbox"
                className="monday"
                style={{ marginRight: "3px" }}
              ></input>{" "}
              월요일
            </span>
            <span>
              <input
                type="checkbox"
                className="tuesday"
                style={{ marginRight: "3px" }}
              ></input>{" "}
              화요일
            </span>
            <span>
              <input
                type="checkbox"
                className="weddnesday"
                style={{ marginRight: "3px" }}
              ></input>{" "}
              수요일
            </span>
            <span>
              <input
                type="checkbox"
                className="thursday"
                style={{ marginRight: "3px" }}
              ></input>{" "}
              목요일
            </span>
            <span>
              <input
                type="checkbox"
                className="friday"
                style={{ marginRight: "3px" }}
              ></input>{" "}
              금요일
            </span>
            <span>
              <input
                type="checkbox"
                className="saturday"
                style={{ marginRight: "3px" }}
              ></input>{" "}
              토요일
            </span>
            <span>
              <input
                type="checkbox"
                className="sunday"
                style={{ marginRight: "3px" }}
              ></input>{" "}
              일요일
            </span>
          </div>
        </div>
        <div className="CafeIntro">
          <h3>카페 소개</h3>
          <textarea
            placeholder="내용을 입력해주세요"
            style={{ width: 800, height: 150, resize: "none" }}
          ></textarea>
        </div>
        <hr className="BookingHistoryHr1" style={{ marginTop: "5px" }}></hr>
        <button className="InsertButton">정보수정</button>
      </div>
    </div>
  );
};
