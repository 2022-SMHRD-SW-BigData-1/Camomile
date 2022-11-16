import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AdHeader } from "./components/js/AdHeader";
import { BookingCheck } from "./components/js/BookingCheck";
import { BookingHistory } from "./components/js/BookingHistory";
import { CafeInfo } from "./components/js/CafeInfo";
import { CafeReservation } from "./components/js/CafeReservation";
import { Home } from "./components/js/home";
import { InfoBInsert } from "./components/js/InfoBInsert";
import { InfoBInsertUpdate } from "./components/js/InfoBInsertUpdate";
import { JoinBusiness } from "./components/js/JoinBusiness";
import { JoinMember } from "./components/js/JoinMember";
import { LoginPage } from "./components/js/LoginPage";
import { LoginPageBusiness } from "./components/js/LoginPageBusiness";
import { Navigation } from "./components/js/navigation";
import { NoticeB } from "./components/js/NoticeB";
import { NoticeBw } from "./components/js/NoticeBw";
import { NoticeMember } from "./components/js/NoticeMember";
import { RecommendKeyword } from "./components/js/recommendKeyword";
import { RecommendNearby } from "./components/js/recommendNearby";
import { ReservationMain } from "./components/js/ReservationMain";

import { SearchHeader } from "./components/js/SearchHeader";

import SmoothScroll from "smooth-scroll";
import "./App.css";
import { RecommendNew } from "./components/js/recommendNew";
import { UserInfoUpdate } from "./components/js/UserInfoUpdate";
import { Mypage } from "./components/js/Mypage";
import Map_basic from "./components/js/Map_basic";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });
const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);
  return (
    <>
      <SearchHeader></SearchHeader>
      <AdHeader></AdHeader>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/nav" element={<Navigation />} />
        <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/LoginPageBusiness"
          element={<LoginPageBusiness></LoginPageBusiness>}
        ></Route>
        <Route path="/JoinMember" element={<JoinMember></JoinMember>}></Route>
        <Route
          path="/JoinBusiness"
          element={<JoinBusiness></JoinBusiness>}
        ></Route>
        <Route path="/CafeInfo" element={<CafeInfo></CafeInfo>}></Route>
        <Route
          path="/BookingCheck"
          element={<BookingCheck></BookingCheck>}
        ></Route>
        <Route
          path="/InfoBinsert"
          element={<InfoBInsert></InfoBInsert>}
        ></Route>
        <Route
          path="/BookingHistory"
          element={<BookingHistory></BookingHistory>}
        ></Route>
        <Route path="/NoticeB" element={<NoticeB></NoticeB>}></Route>
        <Route path="/NoticeBw" element={<NoticeBw></NoticeBw>}></Route>
        <Route
          path="/RecommendKeyword"
          element={<RecommendKeyword></RecommendKeyword>}
        ></Route>
        <Route
          path="/RecommendNearby"
          element={<RecommendNearby></RecommendNearby>}
        ></Route>
        <Route
          path="/ReservationMain"
          element={<ReservationMain></ReservationMain>}
        ></Route>
        <Route
          path="/RecommendNew"
          element={<RecommendNew></RecommendNew>}
        ></Route>
        <Route
          path="/UserInfoUpdate"
          element={<UserInfoUpdate></UserInfoUpdate>}
        ></Route>
        <Route
          path="/CafeReservation"
          element={<CafeReservation></CafeReservation>}
        ></Route>
        <Route
          path="/NoticeMember"
          element={<NoticeMember></NoticeMember>}
        ></Route>
        <Route
          path="/Mypage"
          element={<Mypage></Mypage>}
        ></Route>
        <Route
          path="/Map_basic"
          element={<Map_basic></Map_basic>}
        ></Route>
      </Routes>
    </>
  );
};
export default App;
