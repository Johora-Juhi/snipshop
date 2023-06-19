import React from "react";
import appleLogo from "../../../assets/apple-logo.png";
import bmwLogo from "../../../assets/bmw-logo.png";
import nikeLogo from "../../../assets/nike-logo.png";
import FilaLogo from "../../../assets/Fila-Logo.png";
import miLogo from "../../../assets/mi-logo.png";
import adidasLogo from "../../../assets/adidas-logo.png";
import person from "../../../assets/image 49.png";
import sunglass from "../../../assets/image 50.png";
import shoe from "../../../assets/image 51.png";
import watch from "../../../assets/image 52.png";
import fb from "../../../assets/fb-logo.png";
import insta from "../../../assets/insta-logo.png";
import twitter from "../../../assets/Twitter-Logo.png";
import "./PopularBrands.css";
import { HiOutlineArrowRight } from "react-icons/hi";

const PopularBrands = () => {
  return (
    <div className="section">
      <div className="popularBrand">
        <div className="populerBrandLogos">
          <div className="logosBox">
            <div className="box">
              <img className="image" src={appleLogo} alt="" />
            </div>
            <div className="box">
              <img className="image" src={bmwLogo} alt="" />
            </div>
            <div className="box">
              <img className="image" src={nikeLogo} alt="" />
            </div>
            <div className="box">
              <img className="image" src={FilaLogo} alt="" />
            </div>
            <div className="box">
              <img className="image" src={miLogo} alt="" />
            </div>
            <div className="box">
              <img className="image" src={adidasLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="populerBrandDetails">
          <h1>Explore Most Populer Brands</h1>
          <p>Life is hard enough already. Let us make it a little easier.</p>
          <span className="flex justify-start font-medium text-[16px] items-center">
            See All
            <HiOutlineArrowRight className="ml-3"></HiOutlineArrowRight>
          </span>
        </div>
      </div>

      <div className="socialMedia">
        <div className="socialMediaDetails">
          <h1>Sell Easily on Socialmedia</h1>
          <p>Life is hard enough already. Let us make it a little easier.</p>
          <span className="flex justify-start font-medium text-[16px] items-center">
            See All
            <HiOutlineArrowRight className="ml-3"></HiOutlineArrowRight>
          </span>
        </div>
        <div className="socialmediaImgContainer">
          <img className="socialmediaImg" src={person} alt="" />
          <div className="socialmediaLogos pl-1">
            <div className="image2">
              <img src={sunglass} alt="" />
              <img className="logo" src={fb} alt="" />
              <p className="text-xs font-medium pb-5">$12.00</p>
            </div>
            <div className="image2">
              <img src={shoe} alt="" />
              <img className="logo w-[20px!important] ml-1" src={insta} alt="" />
              <p className="text-xs font-medium pb-5">$35.00</p>
            </div>
            <div className="image2">
              <img src={watch} alt="" />
              <img className="logo" src={twitter} alt="" />
              <p className="text-xs font-medium pb-5">$22.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
