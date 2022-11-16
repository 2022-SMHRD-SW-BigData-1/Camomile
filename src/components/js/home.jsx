import { React, useEffect } from "react";
import { Navigation } from "./navigation";
import { Navigation2 } from "./navigation2";
import { Banner } from "./Banner";
import { RecommendKeyword } from "./recommendKeyword";
import { RecommendNew } from "./recommendNew";
import { RecommendNearby } from "./recommendNearby";
import { MoveToAdPage } from "./moveToAdPage";

export const Home = () => {
  useEffect(function () {
    document.getElementById("SearchHeader").style.display = "none";
    document.getElementById("AdHeader").style.display = "none";
  });
  return (
    <div>
      <Navigation />
      {/* <Navigation2 /> */}
      <Banner />
      <RecommendNearby />
      <RecommendNew />
      <RecommendKeyword />
      <MoveToAdPage />
    </div>
  );
};
