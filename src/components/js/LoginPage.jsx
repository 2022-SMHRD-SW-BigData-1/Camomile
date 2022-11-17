import "../css/LoginPage.css";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, redirect, useNavigate } from "react-router-dom";
export const LoginPage = (props) => {
  useEffect(function () {
    document.getElementById("SearchHeader").style.display = "none";
    document.getElementById("AdHeader").style.display = "none";
  });
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const onClickLogin = () => {
    console.log("click login");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("handleLogin!");
    axios
      .post("http://127.0.0.1:3000/LoginPage2", {
        id: inputId,
        pw: inputPw,
      })
      .then((response) => {
        console.log("데이터 보내기 성공", response.data);
        // localStorage.clear();
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("pw", response.data.pw);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("nick", response.data.nick);
        localStorage.setItem("birth", response.data.birth);
        localStorage.setItem("phone", response.data.phone);
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("데이터 보내기 실패");
      });
  };
  return (
    <>
      <div className="Login_backGroundSet">
        <div className="Login_Container">
          <form onSubmit={handleLogin}>
            <div className="Login_Title">
              <Link to="/">
                <img
                  src={require("../camomile.png").default}
                  style={{ width: "230px", marginBottom: "40px" }}
                ></img>
              </Link>
            </div>
            <div className="Login_Row">
              <label htmlFor="input_id"></label>
              <img
                src={
                  require("../person_FILL0_wght400_GRAD0_opsz24.png").default
                }
              ></img>
              <input
                type="text"
                className="Login_input_id"
                value={inputId}
                placeholder="아이디"
                onChange={(e) => setInputId(e.target.value)}
                name="id"
              />
            </div>
            <div className="Login_Row">
              <label htmlFor="input_pw"></label>
              <img
                src={require("../lock_FILL0_wght400_GRAD0_opsz24.png").default}
                className="Login_input_pw"
              ></img>
              <input
                type="password"
                className="Login_input_pw"
                value={inputPw}
                placeholder="패스워드"
                onChange={(e) => setInputPw(e.target.value)}
                name="pw"
              />
            </div>
            <div className="Login_chbx">
              <input type="checkbox"></input>
              로그인 상태 유지
            </div>
            <div className="Login_button">
              <button value="LogIn" onClick={onClickLogin}>
                로그인
              </button>
            </div>
          </form>
          <hr className="border"></hr>
          <Link to={"/JoinMember"} style={{ color: "gray" }}>
            <h5 className="Login_signup">아직 계정이 없으신가요?</h5>
            <button type="button" className="Login_joinbutton">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
