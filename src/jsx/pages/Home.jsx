import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import HomeContainer from "../components/homepage/HomeContainer";
import HomeSplash from "../components/homepage/HomeSplash";
import HomeHero from "../components/homepage/HomeHero";
import "../../css/home.min.css";

export default function Home() {
  useEffect(() => {
    document.querySelector(".home__splash").playbackRate = 0.8;
    document.querySelector(".home__splash").play();
  });

  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeSplash />
        <HomeHero />
      </HomeContainer>
    </>
  );
}
