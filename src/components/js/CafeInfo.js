import "../css/CafeInfo.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router";

export const CafeInfo = () => {
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();
  const [inputList, setList] = useState([]); //출력되어야하는 리스트
  const aaa = useRef();
  const [result, setRe] = useState("");

  const [arr, setArr] = useState();
  const nick = localStorage.getItem("nick");
  const name = params.get("name");
  const item = params.get("i");
  const [honjap1, setHonjap1] = useState([]);

  console.log(name);
  console.log(item);
  //router.js로 입력한 review내용 전송.
   const review = async (e) => {
     console.log("review!");
     // console.log(nick)
     console.log(aaa.current.value);

     await axios
       .post("http://127.0.0.1:3000/review", {
         nick: nick, //회원 닉네임
         review: aaa.current.value, // 리뷰내용
       })
       .then((response) => {
        // e.preventDefault();
         console.log("Test" + response);
         //console.log("데이터 보내기 성공", response.data);
         localStorage.setItem("sysdate", response.data.re_date);
         alert("리뷰등록성공!");
         window.location.reload();
         // window.location.replace("/CafeInfo");
         //nav("/CafeInfo")
         // localStorage.clear();
         // console.log(id);
       })
       .catch((err) => {
         console.log("데이터 보내기 실패");
       });
   };

  //헤더 표시 및 DB에 있는 리뷰값 받아서 배열에 저장.
  useEffect(
    function () {
      document.getElementById("AdHeader").style.display = "none";

      axios
        .post("http://127.0.0.1:3000/reviewLookUp")
        .then((response) => {
          console.log("데이터 조회 성공");
          setList(response.data.lists);
          setRe(response.data.result);
          console.log(response.data.lists);

          for (let i = 0; i < inputList.length; i++) {
            setList((inputList[i] = Object.values(inputList[i])));
       

            console.log("zz");
          }
          console.log("확인");
          console.log(inputList[0][2]);

          setArr(
            inputList.map(function (data) {
              return (
                <div className="cafeReviewList">
                  <h4 className="cafeReviewListUser">
                    <span
                      style={{
                        display: "inline-block",
                        position: "relative",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {data[0]}님
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        position: "relative",
                        left: "30px",
                        fontSize: "19px",
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      {data[2].slice(0, 10)}
                    </span>
                  </h4>
                  <p className="cafeReviewListContent">{data[1]}</p>
                  <hr
                    style={{
                      display: "inline",
                      position: "relative",
                      top: "10px",
                      bottom: "10px",
                      marginBottom: "-30px",
                    }}
                  ></hr>
                </div>
              );
            })
          );

        })
        .catch((err) => {
          console.log("데이터 조회 실패");
        });
    },
    [result]
  );

  // 입력한 리뷰 텍스트
  function getText(e) {
    console.log(e.target.value);
  }
  // 혼잡도 계산하는 CafeInfo 라우터

  axios
    .post("http://127.0.0.1:3000/CafeInfo", {
      //params에서 받아온 name을 라우터로 보냄.
      cafeName: name,
    })
    .then((response) => {
      console.log("혼잡도값 보내기 성공", response.data.honjap);
      setHonjap1(response.data.honjap);
      console.log("이 카페의 혼잡도는? hopjap1 " + honjap1);
    })
    .catch((err) => {
      console.log("혼잡도 보내기 실패");
    });
 
  let tool1 = String(honjap1);

  //최종적으로 혼잡도를 분류해주는 곳.
  let tool2 = "혼잡도여유.png";
  if (tool1 == "혼잡도여유.png") {
    tool2 = "혼잡도여유.png";
  } else if (tool1 == "혼잡도보통.png") {
    tool2 = "혼잡도보통.png";
  } else if (tool1 == "혼잡도혼잡.png") {
    tool2 = "혼잡도혼잡.png";
  }
  console.log("tool2 ::: " + tool2);

  return (
    <>
      <Link to="/CafeReservation">
        <button className="reservation"> 예약 하기 </button>
      </Link>

      {/* 카페 정보 */}
      <div className="cafeInformation">
        <section className="imgsection">
          <img
            src={require(`${item}`).default}
            style={{ width: "300px" }}
          ></img>
        </section>
        <div className="cafeDetailBox">
          <div className="cafeTitle">
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0px",
                width: "500px",
              }}
            >
              <span>
                <h1> {name} </h1>
              </span>
              <img
                src={require(`../${tool2}`).default}
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "20px",
                  display: "inline",
                  justifyContent: "right",
                }}
              ></img>
            </p>
          </div>
          <div className="cafeText">
            <p
              style={{
                display: "flex",
                justifyContent: "left",
                width: "1170px",
                margin: "0px",
              }}
            >
              <img
                src={require("../placeholder.png").default}
                style={{
                  width: "18px",
                  height: "18px",
                  position: "relative",
                  justifyContent: "center",
                  marginTop: "10px",
                  marginRight: "5px",
                }}
              ></img>
              <h4> 광주광역시 동구 </h4>
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "left",
                width: "1170px",
                margin: "0px",
              }}
            >
              <img
                src={require("../phone-call.png").default}
                style={{
                  width: "18px",
                  height: "18px",
                  position: "relative",
                  justifyContent: "center",
                  marginTop: "10px",
                  marginRight: "5px",
                }}
              ></img>
              <h4> 070 - 1234 - 5678 </h4>
            </p>
            <h4> 광주 동구 동명동에 위치한 카페 </h4>
            <h4> 조용하고 아늑한 분위기가 특징입니다 </h4>
          </div>
        </div>
      </div>
      <hr style={{ border: "0px", width: "1170px" }}></hr>

      {/* 카페 영업시간 */}
      <div className="cafeHours">
        <h1 className="cafeText"> 영업 시간 </h1>
        <div className="cafeHourDetail">
          <h3> 월요일 : 09 : 00 ~ 20 : 00</h3>
          <h3> 수요일 : 09 : 00 ~ 20 : 00</h3>
          <h3> 금요일 : 09 : 00 ~ 20 : 00</h3>
          <h3> 일요일 : 휴무 </h3>
          <h3> </h3>
          <div style={{ paddingTop: "3px" }}>
            <h3> 화요일 : 09 : 00 ~ 20 : 00</h3>
            <h3> 목요일 : 09 : 00 ~ 20 : 00</h3>
            <h3> 토요일 : 09 : 00 ~ 20 : 00</h3>
            <h3> </h3>
          </div>
        </div>
      </div>
      <hr style={{ border: "solid 0px", width: "1170px" }}></hr>

      {/* 카페 공지사항 */}
      <div className="cafeNotice">
        <div
          className="cafeText"
          style={{ position: "relative", bottom: "40px" }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1170px",
              bottom: "100px",
              height: "60px",
            }}
          >
            <span>
              <h1> NOTICE </h1>
            </span>
            <span>
              <button className="viewMore"> 더보기 </button>
            </span>
          </p>
          <h4 className="noticeText"> 일요일은 개인 사정 상 휴무입니다 </h4>
        </div>

        <hr
          style={{ border: "hiden", width: "1170px", marginTop: "60px" }}
        ></hr>
      </div>

      {/* 카페 리뷰 */}
      <div className="cafeReview">
        <div
          className="cafeText"
          style={{ position: "relative", bottom: "40px" }}
        >
          <span>
            <h1> REVIEW </h1>
          </span>
          <form>
            <textarea
              className="reviewInput"
              placeholder="원하시는 리뷰를 작성하여 주세요!(200자)"
              maxlength="200"
              name="review"
              ref={aaa}
              required
              onChange={getText}
            ></textarea>
            <button id="reviewbtn" name="reviewtext" type="button" onClick={review}>
              <img
                src={require("../reviewEnter.png").default}
                style={{
                  width: "72px",
                  height: "72px",
                }}
              />
            </button>
          </form>
        </div>
        <hr
          style={{
            display: "block",
            margin: "0",
            border: "hiden",
            width: "1170px",
            bottom: "20px",
            backgroundColor: "#F7BE81",
          }}
        ></hr>
        <div>{arr}</div>
      </div>
    </>
  );
};
