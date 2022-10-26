// import { useState } from "react";

export const Navigation = (props) => {

  // const [search, setSearch] = useState("");
  // const onChange = (e) => {
  //   setSearch(e.target.value)
  // }

  // const filterTitle = movies.filter((p) => {
  //   return p.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
  // })
//  id="menu" className="navbar navbar-default navbar-fixed-top"
// className = "container";
  return (
    <nav id="menu" className="navbar navbar-default">
      <div className="container">
        <a
          className="navbar-brand page-scroll"
          href="http://localhost:3000/#page-top"
        >
          <img
            src={require("./camomile.png").default}
            style={{
              position: "relative",
              width: "150px",
              bottom: 10,
              left: 20,
            }}
          />
        </a>{" "}
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="">로그인</a>
          </li>
          <li>
            <a href="">회원가입</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};