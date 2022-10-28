import { Link } from "react-router-dom";
import './AdHeader.css';

export const AdHeader = () => {
  
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
        <img
          src={require("./camomileBusiness.png").default}
          style={{
            display: "inline-block",
            position: "relative",
            width: "150px",
            top: 7,
            left: 30,
            marginRight: "100",
          }}
        />
        <div className="adFlexBar">
          <p onClick={()=>{}}>예약확인</p>
          <p>예약내역</p>
          <p>공지사항</p>

          <ul
            style={{
              display: "inline-block",
              position: "relative",
              textAlign: "right",
              width: "165px",
              top:'12px',
            }}
          >
            <li
              style={{
                display: "inline-block",
                position: "relative",
                width: "65px",
              }}
            >
              <a href="" style={{ color: "black", fontWeight: "bold" }}>
                로그인
              </a>
            </li>
            <li
              style={{
                display: "inline-block",
                position: "relative",
                width: "100px",
              }}
            >
              <a href="" style={{ color: "black", fontWeight: "bold" }}>
                회원가입
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
