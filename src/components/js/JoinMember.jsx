import "../css/join.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const JoinMember = (props) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputpwConfirm, setInputpwConfirm] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputBirth, setInputBirth] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputNick, setInputNick] = useState("");

  const nav = useNavigate();

  useEffect(function () {
    document.getElementById("SearchHeader").style.display = "none";
    document.getElementById("AdHeader").style.display = "none";
  });

  const handleJoinus = async (e) => {
    e.preventDefault();

    await axios
      .post("http://127.0.0.1:3000/zzf", {
        id: inputId,
        pw: inputPw,
        name: inputName,
        birth: inputBirth,
        phone: inputPhone,
        nick: inputNick,
      })
      .then((response) => {
        console.log("데이터 보내기 성공", response.data);
        alert("회원가입 성공! 로그인해주세요.");
        nav("/");
      })
      .catch((err) => {
        console.log("데이터 보내기 실패");
      });
  };

  return (
    <form onSubmit={handleJoinus}>
      <div className="join">
        <div className="joinInput">
          <Link to="/">
            <img
              className="img"
              src={require("../camomile.png").default}
              style={{ marginBottom: "3%" }}
            ></img>
          </Link>
          <h2 className="inputTitle"> 아이디 </h2>
          <input
            className="inputBox"
            value={inputId}
            id="id"
            placeholder="아이디를 입력하세요"
            onChange={(e) => setInputId(e.target.value)}
          ></input>

          <h2 className="inputTitle"> 비밀번호 </h2>
          <input
            className="inputBox"
            value={inputPw}
            name="pw"
            id="pw"
            placeholder="비밀번호를 입력하세요"
            type={"password"}
            onChange={(e) => setInputPw(e.target.value)}
          ></input>
          <h2 className="inputTitle"> 비밀번호 확인 </h2>
          <input
            className="inputBox"
            value={inputpwConfirm}
            name="pwConfirm"
            id="pwConfirm"
            placeholder="비밀번호를 확인하세요"
            type={"password"}
            onChange={(e) => setInputpwConfirm(e.target.value)}
          ></input>

          <h2 className="inputTitle"> 이름 </h2>
          <input
            className="inputBox"
            value={inputName}
            name="name"
            id="name"
            placeholder="이름을 입력해주세요"
            onChange={(e) => setInputName(e.target.value)}
          ></input>

          <h2 className="inputTitle"> 생년월일 </h2>
          <input
            className="inputBox"
            value={inputBirth}
            name="birth"
            id="birth"
            type="text"
            maxLength={8}
            placeholder="YYYYMMDD"
            onChange={(e) => setInputBirth(e.target.value)}
          ></input>

          <h2 className="inputTitle"> 휴대전화 </h2>
          <input
            className="inputBox"
            value={inputPhone}
            name="phone"
            id="phone"
            placeholder="전화번호를 입력해주세요"
            onChange={(e) => setInputPhone(e.target.value)}
          ></input>

          <h2 className="inputTitle"> 닉네임 </h2>
          <input
            className="inputBox"
            value={inputNick}
            name="nick"
            id="nick"
            placeholder="닉네임을 입력하세요"
            onChange={(e) => setInputNick(e.target.value)}
          ></input>
          <br></br>
          <button className="inputbutton" type="submit">
            {" "}
            회원가입{" "}
          </button>
        </div>
      </div>
    </form>
  );
};
