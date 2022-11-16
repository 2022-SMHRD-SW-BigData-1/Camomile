import { Link } from "react-router-dom";
import "../css/AdHeader.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const AdHeader = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [CafeName, setCafeName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("id") != null) {
      setId(localStorage.getItem("id"));
      setPw(localStorage.getItem("pw"));
      setCafeName(localStorage.getItem("cafeName"));
    }
  }, []);

  const Logout = (e) => {
    e.preventDefault();
    console.log("handleJoin!");

    axios
      .get("http://127.0.0.1:3000/Logout", {})
      .then((response) => {
        console.log("데이터 보내기 성공", response.data);
        window.localStorage.clear();
        window.sessionStorage.clear();
        window.location.replace("/LoginPageBusiness");
      })
      .catch((err) => {
        console.log("실패 그만 떠 제발..");
      });
  };

  let p1 = {};
  return (
    <div id="AdHeader">
      <div
        className="container"
        style={{
          position: "relative",
          height: 70,
          backgroundColor: "rgb(255, 246, 209)",
        }}
      >
        <a
          href="/BookingCheck"
          style={{ display: "inline-block", position: "relative" }}
        >
          <img
            src={require("../camomileBusiness.png").default}
            style={{
              display: "inline-block",
              position: "relative",
              width: "150px",
              top: 7,
              left: 30,
              // marginRight: "1",
            }}
          />
        </a>
        <div className="adFlexBar">
          <Link to="BookingCheck" style={{ color: "gray" }}>
            <p
              id="p1"
              onClick={() => {
                document.getElementById("p1").style.color = "black";
                document.getElementById("p2").style.color = "";
                document.getElementById("p3").style.color = "";
              }}
              style={{ color: "black" }}
            >
              예약확인
            </p>
          </Link>
          <Link
            to="BookingHistory"
            style={{ color: "gray", position: "relative", right: "20px" }}
          >
            <p
              id="p2"
              onClick={() => {
                document.getElementById("p1").style.color = "";
                document.getElementById("p2").style.color = "black";
                document.getElementById("p3").style.color = "";
              }}
            >
              예약내역
            </p>
          </Link>
          <Link
            to="NoticeB"
            style={{ color: "gray", position: "relative", right: "20px" }}
          >
            <p
              id="p3"
              onClick={() => {
                document.getElementById("p1").style.color = "";
                document.getElementById("p2").style.color = "";
                document.getElementById("p3").style.color = "black";
              }}
              style={{ color: "gray", position: "relative", right: "25px" }}
            >
              공지사항
            </p>
          </Link>
          <ul className="AdHeaderUl">
            <li>
              <p
                style={{
                  display: "inline-block",
                  position: "relative",
                  width: "auto",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "14px",
                  position: "relative",
                  float: "left",
                }}
              >
                {CafeName} 사장님!{" "}
                <span style={{ position: "relative", marginLeft: "5px" }}>
                  환영합니다.
                </span>
              </p>
            </li>
            <li
              style={{
                display: "inline-block",
                position: "relative",
                width: "70px",
              }}
            >
              <span
                onClick={Logout}
                style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
              >
                로그아웃
              </span>
            </li>
            <li
              style={{
                display: "inline-block",
                position: "relative",
                width: "100px",
              }}
            >
              <Link
                to=""
                style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
              >
                마이페이지
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
