import './recommend.css';

export const MoveToAdPage = (props) => {
  return (
    <>
      <hr />
      <div
        className="container"
        style={{ position: "relative", textAlign: "right" }}
      >
        <a href='#'>
          <div className="moveToAdPage">
            <p>사업자 페이지로 이동</p>
          </div>
        </a>
      </div>
    </>
  );
};
