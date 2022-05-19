import React from "react";
import "./Menu.scss";
import Carousel from "../../component/Carousel/Carousel"
import menu from "./menu.jpg"

function Menu() {
  return <div className="Menu"><div className="carasouel">
  <Carousel
    heading={"Menu"}
    subHeading={"If more of us valued food and cheer and song above hoarded gold, It would be a merrier world-J.R.R TOLKIEN"}
    images={menu}
  />
</div>
<div className="menudetail">Menudetail</div></div>;
}

export default Menu;
