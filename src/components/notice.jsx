import "./recommend.css";

export const Notice = (props) => {
  return (
    <div id="features" className="text-center">
      기철홀릭
      {/* <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>기철홀릭</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <div><img className={d.icon}/></div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div> */}
    </div>
  );
};
