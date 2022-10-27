import "./LoginPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const LoginPage = (props) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
  };

  useEffect(() => {
    axios
      .get("/user_inform/login")
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <div className="Login_Container">
      <div className="Login_Title">
        <img
          src={require("./camomile.png").default}
          style={{
            position: "relative",
            width: "500px",
            top: 1,
            left: 20,
          }}
        ></img>
      </div>
      <div className="Login_Row">
        <label htmlFor="input_id"></label>
        <input
          type="text"
          className="Login_input_id"
          value={inputId}
          placeholder="아이디"
          onChange={handleInputId}
        />
      </div>
      <div className="Login_Row">
        <label htmlFor="input_pw"></label>
        <input
          type="password"
          className="Login_input_pw"
          value={inputPw}
          placeholder="패스워드"
          onChange={handleInputPw}
        />
      </div>
      <div className="Login_chbx">
        <input type="checkbox"></input>
        <h5 className="Login_chbxme"> 로그인 상태 유지</h5>
      </div>
      <div>
        <button type="button" className="Login_button" onClick={onClickLogin}>
          로그인
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h5>아직 계정이 없으신가요?</h5>

        <button type="button" className="Login_joinbutton">
          회원가입
        </button>
      </div>
      {/* <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>기철홀릭</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <div><img className={d.icon}/></div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div> */}
    </div>
  );
};
