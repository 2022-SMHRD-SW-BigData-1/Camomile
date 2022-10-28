const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const path = require("path");

let conn = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_2",
  password: "smhrd2",
  port: "3307",
  database: "campus_h_1024_2",
});

// router.post("/joinData", function (request, response) {
//   //view (react) => router로 데이터 보내기
//   console.log("join router", request.body.id);

//   // router => view (react)로 데이터 보내기
//   response.json({ result: "success" });
// });

router.get("/", function (request, response) {
  console.log("Happy Hacking!");
  let id = "zz";
  let pw = "zz";
  let nick = "ZZ";

  let sql = "insert into test values(?, ?, ?)";

  conn.query(sql, [id, pw, nick], function (err, rows) {
    if (!err) {
      console.log("입력성공");
    } else {
      console.log("입력실패" + err);
    }
  });

  //   response.sendFile(
  //     path.join(__dirname, "..", "Camomile", "build", "index.html")
  //   );
});

module.exports = router;
