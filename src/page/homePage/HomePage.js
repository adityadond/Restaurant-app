import React from "react";
import "./HomePage.scss";
import Carousel from "../../component/Carousel/Carousel";
import hom from "../../component/assets/homee2.jpg";

function HomePage() {
  return (
    <div className="app">
      <div className="carasouel">
        <Carousel
          heading={"Welcome to SkyWave Restaurant"}
          subHeading={"Healthy, Authentic and Safe Food"}
          images={hom}
        />
      </div>
      <div className="menudetail">Menudetail</div>
    </div>
  );
}

export default HomePage;
