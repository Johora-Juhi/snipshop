import React from "react";
import camera from "../../../assets/camera.png";
import lens from "../../../assets/image-removebg-preview (50) 1 (1).png";
import stand from "../../../assets/image 54 (1).png";
import base from "../../../assets/base.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="background">
      <div className="bannerContainer">
        <div className="bannerContainerDetails max-w-[420px]">
          <p>100% QUALITY, 100% SATISFACTION</p>
          <h1>Where the world comes to shop.</h1>
          <h4>
            Life is hard enough already. Let us make it a little easier, Vision
            of Snipshopfor a better outlook.
          </h4>
          <div className="bannerContainerButton">
            <button onClick={() => {}}>SHOP NOW</button>
            <div className="bannerContainerMoney">
              <p>Start from</p>
              <h3>110.00$</h3>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="bannerImage">
            <img className="cameraImage" src={camera} alt="" />
          </div>
          <div className="display">
            <p>PREV</p>
            <div className="box"></div>
            <div className="box" style={{ backgroundColor: "#0f3a96" }}></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <p>NEXT</p>
          </div>
        </div>
        <div className="cameraDetails">
          <div>
            <img className="cameraDetailsImage" src={lens} alt="" />
          </div>
          <p>
            Fuji 14mm <br /> Lens
          </p>
          <div>
            <img className="cameraDetailsImage" src={stand} alt="" />
          </div>
          <p>
            Camera <br /> Stand
          </p>
          <IoIosArrowDropdownCircle class="text-[37.5px] mx-auto"></IoIosArrowDropdownCircle>
        </div>
      </div>

      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L60,128C120,160,240,224,360,245.3C480,267,600,245,720,245.3C840,245,960,267,1080,282.7C1200,299,1320,309,1380,314.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <img className="base" src={base} />
    </div>
  );
};

export default Banner;
