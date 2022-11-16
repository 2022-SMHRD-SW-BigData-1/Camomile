import "../css/UserInfoUpdate.css";

export const UserInfoUpdate = () => {
  return (
    <div className="container" style={{ position: "relative", top: "10px" }}>
      <h1 className="userInfoTitle"> 회원 정보 수정 </h1>
      <hr className="userInfoHr"></hr>

      <div className="userContent">
        <div className="userPhoto">
          <h3 className="userInfoText"> 프로필 사진 </h3>
          <input className="userPhotoInput"></input>
          <button className="userPhotoSelect"> 이미지 선택 </button>
        </div>

        <div className="userName">
          <h3 className="userInfoText"> 이름 </h3>
          <input
            className="userNameInput"
            placeholder="이름을 입력해주세요"
          ></input>
        </div>

        <div className="userBirth">
          <h3 className="userInfoText"> 생년월일 </h3>
          <p className="userBirthP">
            <span>
              <input
                className="userBirthInput"
                placeholder="년(4자리)"
                type="text"
                maxLength={4}
              ></input>
            </span>

            <span>
              <select className="userBirthInput" placeholder="월">
                <option value={"month1"}> 1월 </option>
                <option value={"month2"}> 2월 </option>
                <option value={"month3"}> 3월 </option>
                <option value={"month4"}> 4월 </option>
                <option value={"month5"}> 5월 </option>
                <option value={"month6"}> 6월 </option>
                <option value={"month7"}> 7월 </option>
                <option value={"month8"}> 8월 </option>
                <option value={"month9"}> 9월 </option>
                <option value={"month10"}> 10월 </option>
                <option value={"month11"}> 11월 </option>
                <option value={"month12"}> 12월 </option>
              </select>
            </span>

            <span>
              <input
                className="userBirthInput"
                placeholder="일"
                type="text"
                maxLength={2}
              ></input>
            </span>
          </p>
        </div>

        <div className="userPhone">
          <h3 className="userInfoText">휴대전화</h3>
          <input
            className="userPhoneInput"
            placeholder="공백없이 번호만 입력해주세요"
            maxLength={11}
          ></input>
        </div>

        <div className="userNick">
          <h3 className="userInfoText"> 닉네임 </h3>
          <input
            className="userNickname"
            placeholder="사용할 닉네임을 입력주세요"
          ></input>
        </div>
      </div>

      <hr></hr>

      <p className="userInfoButton">
        <button className="userInfoButton2"> 정보 수정 </button>
      </p>
    </div>
  );
};
