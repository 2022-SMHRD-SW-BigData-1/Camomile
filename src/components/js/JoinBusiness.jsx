import "../css/join.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const JoinBusiness = (props) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputpwConfirm, setInputpwConfirm] = useState("");
  // const [inputcafeName, setInputcafeName] = useState("");
  // const [inputcafeTel, setInputcafeTel] = useState("");
  // const [inputcafeAdd, setInputcafeAdd] = useState("");
  const [inputBusinessNum, setInputBusinessNum] = useState("");

  const nav = useNavigate();

  useEffect(function () {
    document.getElementById("SearchHeader").style.display = "none";
    document.getElementById("AdHeader").style.display = "none";
  });

  const AdJoinus = async (e) => {
    e.preventDefault();

    await axios
      .post("http://127.0.0.1:3000/adjoinus", {
        id: inputId,
        pw: inputPw,
        // cafeName: inputcafeName,
        // cafeTel: inputcafeTel,
        // cafeAdd: inputcafeAdd,
        BusinessNum: inputBusinessNum,
      })
      .then((response) => {
        console.log("데이터 보내기 성공", response.data);
        alert("사업자 회원가입 성공! 로그인해주세요.");
        window.location.replace("/LoginPageBusiness");
      })
      .catch((err) => {
        console.log("데이터 보내기 실패");
      });
  };

  return (
    <form onSubmit={AdJoinus}>
      <div className="join">
        <div className="joinInput">
          <img
            className="img"
            src={require("../camomileBusiness.png").default}
          ></img>
          <h2 className="inputTitle"> 아이디 </h2>
          <input
            className="inputBox"
            name="id"
            id="id"
            placeholder="아이디를 입력하세요"
            onChange={(e) => setInputId(e.target.value)}
            value={inputId}
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
            name="pwConfirm"
            value={inputpwConfirm}
            id="pwConfirm"
            placeholder="비밀번호를 확인하세요"
            type={"password"}
            onChange={(e) => setInputpwConfirm(e.target.value)}
          ></input>

          {/* <h2 className="inputTitle"> 카페명 </h2>
          <input
            className="inputBox"
            value={inputcafeName}
            name="cafeName"
            id="cafeName"
            placeholder="카페명을 입력하세요"
            onChange={(e) => setInputcafeName(e.target.value)}
          ></input>

          <h2 className="inputTitle"> 카페 연락처 </h2>
          <input
            className="inputBox"
            value={inputcafeTel}
            name="cafeTel"
            id="cafeTel"
            placeholder="카페 전화번호를 입력하세요"
            onChange={(e) => setInputcafeTel(e.target.value)}
          ></input>

          <h2 className="inputTitle"> 카페 주소 </h2>
          <input
            className="inputBox"
            value={inputcafeAdd}
            name="cafeAdd"
            id="cafeAdd"
            placeholder="카페 주소를 입력하세요"
            onChange={(e) => setInputcafeAdd(e.target.value)}
          ></input> */}

          <h2 className="inputTitle"> 사업자 번호 </h2>
          <input
            className="inputBox"
            value={inputBusinessNum}
            name="businessNum"
            id="businessNum"
            placeholder="사업자번호를 입력하세요"
            onChange={(e) => setInputBusinessNum(e.target.value)}
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
