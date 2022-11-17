import { set } from "mongoose";
import { useState, useEffect } from "react";
import "../css/Mypage.css";
import axios from "axios";

export const Mypage = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState();
  let CReserve = [];
  const [arr, setArr] = useState([]);

  console.log('1번 넘어와?')
  useEffect(() => {
    console.log("2번 넘어와?");
    document.getElementById("AdHeader").style.display = "none";
    

    if (localStorage.getItem("id") != null) {
      console.log("3번 넘어와?");
      console.log(localStorage.getItem("id"));
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setNick(localStorage.getItem("nick"));
      setBirth(localStorage.getItem("birth"));
      setPhone(localStorage.getItem("phone"));
    }

    console.log(id);
    console.log("4번 넘어와?" + id);
    axios
      .post("http://127.0.0.1:3000/mypage", {
        C_ID: localStorage.getItem("id"),
      })
      .then((response) => {
        console.log("데이터 보내기 성공", response.data.C_RESERVE);

        setResult(response.data.result);
        CReserve = response.data.C_RESERVE;
        console.log("CRESERVE CHECK", CReserve);
        console.log("result 나와? ", result);
        console.log("1단계 돌입");

        for (let i = 0; i < CReserve.length; i++) {
          console.log("2단계 돌입");
          // {}객체타입을 -->> [] 배열타입으로 변경
          CReserve[i] = CReserve[i] = Object.values(CReserve[i]);
        }
        console.log("전처리 돌입 1 : ", CReserve);

        setArr(
          CReserve.map(function (data) {
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
    }, [result]);

  return (
    <>
      <div className="container">
        <div>
          <h3 className="MypageTitle">마이페이지</h3>
          <hr className="MypageHr"></hr>
        </div>
        <div>
          <p className="MypageNick">
            <div className="profile">
              <img class="profileImg" src={require("../user.jpg").default} />
            </div>
            {name} 님
            <a href="#">
              <span className="MypageEdit">
                <img
                  className="settingImg"
                  src={require("../setting.png").default}
                />
                회원 정보 수정
              </span>
            </a>
            <ul style={{ position: "relative", left: "80px" }}>
              <li className="MypageLi">닉네임 : {nick}</li>
              <li className="MypageLi">생년월일 : {birth}</li>
              <li className="MypageLi">전화번호 : 0{phone}</li>
            </ul>
          </p>
          <hr className="MypageHr1"></hr>
          <div className="MypageReserveTitle">
            <h3
              style={{
                display: "inline-block",
                width: "300px",
                margin: "0",
              }}
            >
              예약 내역 확인
            </h3>
          </div>
          <hr className="MypageHr2"></hr>
          {arr}
        </div>
      </div>
    </>
  );

};