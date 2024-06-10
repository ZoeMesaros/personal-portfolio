import React from "react";
import "./mainpage.scss";
import Navigation from "../navigation/MainNav";
import IntroSection from "../intro/introSection";

export const MainPage = () => {
  return (
    <main id="main">
      <Navigation />
      <IntroSection />
    </main>
  );
};
