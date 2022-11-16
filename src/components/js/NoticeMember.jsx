import "../css/NoticeMember.css";
import React from "react";
import { useEffect } from "react";

export const NoticeMember = (props) => {

  useEffect(function(){
    document.getElementById('AdHeader').style.display='none';
  })

  return (
    <>
      <div className="container">
        <div className="NoticeHistoryDiv">
          <h1 className="NoticeHistoryTitle">카페정오 NOTICE</h1>
          
          <hr className="NoticeHistoryHr" style={{ marginTop: "10px" }}></hr>
          {/* 카페 공지 리스트 */}
          <div className="NoticeDiv">
            <h1 className="NoticeTitleM">일요일은 개인 사정상 휴업입니다.</h1>
            <p className="NoticeDate">2022. 10. 17</p>
            <hr className="NoticeHr" style={{ marginTop: "5px" }}></hr>
            <p className="NoticeConetents">
              일요일은 휴무가 아니나 개인 사정이 있어 하루(23일 일요일) 쉬어가게
              되었습니다. 카페를 이용하실 때 참고해주시기 바랍니다!
            </p>
          </div>

          <hr className="NoticeHr2"></hr>

          <div className="NoticeDiv">
            <h1 className="NoticeTitleM">일요일은 개인 사정상 휴업입니다.</h1>
            <p className="NoticeDate">2022. 10. 17</p>
            <hr className="NoticeHr" style={{ marginTop: "5px" }}></hr>
            <p className="NoticeConetents">
              일요일은 휴무가 아니나 개인 사정이 있어 하루(23일 일요일) 쉬어가게
              되었습니다. 카페를 이용하실 때 참고해주시기 바랍니다!
            </p>
          </div>

          <hr className="NoticeHr2"></hr>
        </div>

      </div>
    </>
  );
};

export default NoticeMember;
