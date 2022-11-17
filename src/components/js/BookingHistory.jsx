import { React, useEffect, useState, useCallback } from "react";
import "../css/BookingHistory.css";
import classNames from "classnames/bind";
import style from "../css/calendar.css";
import axios from "axios";

const cx = classNames.bind(style);

export const BookingHistory = () => {
  let reservList=[];
  const [arr, setArr] = useState([]);

  useEffect(
    function () {
      document.getElementById("SearchHeader").style.display = "none";
    }
  );

  function btnClick(e) {
    toss = selectedYear + "-" + selectedMonth + "-" + e.target.innerText;
    let firstArr = toss.split("-");
    let ttestt = "";
    alert(selectedYear + "-" + selectedMonth + "-" + e.target.innerText);
    if (firstArr[2].length == 1) {
      ttestt = "0" + firstArr[2];
    } else {
      ttestt = firstArr[2];
    }
    firstArr[2] = ttestt;
    console.log(firstArr.join("-"));
    let send = firstArr.join("-");

    axios
      .post("http://127.0.0.1:3000/BookingHistory")
      .then((response) => {
        console.log("예약 받기 성공");
        console.log('선택한 날짜 : ' + send);
        console.log(response.data.resvCheck);
        reservList = response.data.resvCheck;
        console.log(reservList);
        console.log("1단계 돌입");
        
        
          for (let i = 0; i < reservList.length; i++) {
            console.log("2단계 돌입");
            // {}객체타입을 -->> [] 배열타입으로 변경
            reservList[i] = reservList[i] = Object.values(reservList[i]);
          }
          console.log(reservList);

          setArr(
            reservList.map(function (data) {
              if (data[4] == send){
              let reserveNum = data[0];
              let reserveDate = data[9];
              let reqMenuA = data[3].split(", ");
              console.log("A항목");
              // console.log(reqMenuA);
              console.log(reqMenuA[0]);
              let reqMenuB = reqMenuA.filter(function (data) {
                return data.replace(/[^0-9]/g, "") != 0;
              });
              console.log("B항목");
              console.log(reqMenuB.join(", "));
              let reqMenuTotal = reqMenuB.join(", ");
              let visitDate = data[4];
              let visitTime = data[5];
              let tableNum = data[6];
              let people = data[7];
              let req_Req = data[8];
              return (
                <div
                  className="BookingHistoryDiv"
                  style={{
                    display: "block",
                    position: "relative",
                    bottom: "30px",
                  }}
                >
                  <p className="BookingNumber">주문번호 {reserveNum}</p>
                  <p
                    className="BookingDate"
                    style={{ right: "90px", fontSize: "20px" }}
                  >
                    예약날짜 : {reserveDate}
                  </p>
                  <p className="BookingTime"></p>
                  <hr
                    className="BookingHistoryHr1"
                    style={{
                      position: "relative",
                      margin: "20px 150px 30px 80px",
                    }}
                  ></hr>
                  <p className="BookTotal" style={{ display: "block" }}>
                    주문 내역
                  </p>
                  <p className="BookMenu" style={{ width: "50%" }}>
                    {reqMenuTotal}
                  </p>
                  <p className="BookTotal">
                    방문날짜{" "}
                    <span>
                      {visitDate} {visitTime}
                    </span>{" "}
                  </p>

                  <p className="BookTotal">
                    예약인원{" "}
                    <span>
                      {tableNum}개 / {people}
                    </span>
                  </p>
                  <p className="BookTotal">
                    요청사항 <span>{req_Req}</span>
                  </p>
                  <hr className="BookingHistoryHr2"></hr>
                </div>
              );
              }
            })
          );
      })
      .catch((err) => {
        console.log("데이터 보내기 실패");
      });
  }

  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };
  const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
  const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 연도, 달의 마지막 날짜

  let toss="";
  const prevMonth = useCallback(() => {
    //이전 달 보기 버튼
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth]);

  const nextMonth = useCallback(() => {
    //다음 달 보기 버튼
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  const monthControl = useCallback(() => {
    //달 선택박스에서 고르기
    let monthArr = [];
    for (let i = 0; i < 12; i++) {
      monthArr.push(
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      );
    }

    return (
      <select
        // className="monthSelect"
        onChange={changeSelectMonth}
        value={selectedMonth}
      >
        {monthArr}
      </select>
    );
  }, [selectedMonth]);

  const yearControl = useCallback(() => {
    //연도 선택박스에서 고르기
    let yearArr = [];
    const startYear = today.year - 10; //현재 년도부터 10년전 까지만
    const endYear = today.year + 10; //현재 년도부터 10년후 까지만
    for (let i = startYear; i < endYear + 1; i++) {
      yearArr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return (
      <select
        // className="yearSelect"
        onChange={changeSelectYear}
        value={selectedYear}
      >
        {yearArr}
      </select>
    );
  }, [selectedYear]);

  const changeSelectMonth = (e) => {
    setSelectedMonth(Number(e.target.value));
  };
  const changeSelectYear = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const returnWeek = useCallback(() => {
    //요일 반환
    let weekArr = [];
    week.forEach((v) => {
      weekArr.push(
        <div
          key={v}
          className={cx(
            { weekday: true },
            { sunday: v === "일" },
            { saturday: v === "토" }
          )}
        >
          {v}
        </div>
      );
    });
    return weekArr;
  }, []);

  
  const returnDay = useCallback(() => {
    //날짜 반환
    let dayArr = [];

    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(
            <div
              onClick={btnClick}
              key={i + 1}
              className={cx(
                {
                  //오늘 날짜일 때 표시할 스타일 클라스네임
                  // today:
                  //   today.year === selectedYear &&
                  //   today.month === selectedMonth &&
                  //   today.date === i + 1,
                },
                { weekday: true }, //전체 날짜 스타일
                {
                  //전체 일요일 스타일
                  sunday:
                    new Date(
                      selectedYear,
                      selectedMonth - 1,
                      i + 1
                    ).getDay() === 0,
                },
                {
                  //전체 토요일 스타일
                  saturday:
                    new Date(
                      selectedYear,
                      selectedMonth - 1,
                      i + 1
                    ).getDay() === 6,
                }
              )}
            >
              {i + 1}
            </div>
          );
        }
      } else {
        dayArr.push(<div className="weekday"></div>);
      }
    }
    
    

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);
  



  return (
    <>
      <div className="container">
        <div className="BookingHistoryDiv">
          <h1 className="BookingHistoryH1">예약 내역</h1>
          <hr className="BookingHistoryHr"></hr>
        </div>
        <div
          style={{
            position: "relative",
            display: "block",
            textAlign: "center",
          }}
        >
          <div className="Ca_container">
            <div className="title">
              <h3 style={{ position: "relative", marginLeft: "30px" }}>
                {yearControl()}년
              </h3>
              <div className="pagination">
                <button onClick={prevMonth}>◀︎</button>
                <h3 style={{ display: "inline-block", position: "relative" }}>
                  {monthControl()}월
                </h3>
                <button onClick={nextMonth}>▶︎</button>
              </div>
            </div>
            <hr></hr>
            <div className="week">{returnWeek()}</div>
            <div className="Ca_date">{returnDay()}</div>
          </div>
        </div>


        {arr}
      </div>
    </>
  );
};
