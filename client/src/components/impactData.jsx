// import React from "react";
import ImageCarousel2 from "./ImageCarousel2";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";

function impactData() {
  
  const imagesIntro = [t1, t2, t3, t4, t5];
  return (
    <div className="second">

      <div className="introWorkImg">
        <ImageCarousel2 images={imagesIntro} />
      </div>
      <div className="introWorkContent">
        Drishti Rotaract Club of BPIT is a dynamic organization committed to social impact through diverse projects and community service. With initiatives spanning education, health, and environmental sustainability, they work to uplift and empower underprivileged groups. Driven by compassion and teamwork, Drishti aims to create lasting, positive change in their communities.</div>
    </div>
  );
}

export default impactData;
