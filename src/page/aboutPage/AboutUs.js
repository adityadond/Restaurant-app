import React from "react";

import "./AboutUs.scss";
import Carousel from "../../component/Carousel/Carousel";
import about from "./about.jpg"

function AboutUs() {
  return <div className="App"><div className="carasouel">
  <Carousel
    heading={"About Us"}
    subHeading={"RESTORING AUTHENTICITY TO FOOD FROM THE GROUND UP IS THE MISSION THAT DRIVES US RESTAURATION IS THE REALISATION OF A DREAM"}
    images={about}
  />
</div>
<div className="menudetail">Menudetail</div></div>;
}

export default AboutUs;
