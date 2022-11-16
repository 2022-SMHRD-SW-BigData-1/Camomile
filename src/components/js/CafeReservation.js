import "../css/CafeReservation.css";
import { useEffect, useState, useCallback, useRef } from "react";
import classNames from "classnames/bind";
import style from "../css/calendar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

export const CafeReservation = () => {
  const [id, setID] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("id"));
  });

  let ame = useRef();
  let latte = useRef();
  let lemon = useRef();
  let choco = useRef();

  const nav = useNavigate();

  let [day33, setDay33] = useState("");
  useEffect(function () {
    document.getElementById("AdHeader").style.display = "none";
  });

  //카페이름 변수
  //얘는 사실상 의미 없음. 값을 axios로 보내주는애가 아니라 받기만 하는애.
  const cafeName = "";

  //메뉴 개수 변수
  const [americano, setAmericano] = useState(0);
  const [cafeLatte, setCafeLatte] = useState(0);
  const [lemonade, setLemonade] = useState(0);
  const [chocoLatte, setChocoLatte] = useState(0);

  //가격 변수
  const [americanoP, setAmericanoP] = useState(0);
  const [cafeLatteP, setCafeLatteP] = useState(0);
  const [lemonadeP, setLemonadeP] = useState(0);
  const [chocoLatteP, setChocoLatteP] = useState(0);

  //달력 기능
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

    function btnClick(e) {
      setDay33(selectedYear + "-" + selectedMonth + "-" + e.target.innerText);
      // console.log();
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);
  //달력기능 끝

  //예약시간
  const [reserveTime, setReserveTime] = useState("");

  //테이블 수
  const [reserveTable, setReserveTable] = useState("");

  //방문인원
  const [reservePeople, setReservePeople] = useState("");

  //요청사항
  const [reserveReq, setReserveReq] = useState("");

  useEffect(function () {
    document.getElementById("SearchHeader").style.display = "none";
    document.getElementById("AdHeader").style.display = "none";
  });

  const reqres = async (e) => {
    e.preventDefault();

    let ameri = ame.current.innerText + " " + americano + "개";
    let lat = latte.current.innerText + " " + cafeLatte + "개";
    let lem = lemon.current.innerText + " " + lemonade + "개";
    let cho = choco.current.innerText + " " + chocoLatte + "개";

    await axios
      .post("http://127.0.0.1:3000/CafeReservation", {
        id: id,
        date: day33,
        ameri: ameri,
        cho: cho,
        lem: lem,
        lat: lat,
        reserveTime: reserveTime,
        reserveTable: reserveTable,
        reservePeople: reservePeople,
        reserveReq: reserveReq,
      })
      .then((response) => {
        console.log("데이터 보내기 성공");
        alert("예약요청되었습니다. 관리자의 승인을 기다려주세요!");
        nav("/CafeInfo?name=시리즈인트로&i=./image/1시리즈인트로.jpeg");
      })
      .catch((err) => {
        console.log("데이터 보내기 실패");
      });
  };
  return (
    <>
      <form onSubmit={reqres}>
        <div className="reservationContent">
          <h2> {cafeName} 예약 </h2>
          <hr style={{ backgroundColor: "#703015" }}></hr>

          <div className="cafeMenu">
            <p className="reservationTitle">
              <img
                className="reservationImg"
                src={require("../coffee.png").default}
                style={{
                  width: "30px",
                  height: "auto",
                  position: "relative",
                  margin: 0,
                }}
              ></img>
              <span
                className="reservationText"
                style={{
                  top: "10px",
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "#404040",
                  position: "relative",
                }}
              >
                {" "}
                메뉴 주문{" "}
              </span>
            </p>

            <div className="reservationMenu">
              <div className="reservationGrid">
                <img
                  className="reservationMenuImg"
                  src={require("../아메리카노.PNG").default}
                ></img>
                <p className="reservationBeverage">
                  <span className="beverageName" ref={ame}>
                    {" "}
                    아메리카노{" "}
                  </span>
                  <span className="beveragePrice"> 2,000원 </span>
                </p>
                <p className="resevationCount">
                  <span>
                    {" "}
                    <button
                      type="button"
                      className="countButton"
                      onClick={() => {
                        if (americano != 0) {
                          setAmericano(americano - 1);
                          setAmericanoP(americanoP - 2000);
                        }
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>{" "}
                  </span>
                  <span className="countInt"> {americano} </span>
                  <span>
                    {" "}
                    <button
                      type="button"
                      className="countButton"
                      onClick={() => {
                        setAmericano(americano + 1);
                        setAmericanoP(americanoP + 2000);
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>{" "}
                  </span>
                </p>
              </div>

              <div className="reservationGrid">
                <img
                  className="reservationMenuImg"
                  src={require("../카페라떼.PNG").default}
                ></img>
                <p className="reservationBeverage">
                  <span className="beverageName" ref={latte}>
                    {" "}
                    카페라떼{" "}
                  </span>
                  <span className="beveragePrice"> 3,000원 </span>
                </p>
                <p className="resevationCount">
                  <span>
                    {" "}
                    <button
                      type="button"
                      className="countButton"
                      onClick={() => {
                        if (cafeLatte != 0) {
                          setCafeLatte(cafeLatte - 1);
                          setCafeLatteP(cafeLatteP - 3000);
                        }
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>{" "}
                  </span>
                  <span className="countInt"> {cafeLatte} </span>
                  <span>
                    {" "}
                    <button
                      type="button"
                      className="countButton"
                      onClick={() => {
                        setCafeLatte(cafeLatte + 1);
                        setCafeLatteP(cafeLatteP + 3000);
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>{" "}
                  </span>
                </p>
              </div>

              <div className="reservationGrid">
                <img
                  className="reservationMenuImg"
                  src={require("../레몬에이드.jpg").default}
                ></img>
                <p className="reservationBeverage">
                  <span className="beverageName" ref={lemon}>
                    {" "}
                    레몬에이드{" "}
                  </span>
                  <span className="beveragePrice"> 2,000원 </span>
                </p>
                <p className="resevationCount">
                  <span>
                    {" "}
                    <button
                      type="button"
                      className="countButton"
                      onClick={() => {
                        if (lemonade != 0) {
                          setLemonade(lemonade - 1);
                          setLemonadeP(lemonadeP - 2000);
                        }
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>{" "}
                  </span>
                  <span className="countInt"> {lemonade} </span>
                  <span>
                    {" "}
                    <button
                      type="button"
                      className="countButton"
                      onClick={() => {
                        setLemonade(lemonade + 1);
                        setLemonadeP(lemonadeP + 2000);
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>{" "}
                  </span>
                </p>
              </div>

              <div className="reservationGrid">
                <img
                  className="reservationMenuImg"
                  src={require("../초코라떼.png").default}
                ></img>
                <p className="reservationBeverage">
                  <span className="beverageName" ref={choco}>
                    {" "}
                    초코라떼{" "}
                  </span>
                  <span className="beveragePrice"> 2,500원 </span>
                </p>
                <p className="resevationCount">
                  <span>
                    {" "}
                    <button
                      type="button"
                      className="countButton"
                      onClick={() => {
                        if (chocoLatte != 0) {
                          setChocoLatte(chocoLatte - 1);
                          setChocoLatteP(chocoLatteP - 2500);
                        }
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>{" "}
                  </span>
                  <span className="countInt"> {chocoLatte} </span>
                  <span>
                    {" "}
                    <button
                      type="button"
                      className="countButton"
                      onClick={() => {
                        setChocoLatte(chocoLatte + 1);
                        setChocoLatteP(chocoLatteP + 2500);
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>{" "}
                  </span>
                </p>
              </div>
            </div>
            <hr></hr>
            {/* 날짜 예약 */}
            <div className="reservationDiv">
              <p className="reservationTitle">
                <img
                  className="reservationImg"
                  src={require("../calendar.png").default}
                  style={{
                    width: "30px",
                    height: "auto",
                    position: "relative",
                    margin: 0,
                  }}
                ></img>
                <span className="reservationText"> 날짜 {day33} </span>
                <input type="hidden" name="date" value={day33}></input>
              </p>

              <div
                style={{
                  display: "inline-block",
                  position: "relative",
                  textAlign: "center",
                  left: "30px",
                }}
              >
                <div className="reservationCa">
                  <div className="title">
                    <h3
                      style={{
                        position: "relative",
                        display: "inline-block",
                        margin: "0",
                      }}
                    >
                      {yearControl()}년
                    </h3>
                    <div className="pagination">
                      <button type="button" onClick={prevMonth}>
                        ◀︎
                      </button>
                      <h3
                        style={{
                          display: "inline-block",
                          position: "relative",
                        }}
                      >
                        {monthControl()}월
                      </h3>
                      <button type="button" onClick={nextMonth}>
                        ▶︎
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="week">{returnWeek()}</div>
                  <div className="Ca_date">{returnDay()}</div>
                </div>
              </div>
              <hr></hr>
            </div>

            {/* 방문 시간 */}
            <div className="reservationDiv">
              <p className="reservationTitle">
                <img
                  className="reservationImg"
                  src={require("../clock.png").default}
                  style={{
                    width: "30px",
                    height: "auto",
                    position: "relative",
                    margin: 0,
                  }}
                ></img>
                <span className="reservationText"> 예약 시간</span>
              </p>
              <p className="reservationClock">
                <select
                  className="reservationTime"
                  onChange={(e) => {
                    setReserveTime(e.currentTarget.value);
                  }}
                  // value={reserveTime}//
                  name="reserveTime"
                >
                  <option value={""}>예약시간 선택</option>
                  <option value={"09:00"}> 09:00 </option>
                  <option value={"10:00"}> 10:00 </option>
                  <option value={"11:00"}> 11:00 </option>
                  <option value={"12:00"}> 12:00 </option>
                  <option value={"13:00"}> 13:00 </option>
                  <option value={"14:00"}> 14:00 </option>
                  <option value={"15:00"}> 15:00 </option>
                  <option value={"16:00"}> 16:00 </option>
                  <option value={"17:00"}> 17:00 </option>
                  <option value={"18:00"}> 18:00 </option>
                  <option value={"19:00"}> 19:00 </option>
                  <option value={"20:00"}> 20:00 </option>
                </select>
              </p>
              <hr></hr>
            </div>

            {/* 테이블 수 */}
            <div className="reservationDiv">
              <p className="reservationTitle">
                <img
                  className="reservationImg"
                  src={require("../table.png").default}
                  style={{
                    width: "30px",
                    height: "auto",
                    position: "relative",
                    margin: 0,
                  }}
                ></img>
                <span className="reservationText">
                  {" "}
                  테이블 수{" "}
                  <span style={{ fontSize: "15px", fontWeight: "400" }}>
                    (테이블 1개 당 2좌석)
                  </span>
                </span>
              </p>
              <p className="reservationTable">
                <select
                  className="reservationTableCount"
                  onChange={(e) => {
                    setReserveTable(e.currentTarget.value);
                  }}
                  // value={reserveTable}
                  name="reserveTable"
                >
                  <option>테이블 수 선택</option>
                  <option style={{ fontSize: "18px" }} value={"1"}>
                    {" "}
                    1{" "}
                  </option>
                  <option style={{ fontSize: "18px" }} value={"2"}>
                    {" "}
                    2{" "}
                  </option>
                  <option style={{ fontSize: "18px" }} value={"3"}>
                    {" "}
                    3{" "}
                  </option>
                  <option style={{ fontSize: "18px" }} value={"4"}>
                    {" "}
                    4{" "}
                  </option>
                </select>
              </p>
              <hr></hr>
            </div>

            {/* 방문 인원 */}
            <div className="reservationDiv">
              <p className="reservationTitle">
                <img
                  className="reservationImg"
                  src={require("../user.png").default}
                  style={{
                    width: "30px",
                    height: "auto",
                    position: "relative",
                    margin: 0,
                  }}
                ></img>
                <span className="reservationText">
                  {" "}
                  방문 인원 {reservePeople}{" "}
                </span>
              </p>
              <p className="reservationUser">
                <select
                  className="reservationUserCount"
                  onChange={(e) => {
                    setReservePeople(e.currentTarget.value);
                  }}
                  // value={reservePeople}
                  name="reservePeople"
                >
                  <option value="">방문인원</option>
                  <option value={"1명"}> 1명 </option>
                  <option value={"2명"}> 2명 </option>
                  <option value={"3명"}> 3명 </option>
                  <option value={"4명"}> 4명 </option>
                  <option value={"5명"}> 5명 </option>
                  <option value={"6명"}> 6명 </option>
                  <option value={"7명"}> 7명 </option>
                  <option value={"8명"}> 8명 </option>
                </select>
              </p>
              <hr></hr>
            </div>

            {/* 요청 사항 */}
            <div className="reservationDiv">
              <p className="reservationTitle">
                <img
                  className="reservationImg"
                  src={require("../chat.png").default}
                  style={{
                    width: "30px",
                    height: "auto",
                    position: "relative",
                    margin: 0,
                  }}
                ></img>
                <span className="reservationText"> 요청 사항 </span>
              </p>
              <textarea
                className="reservationChat"
                cols={"80"}
                rows={"6"}
                onChange={(e) => {
                  setReserveReq(e.currentTarget.value);
                }}
                value={reserveReq}
                name="reserveReq"
              ></textarea>
              <hr></hr>
            </div>

            <p className="reservationButton">
              <button className="reservationButton2"> 예약하기 </button>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};
