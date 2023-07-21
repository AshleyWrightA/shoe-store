import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../css/home.min.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [deviceHome, setDeviceHome] = useState(<DesktopHome />);
  const mobileBreakPoint = 600;

  useEffect(() => {
    document.querySelector(".home__splash").playbackRate = 0.8;
    document.querySelector(".home__splash").play();
  });

  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    setScreenWidth(window.innerWidth);
    if (screenWidth > mobileBreakPoint) {
      setDeviceHome(<DesktopHome />);
    } else if (screenWidth <= mobileBreakPoint) {
      setDeviceHome(<MobileHome />);
    }
  }, [screenWidth]);

  return deviceHome;
}

function DesktopHome() {
  return (
    <>
      <Navbar />
      <div className="home">
        <video className="home__splash" autoPlay loop muted>
          <source src="assets/images/boots_splash.webm" type="video/webm"></source>
        </video>
        <div className="home__hero">
          <h1 className="home__intro">BRAND </h1>
          <h2 className="home__intro-2">Straight to your doorstep.</h2>
          <Link to="/shop" className="home__anchor-shop">
            View Catalog
          </Link>
        </div>
      </div>
    </>
  );
}

function MobileHome() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home__video-wrapper">
          <video className="home__splash" autoPlay loop muted>
            <source src="assets/images/boots_splash.webm" type="video/webm"></source>
          </video>
        </div>
        <Link to="/shop" className="home__anchor-shop">
          View Catalog
        </Link>
      </div>
    </>
  );
}
