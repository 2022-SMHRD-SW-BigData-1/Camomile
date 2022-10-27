import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { JoinMember } from "./components/joinMember";
import { Home } from "./components/home";
import { ConsumerHeader } from "./components/consumerHeader";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Navigation } from "./components/navigation";
import { LoginPage } from "./components/LoginPage";
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
      {/* <Home/> */}
      <ConsumerHeader></ConsumerHeader>
      <LoginPage></LoginPage>
      <JoinMember />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/nav" element={<Navigation />} />
      </Routes>
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
    </>
  );
};
export default App;
