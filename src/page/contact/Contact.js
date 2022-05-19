import React from "react";

import "./Contact.scss";
import Carousel from "../../component/Carousel/Carousel";
import contact from "./contact.jpg"

function Contact() {
  return <div className="App"><div className="carasouel">
  <Carousel
    heading={"Contact Us"}
    subHeading={"GOT A QUESTION? WE'LL GIVE YOU A STRAIGHT ANSWER"}
    images={contact}
  />
</div>
<div className="menudetail">Menudetail</div></div>;
}

export default Contact;
