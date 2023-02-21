import React from "react";
import "../scss/homepage.scss";
import { GenerateLinks } from "./socialLinks";
import { BgImg } from "./imgBg";

export const HomePage = () => {
  return (
    <main id="home">
      <GenerateLinks />
      <BgImg />
    </main>
  );
};
