import "../css/NoticeB.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// import Button from "./common/button";

export const NoticeB = (props) => {
  useEffect(function () {
    document.getElementById("SearchHeader").style.display = "none";
  });

  return (
    <>
      <div className="container">
        <div className="NoticeListDiv">
          <h1 className="NoticeBusinessTitle">카페정오 NOTICE</h1>
          <Link to="/NoticeBw">
            <span>
              <button className="write_button">작성하기</button>
            </span>
          </Link>

          <hr className="NoticeBusineesHr" style={{ marginTop: "10px" }}></hr>

          <div className="NoticeBusinessDiv">
            <h1 className="NoticeTitleB">일요일은 개인 사정상 휴업입니다.</h1>
            <p className="NoticeBusineesDate">2022. 10. 17</p>

            <hr className="NoticeBHr" style={{ marginTop: "5px" }}></hr>

            <p class="title-content">
              일요일은 휴무가 아니나 개인 사정이 있어 하루(23일 일요일) 쉬어가게
              되었습니다. 카페를 이용하실 때 참고해주시기 바랍니다!
            </p>
            <div className="NoticeBbutton">
              <span>
                <button className="delbutton">삭제</button>
              </span>
              <span>
                <button className="upbutton">수정</button>
              </span>
            </div>
          </div>

          {/* 공지와 공지 사이의 구분선 */}
          <hr className="NoticeBHr2" style={{ marginTop: "10px" }}></hr>

          <div className="NoticeBusinessDiv">
            <h1 className="NoticeTitleB">일요일은 개인 사정상 휴업입니다.</h1>
            <p className="NoticeBusineesDate">2022. 10. 17</p>

            <hr className="NoticeBHr" style={{ marginTop: "5px" }}></hr>

            <p class="title-content">
              일요일은 휴무가 아니나 개인 사정이 있어 하루(23일 일요일) 쉬어가게
              되었습니다. 카페를 이용하실 때 참고해주시기 바랍니다!
            </p>
            <div className="NoticeBbutton">
              <span>
                <button className="delbutton">삭제</button>
              </span>
              <span>
                <button className="upbutton">수정</button>
              </span>
            </div>
          </div>

          <hr className="NoticeBHr2" style={{ marginTop: "10px" }}></hr>
        </div>
      </div>
    </>
  );
};

export default NoticeB;
