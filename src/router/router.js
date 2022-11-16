const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const path = require("path");
// const { CafeInfo } = require("../components/js/CafeInfo");
// const { redirect } = require("react-router");

let conn = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_2",
  password: "smhrd2",
  port: "3307",
  database: "campus_h_1024_2",
});

let custsid; // 소비자 session값 저장 부분
let adminid; // 관리자 session값 저장 부분
let adminnick; // 관리자닉네임 session값 저장 부분

router.get("*", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(path.join(__dirname, "..", "..", "build", "index.html"));
});

//CUST 로그인라우터 (유현 - Fin)
router.post("/LoginPage2", function (request, response) {
  console.log("로그인 라우터");
  let id = request.body.id;
  let pw = request.body.pw;
  console.log("사용자가 보낸 id : " + request.body.id);
  console.log("사용자가 보낸 PW : " + request.body.pw);
  console.log(request.body);
  let sql = "select * from CUSTOMER where C_ID = ? and C_PW = ?";
  conn.query(sql, [id, pw], function (err, rows) {
    if (rows.length > 0) {
      console.log("로그인성공 : " + rows.length);
      response.json({
        id: id,
        pw: pw,
        name: rows[0].C_NAME,
        nick: rows[0].C_NICK,
        birth: rows[0].C_BIRTHDATE,
        phone: rows[0].C_PHONE,
      });
      // custsid = request.session.user.userId;
      console.log("세션에 저장된 정보", custsid);
    } else {
      console.log("로그인실패 : " + rows.length);
      throw err;
    }
  });
});

//CUST,ADMIN 로그아웃 라우터 (유현 - Fin)
router.get("/Logout", function (request, response) {
  console.log("로그아웃 라우터");

  window.localStorage.clear();
  console.log("스토리지 삭제 완료");

  delete request.session.user;
  console.log("로그아웃완료");

  // response.redirect("http://127.0.0.1:3000/");
});

//CUST 회원가입 라우터 (유현 - Fin)
router.post("/zzf", function (request, response) {
  console.log("가입 라우터");

  let id = request.body.id;
  let pw = request.body.pw;
  let name = request.body.name;
  let birth = request.body.birth;
  let phone = request.body.phone;
  let nick = request.body.nick;

  console.log("사용자가 보낸 id : " + id);
  console.log("사용자가 보낸 PW : " + pw);
  console.log("사용자가 보낸 name : " + name);
  console.log("사용자가 보낸 birth : " + birth);
  console.log("사용자가 보낸 phone : " + phone);
  console.log("사용자가 보낸 nick : " + nick);

  let sql = "insert into CUSTOMER values(?, ?, ?, ?, ?, ?, sysdate())";
  conn.query(sql, [id, pw, name, birth, phone, nick], function (err, rows) {
    if (!err) {
      console.log("입력성공");

      response.json({
        id: id,
        pw: pw,
        name: name,
        birth: birth,
        phone: phone,
        nick: nick,
      });
    } else {
      console.log("입력실패" + err);
    }
  });
});

//ADMIN 로그인 라우터 (유현 - Fin)
router.post("/LoginBus", function (request, response) {
  console.log("사업자로그인 라우터");
  let id = request.body.id;
  let pw = request.body.pw;

  console.log("사용자가 보낸 id : " + request.body.id);
  console.log("사용자가 보낸 PW : " + request.body.pw);

  let sql = "select * from ADMINISTRATOR where ADMIN_ID = ? and ADMIN_PW = ?";

  conn.query(sql, [id, pw], function (err, rows) {
    if (rows.length > 0) {
      console.log("로그인성공 : " + rows.length);

      response.json({
        id: id,
        pw: pw,
        cafeName: rows[0].CAFE_NAME,
      });

      request.session.user = {
        adminId: rows[0].ADMIN_ID,
      };

      adminid = request.session.user.adminId;

      console.log("세션에 저장된 정보", adminid);
    } else {
      console.log("로그인실패 : " + rows.length);
      throw err;
    }
  });
});

//ADMIN 회원가입 라우터 (유현 - Fin)
router.post("/Adjoinus", function (request, response) {
  console.log("관리자 가입 라우터");

  let id = request.body.id;
  let pw = request.body.pw;
  // let cafeName = request.body.cafeName;
  // let cafeTel = request.body.cafeTel;
  // let cafeAdd = request.body.cafeAdd;
  let BusinessNum = request.body.BusinessNum;

  console.log("사용자가 보낸 id : " + id);
  console.log("사용자가 보낸 PW : " + pw);
  // console.log("사용자가 보낸 cafeName : " + cafeName);
  // console.log("사용자가 보낸 cafeTel : " + cafeTel);
  // console.log("사용자가 보낸 cafeAdd : " + cafeAdd);
  console.log("사용자가 보낸 businessNum : " + BusinessNum);

  let sql = "insert into ADMINISTRATOR values(?, ?, '' ,?)";

  conn.query(sql, [id, pw, BusinessNum], function (err, rows) {
    if (!err) {
      console.log("입력성공");

      response.json({
        id: id,
        pw: pw,
        // cafeName: cafeName,
        // cafeTel: cafeTel,
        // cafeAdd: cafeAdd,
        BusinessNum: BusinessNum,
      });
    } else {
      console.log("입력실패" + err);
    }
  });
});

//ADMIN InfoInsert 라우터 (유현 - Fin)
router.post("/infoinsert", function (request, response) {
  console.log("카페정보입력 라우터");
  console.log(request.body);

  let cafeName = request.body.cafeName;
  let cafeTel = request.body.cafeTel;
  let cafeLoc = request.body.cafeLoc;
  let cafeKeyWord = request.body.cafeKeyWord;
  let cafeOpentime = request.body.cafeOpentime;
  let cafeClosetime = request.body.cafeClosetime;
  let cafeTableNum = request.body.cafeTableNum;
  let holiday = request.body.holiday;
  let cafeIntro = request.body.cafeIntro;
  let cafeTime = `${cafeOpentime}~${cafeClosetime}`;
  let adminid2 = adminid; //adminid세션값 넣기 위함

  console.log("사용자가 보낸 cafeName : " + cafeName);
  console.log("사용자가 보낸 cafeTel : " + cafeTel);
  console.log("사용자가 보낸 cafeLoc : " + cafeLoc);
  console.log("사용자가 보낸 cafeKeyWord : " + cafeKeyWord);
  console.log("사용자가 보낸 cafeTableNum : " + cafeTableNum);
  console.log("사용자가 보낸 holiday : " + holiday);
  console.log("사용자가 보낸 cafeTime : " + cafeTime);
  console.log("사용자가 갖는 세션 아이디 값 :" + adminid2);
  console.log(holiday);

  let sql1 = `insert into CAFE (CAFE_NAME,CAFE_TEL,CAFE_LOC,C_KEYWORD, C_TABLE, C_TIME,C_HOLIDAY,C_INTRO,ADMIN_ID) 
              values(?, ?, ? ,?, ?, ?, ?, ?, '${adminid2}')`;
  conn.query(
    sql1,
    [
      cafeName,
      cafeTel,
      cafeLoc,
      cafeKeyWord,
      cafeTableNum,
      cafeTime,
      holiday,
      cafeIntro,
    ],
    function (err, rows) {
      if (!err) {
        console.log("입력성공");

        response.json({
          cafeName: cafeName,
          cafeTel: cafeTel,
          cafeLoc: cafeLoc,
          cafeKeyWord: cafeKeyWord,
          cafeTableNum: cafeTableNum,
          cafeTime: cafeTime,
          holiday: holiday,
          cafeIntro: cafeIntro,
        });
      } else {
        console.log("입력실패" + err);
      }
    }
  );
});

//RecommendNearby(관련카페) - 라우터 (유현 ing)

//CafeInfo 라우터 (찬호 - FIN)
router.post("/CafeInfo", function (request, response) {
  console.log("CafeInfo 라우터");
  let cafeName = request.body.cafeName;
  console.log(cafeName);
  
//들어간 카페정보의 카페 이름을 조건으로 카페번호를 찾음.
  let sql = "select CAFE_SEQ,C_TABLE from CAFE where CAFE_NAME=?";
  
  conn.query(sql, [cafeName], function (err, rows) {
    if (rows.length>0) {
      console.log("선택된 카페의 CAFE_SEQ는 : " + rows.length);
      let cafe_S = rows[0].CAFE_SEQ;
      console.log(cafe_S);
      let cafeTable = rows[0].C_TABLE;
      console.log(cafeTable)
      let sql2 = "select REQ_TABLE from RESERVATION where CAFE_SEQ=?"; 
      
      // 찾은 카페번호와 예약한 카페번호가 같은 것을 찾음.
       conn.query(sql2, [cafe_S], function (err2, rows2) {
        let compare = "";
         if (rows.length > 0) {
          let TSUM = 0;
          for(let i = 0; i<rows2.length; i++){
            TSUM += rows2[i].REQ_TABLE;
          }
           console.log("예약된 테이블 수는 : " + TSUM);
           let reqT = rows2[0].REQ_TABLE;
           if (reqT != null && TSUM / cafeTable <= 0.33) {
             console.log("여유!");
             compare = "혼잡도여유.png";
           } else if (reqT != null && TSUM / cafeTable <= 0.67) {
             console.log("보통!");
             compare = "혼잡도보통.png";
           } else if (reqT != null && TSUM / cafeTable > 0.67) {
             console.log("혼잡!");
             compare = "혼잡도혼잡.png";
           }
           console.log("이 카페의 혼잡도는 ? :" + compare);
       response.json({
         honjap: compare,
       });
         } else {
           console.log("입력실패" + err2);
         }
       });
       
       
      
    } else {
      console.log("입력실패" + err);
    }
  });
});

//Recommend 혼잡도 라우터 (찬호-미완성)
// router.post("/Recommend", function (request, response) {
//   console.log("Recommend 혼잡도 라우터");

//   let cafeName = cafeName;
//   console.log('cafeName[] : ' + cafeName);
  
// //들어간 카페정보의 카페 이름을 조건으로 카페번호를 찾음.
// for(let j=0; j<5;j++){
//   let sql = "select CAFE_SEQ,C_TABLE from CAFE where CAFE_NAME=?";
  
//   conn.query(sql, [cafeName[j]], function (err, rows) {
//     if (rows.length>0) {
//       console.log("선택된 카페의 CAFE_SEQ는 : " + rows.length);
//       let cafe_S = rows[0].CAFE_SEQ;
//       console.log(cafe_S);
//       let cafeTable = rows[0].C_TABLE;
//       console.log(cafeTable)
//       let sql2 = "select REQ_TABLE from RESERVATION where CAFE_SEQ=?"; 
      
//       // 찾은 카페번호와 예약한 카페번호가 같은 것을 찾음.
//        conn.query(sql2, [cafe_S], function (err2, rows2) {
//         let compare = "";
//          if (rows.length > 0) {
//           let TSUM = 0;
//           for(let i = 0; i<rows2.length; i++){
//             TSUM += rows2[i].REQ_TABLE;
//           }
//            console.log("예약된 테이블 수는 : " + TSUM);
//            let reqT = rows2[0].REQ_TABLE;
//            if (reqT != null && TSUM / cafeTable <= 0.33) {
//              console.log("여유!");
//              compare = "혼잡도여유.png";
//            } else if (reqT != null && TSUM / cafeTable <= 0.67) {
//              console.log("보통!");
//              compare = "혼잡도보통.png";
//            } else if (reqT != null && TSUM / cafeTable > 0.67) {
//              console.log("혼잡!");
//              compare = "혼잡도혼잡.png";
//            }
//            console.log("이 카페의 혼잡도는 ? :" + compare);
//        response.json({
//          honjap: compare,
//        });
//          } else {
//            console.log("입력실패" + err2);
//          }
//        });
//     } else {
//       console.log("입력실패" + err);
//     }
//   });
// }
// });

//CafeReservation 라우터 (유현 - Fin // sql문 cafeSEQ만 다시 생각해볼것)
router.post("/CafeReservation", function (request, response) {
  console.log("카페예약요청 라우터");
  console.log(request.body);

  let lem = request.body.lem;
  let lat = request.body.lat;
  let ameri = request.body.ameri;
  let cho = request.body.cho;
  let date = request.body.date;
  let reserveTime = request.body.reserveTime;
  let reserveTable = request.body.reserveTable;
  let reservePeople = request.body.reservePeople;
  let reserveReq = request.body.reserveReq;
  let custsid2 = request.body.id;
  let menu = `${ameri}, ${lat}, ${lem}, ${cho}`;

  console.log("사용자가 보낸 day : " + date);
  console.log("사용자가 보낸 menu :" + menu);
  console.log("사용자가 보낸 reserveTable : " + reserveTable);
  console.log("사용자가 보낸 reserveTime : " + reserveTime);
  console.log("사용자가 보낸 reservePeople : " + reservePeople);
  console.log("사용자가 보낸 reserveReq : " + reserveReq);
  console.log("소비자가 보낸 세션아이디 : " + custsid2);

  let sql = `insert into REQ_RESERVAT (C_ID, CAFE_SEQ, REQ_DAY, REQ_MENU, REQ_TIME, REQ_TABLE, REQ_PEOPLE, REQ_REQ) 
  values('${custsid2}', 1, ?, ?, ?, ?, ?, ?)`;

  conn.query(
    sql,
    [date, menu, reserveTime, reserveTable, reservePeople, reserveReq],
    function (err, rows) {
      if (!err) {
        console.log("입력성공");

        response.json({
          menu: menu,
          date: date,
          reserveTime: reserveTime,
          reserveTable: reserveTable,
          reservePeople: reservePeople,
          reserveReq: reserveReq,
        });
      } else {
        console.log("입력실패" + err);
      }
    }
  );
});

// 리뷰 댓글 작성 라우터 (아라 - Fin)
router.post("/review", function (request, response) {
  console.log("TestTest")
  console.log("사용자 nick : " + request.body.nick);
  console.log("사용자가 작성한 리뷰 : " + request.body.review);
  // console.log("리뷰 작성 시간 : " + request.body.re_date);
  let custsid3 = request.body.nick;
  let review = request.body.review;
  let sql = "insert into REVIEW (nick, review) values(?,?);";
  conn.query(sql, [custsid3, review], (err, rows) => {
    if (!err) {
      console.log("성공!!")
      response.json({
        test: "111",
      });
      
      //  response.json({
      //    custsid3: nick,
      //    review: review,
      //  });
      //console.log("리뷰 입력 성공");
    } else {
      console.log("리뷰 실패;" + err);
    }
  });
});

// 리뷰 댓글 조회 라우터 (아라 - Fin))
router.post("/reviewLookUp", function (request, response) {
  // let custsid3 = request.body.nick;
  // console.log(custsid3)
  let sql = "select * from REVIEW";
  conn.query(sql, (err, rows) => {
    if (rows.length > 0) {
      response.json({
        lists: rows,
        // re_date : rows[0].re_date,
        result: "success",
      });
      
    
    } else {
      console.log("리뷰 조회 실패");
    }
  });
});

//BookingCheck 라우터 (박찬호)
router.post("/BookingCheck", function (request, response) {
  console.log("예약확인 라우터");
  let sql =
    "select REQ_SEQ,C_ID,CAFE_SEQ, REQ_MENU, date_format(REQ_DAY, '%Y-%m-%d') REQ_DAY, REQ_TIME, REQ_TABLE, REQ_PEOPLE, REQ_REQ, date_format(REQ_NOWDATE, '%Y-%m-%d %T') REQ_NOWDATE from REQ_RESERVAT";
  conn.query(sql, function (err, rows) {
    if (rows.length > 0) {
      console.log("전달받기 성공" + rows.length);
      response.json({
        resvCheck: rows,
        result: "success",
      });
    } else {
      console.log("입력실패" + err);
    }
  });
});

//Allow 라우터(박찬호)
router.post("/Allow", function (request, response) {
  console.log("승인 라우터");
  console.log(request.body);
  let C_ID = request.body.C_ID;
  let REQ_MENU = request.body.REQ_MENU;
  let REQ_DAY = request.body.REQ_DAY;
  let REQ_TIME = request.body.REQ_TIME;
  let REQ_TABLE = request.body.REQ_TABLE;
  let REQ_PEOPLE = request.body.REQ_PEOPLE;
  let REQ_REQ = request.body.REQ_REQ;
  let REQ_RESERVEDATE = request.body.REQ_RESERVEDATE;
  let sql2 =
    "insert into RESERVATION(C_ID,CAFE_SEQ,REQ_MENU,REQ_DAY,REQ_TIME, REQ_TABLE, REQ_PEOPLE, REQ_REQ, REQ_RESERVEDATE) values(?, 1, ?, ?, ?, ?, ?, ?, ?)";
  conn.query(
    sql2,
    [
      C_ID,
      REQ_MENU,
      REQ_DAY,
      REQ_TIME,
      REQ_TABLE,
      REQ_PEOPLE,
      REQ_REQ,
      REQ_RESERVEDATE,
    ],
    function (err, rows) {
      if (!err) {
        console.log("내역테이블로 이동됨!");
        let sql = "delete from REQ_RESERVAT where REQ_NOWDATE = ?";
        conn.query(sql, [REQ_RESERVEDATE], function (err2, rows2) {
          if (!err2) {
            console.log("승인버튼 잘 눌러짐!");
            console.log("주문 삭제됨!");
                  response.json({
                    result: "success",
                  });
          } else {
            console.log("입력실패" + err2);
          }
        });
      } else {
        console.log("여기 오륜가?");
        console.log("입력실패" + err);
      }
    }
  );
});

//Cancel라우터 (박찬호)
router.post("/Cancel", function (request, response) {
  console.log("취소버튼 라우터");
  let REQ_RESERVEDATE = request.body.REQ_RESERVEDATE;
  let sql = "delete from REQ_RESERVAT where REQ_NOWDATE = ?";
  conn.query(sql, [REQ_RESERVEDATE], function (err2, rows2) {
    if (!err2) {
      console.log("취소버튼 잘 눌러짐!");
      console.log("주문 삭제됨!");
      response.json({
        result: "success",
      });
    } else {
      console.log("입력실패" + err2);
    }
  });
});

//BookingHistory(예약내역) 라우터 (박찬호)
router.post("/BookingHistory", function (request, response) {
  console.log("예약내역 라우터");
  let sql = "select REQ_SEQ, C_ID, CAFE_SEQ, REQ_MENU, date_format(REQ_DAY, '%Y-%m-%d') REQ_DAY, REQ_TIME, REQ_TABLE, REQ_PEOPLE, REQ_REQ, date_format(REQ_RESERVEDATE, '%Y-%m-%d %T') REQ_RESERVEDATE, date_format(REQ_RESERVEDATE, '%Y-%m-%d') REQ_RESERVEDATE2 from RESERVATION";
   conn.query(sql, function (err, rows) {
      
     if (rows.length > 0) {
       console.log("예약내역 select 성공 : 길이 = " + rows.length);
       response.json({
         resvCheck: rows,
         result: "success",
       });
     } else {
       console.log("입력실패" + err);
     }
   });
});

//소비자 Mypage 라우터 (박찬호)
router.post("/mypage", function (request, response) {
  let C_ID = request.body.C_ID;
  console.log("소비자 마이페이지 라우터!" + C_ID);

  let sql = "select REQ_SEQ, C_ID, CAFE_SEQ, REQ_MENU, date_format(REQ_DAY, '%Y-%m-%d') REQ_DAY, REQ_TIME, REQ_TABLE, REQ_PEOPLE, REQ_REQ, date_format(REQ_RESERVEDATE, '%Y-%m-%d %T') REQ_RESERVEDATE, date_format(REQ_RESERVEDATE, '%Y-%m-%d') REQ_RESERVEDATE2 from RESERVATION where C_ID = ?";
   conn.query(sql,[C_ID], function (err, rows) {
     if (rows.length > 0) {
       console.log("소비자 예약 정보 select 성공 : 길이 = " + rows.length);
       response.json({
         C_RESERVE: rows,
         result: "success",
       });
     } else {
       console.log("입력실패" + err);
     }
   });
});


module.exports = router;
