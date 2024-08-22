import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/iiitj.jpg";

import saazBanner from "../../../assets/SaazIntext.png"
const Banner = () => {
    return (
        <div className="hero-banner">
            <img src={BannerImg} alt="Banner" className="background"/>
            
        </div>
    );
};

export default Banner;
