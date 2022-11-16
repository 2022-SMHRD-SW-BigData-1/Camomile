import { useState, useEffect } from "react";
import axios from "axios";

export const Navigation = (props) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nick, setNick] = useState("");

  useEffect(() => {
    if (localStorage.getItem("id") != null) {
      setId(localStorage.getItem("id"));
      setPw(localStorage.getItem("pw"));
      setNick(localStorage.getItem("nick"));
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
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("실패 그만 떠 제발..");
      });
  };
  return (
    <nav id="menu" className="navbar navbar-default" style={{ height: "80" }}>
      <div className="container">
        <a
          className="navbar-brand page-scroll"
          href="/"
        >
          <img
            src={require("../camomile.png").default}
            style={{
              position: "relative",
              width: "150px",
              bottom: 10,
              left: 20,
            }}
          />
        </a>{" "}
        <ul className="nav navbar-nav navbar-right">
          <li>
            {id == "" ? (
              <p></p>
            ) : (
              <h5 style={{ position: "relative", top: "6px" }}>
                {nick}님!{" "}
                <span style={{ position: "relative", marginLeft: "5px" }}>
                  환영합니다!
                </span>
              </h5>
            )}
          </li>
          <li>
            {id == "" ? (
              <a href="/LoginPage">로그인</a>
            ) : (
              <a onClick={Logout}>로그아웃</a>
            )}
          </li>
          <li>
            {id == "" ? (
              <a href="/JoinMember">회원가입</a>
            ) : (
              <a href="/Mypage">마이페이지</a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
