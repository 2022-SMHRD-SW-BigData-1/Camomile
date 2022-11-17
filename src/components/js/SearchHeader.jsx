import { Link } from "react-router-dom";
import "../css/SearchHeader.css";
import axios from "axios";

export const SearchHeader = () => {
  const Logout = (e) => {
    e.preventDefault();
    console.log("handleJoin!");

    axios
      .get("http://127.0.0.1:3000/Logout", {})
      .then((response) => {
        console.log("데이터 보내기 성공", response.data);
        window.localStorage.clear();
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("실패 그만 떠 제발..");
      });
  };

  let p1 = {};
  return (
    <div id="SearchHeader">
      <div
        className="container"
        style={{
          position: "relative",
          height: 70,
          backgroundColor: "rgb(255, 246, 209)",
        }}
      >
        <a href="/">
          <img
            src={require("../camomile.png").default}
            style={{
              display: "inline-block",
              position: "relative",
              width: "150px",
              top: 7,
              left: 30,
              marginRight: "100",
            }}
          />
        </a>
        <div className="seFlexBar">
          <p
            id="p1"
            onClick={() => {
              document.getElementById("p1").style.color = "black";
              document.getElementById("p2").style.color = "";
              document.getElementById("p3").style.color = "";
            }}
          >
            예약
          </p>
          <p
            id="p2"
            onClick={() => {
              document.getElementById("p1").style.color = "";
              document.getElementById("p2").style.color = "black";
              document.getElementById("p3").style.color = "";
            }}
          >
            리뷰
          </p>
          <Link
            to="Map_basic"
            style={{ color: "gray", position: "relative", right: "20px" }}
          >
            <p
              id="p3"
              onClick={() => {
                document.getElementById("p1").style.color = "";
                document.getElementById("p2").style.color = "";
                document.getElementById("p3").style.color = "black";
              }}
            >
              지도
            </p>
          </Link>

          <ul className="seUl">
            <li
              style={{
                display: "inline-block",
                position: "relative",
                width: "70px",
              }}
            >
              <a
                onClick={Logout}
                style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
              >
                로그아웃
              </a>
            </li>
            <li
              style={{
                display: "inline-block",
                position: "relative",
                width: "115px",
              }}
            >
              <Link
                to="/Mypage"
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
