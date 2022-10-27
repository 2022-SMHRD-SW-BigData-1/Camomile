// JSX => JS랑 똑같은데 HTML 구문으로 작성이 가능한 확장자.

import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Navigation2 } from "./components/navigation2";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { RecommendNearby } from "./components/recommendNearby";
import { RecommendNew } from "./components/recommendNew";
import { RecommendKeyword } from "./components/recommendKeyword";
import { MoveToAdPage } from "./components/moveToAdPage";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { LoginPage } from "./components/LoginPage";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <LoginPage />
      {/* <Navigation />
      <Navigation2 />
      <Header data={landingPageData.Header} /> */}
      {/* <RecommendNearby />
      <RecommendNew />
      <RecommendKeyword />
      <MoveToAdPage /> */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
