import { React, useEffect, useState, useRef } from "react";
import "../css/BookingHistory.css";
import axios from "axios";
export const BookingCheck = () => {
  const [reservList, setReservList] = useState([]);
  const [arr, setArr] = useState([]);
  const [result, setResult] = useState();
  useEffect(
    function () {
      document.getElementById("SearchHeader").style.display = "none";
      console.log("BookingCheck!");
      axios
        .post("http://127.0.0.1:3000/BookingCheck")
        .then((response) => {
          console.log("데이터 받기 성공", response.data.resvCheck);
          setReservList(response.data.resvCheck);
          setResult(response.data.result);
          for (let i = 0; i < reservList.length; i++) {
            // {}객체타입을 -->> [] 배열타입으로 변경
            setReservList((reservList[i] = Object.values(reservList[i])));
          }
          console.log(reservList);
          setArr(
            reservList.map(function (data) {
              let reserveNum = data[0];
              let reserveDate = data[9];
              let reqMenuA = data[3].split(", ");
              console.log("A항목");
              // console.log(reqMenuA);
              console.log(reqMenuA[0]);
              let reqMenuB = reqMenuA.filter(function (data) {
                return data.replace(/[^0-9]/g, "") != 0;
              });
              console.log("B항목");
              console.log(reqMenuB.join(", "));
              let reqMenuTotal = reqMenuB.join(", ");
              let visitDate = data[4];
              let visitTime = data[5];
              let tableNum = data[6];
              let people = data[7];
              let req_Req = data[8];
              return (
                <div
                  className="BookingHistoryDiv"
                  style={{
                    display: "block",
                    position: "relative",
                    bottom: "30px",
                  }}
                >
                  <p className="BookingNumber">주문번호 {reserveNum}</p>
                  <p
                    className="BookingDate"
                    style={{ right: "90px", fontSize: "20px" }}
                  >
                    예약날짜 : {reserveDate}
                  </p>
                  <p className="BookingTime"></p>
                  <hr
                    className="BookingHistoryHr1"
                    style={{
                      position: "relative",
                      margin: "20px 150px 30px 80px",
                    }}
                  ></hr>
                  <p className="BookTotal" style={{ display: "block" }}>
                    주문 내역
                  </p>
                  <p className="BookMenu" style={{ width: "50%" }}>
                    {reqMenuTotal}
                  </p>
                  <p className="BookTotal">
                    방문날짜{" "}
                    <span>
                      {visitDate} {visitTime}
                    </span>{" "}
                  </p>
                  <button
                    className="cancel"
                    onClick={() => {
                      alert("주문이 취소되었습니다.");
                      cancel(reserveDate);
                    }}
                  >
                    취소
                  </button>
                  <button
                    className="agree"
                    onClick={() => {
                      alert("주문이 승인되었습니다.");
                      allow(
                        data[1],
                        reqMenuTotal,
                        visitDate,
                        visitTime,
                        tableNum,
                        people,
                        req_Req,
                        reserveDate
                      );
                    }}
                  >
                    승인
                  </button>
                  <p className="BookTotal">
                    예약인원{" "}
                    <span>
                      {tableNum}개 / {people}
                    </span>
                  </p>
                  <p className="BookTotal">
                    요청사항 <span>{req_Req}</span>
                  </p>
                  <hr className="BookingHistoryHr2"></hr>
                </div>
              );
            })
          );
        })
        .catch((err) => {
          console.log("실패 그만 떠 제발..");
        });
    },
    [result]
  );
  function allow(
    C_ID,
    REQ_MENU,
    REQ_DAY,
    REQ_TIME,
    REQ_TABLE,
    REQ_PEOPLE,
    REQ_REQ,
    REQ_RESERVEDATE
  ) {
    axios
      .post("http://127.0.0.1:3000/Allow", {
        C_ID: C_ID,
        REQ_MENU: REQ_MENU,
        REQ_DAY: REQ_DAY,
        REQ_TIME: REQ_TIME,
        REQ_TABLE: REQ_TABLE,
        REQ_PEOPLE: REQ_PEOPLE,
        REQ_REQ: REQ_REQ,
        REQ_RESERVEDATE: REQ_RESERVEDATE,
      })
      .then((response) => {
        console.log("allow 데이터 전송 성공");
        window.location.reload();
      })
      .catch((err) => {
        console.log("allow 전송 실패");
      });
  }
  function cancel(REQ_RESERVEDATE) {
    axios
      .post("http://127.0.0.1:3000/Cancel", {
        REQ_RESERVEDATE: REQ_RESERVEDATE,
      })
      .then((response) => {
        console.log("allow 데이터 전송 성공");
        window.location.reload();
      })
      .catch((err) => {
        console.log("allow 전송 실패");
      });
  }
  return (
    <>
      <div className="container">
        <div className="BookingHistoryDiv">
          <h1 className="BookingHistoryH1">예약 확인</h1>
          <hr className="BookingHistoryHr"></hr>
          {arr}
        </div>
      </div>
    </>
  );
};
