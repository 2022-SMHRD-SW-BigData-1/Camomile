// import { useState } from "react";

export const Navigation2 = (props) => {
  // const [search, setSearch] = useState("");
  // const onChange = (e) => {
  //   setSearch(e.target.value)
  // }

  // const filterTitle = movies.filter((p) => {
  //   return p.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
  // })

  return (
    <nav id="menu2" className="navbar navbar-default">
      <div className="container">
        <ul
          className="nav navbar-nav"
          style={{
            display: "inline-block",
            position: "relative",
          }}
        >
          <li>
            <a href="" className="page-scroll">
              예약
            </a>
          </li>
          <li>
            <a href="" className="page-scroll">
              리뷰
            </a>
          </li>
          <li>
            <a href="http://localhost:3001/Map_basic" className="page-scroll">
              지도
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
