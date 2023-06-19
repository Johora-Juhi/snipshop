import React from "react";
import image from "../../../assets/image1.png";
import chanel from '../../../assets/image (1).png';
import gabrielle from '../../../assets/image (2).png'
import "./FeatureProduct.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";

const FeaturedProduct = () => {
  return (
    <div className="featureProduct">
      <div className="featureProductDetails">
        <h1>
          Featured Product For <br /> Pre-Order
        </h1>
        <span className="discoverProduct">
          <p className=" flex items-center justify-end">
            Discover Our Products{" "}
            <HiOutlineArrowRight className="ml-3"></HiOutlineArrowRight>
          </p>
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="flex items-center justify-start"
          style={{
            fontSize: "37.5px",
            marginTop: "-280px",
            marginLeft: "200px",
          }}
        >
          <IoIosArrowDropleftCircle class=" leftArrow"></IoIosArrowDropleftCircle>{" "}
          <IoIosArrowDroprightCircle class="rightArrow"></IoIosArrowDroprightCircle>
        </div>
        <div style={{ marginLeft: 100, marginBottom: 100, width: 290 }}>
          <div style={{ textAlign: "center" }} className="featureProductCard">
            <img className="featureProductImage " src={image} alt=""/>
            <p className="p-2 rounded-lg bg-[#0E4B80] text-white w-[83px] text-xs font-semibold preOrder">PRE_ORDER</p>
            <div>VERCACE</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>EROS - W</p>
              <p style={{ fontSize: 13, color: "#8D8D8D" }}> - Women</p>
            </div>
            <div className="font-semibold text-[18px] text-[#0E4B80] pt-[30px]">$285.00 USD</div>
          </div>
          <div
            style={{
              width: 200,
              margin: "auto",
              textAlign: "center",
              backgroundColor: "#001439",
              paddingTop: 20,
              paddingBottom: 20,
              color: "white",
              fontWeight: 600,
              borderRadius: 50,
              marginTop: 40,
            }}
          >
            ORDER NOW
          </div>
        </div>
        <div style={{ marginLeft: 100, marginBottom: 100, width: 290 }}>
          <div style={{ textAlign: "center" }} className="featureProductCard">
            <img className="featureProductImage" src={chanel} alt=""/>
            <p className="p-2 rounded-lg bg-[#0E4B80] text-white w-[83px] text-xs font-semibold preOrder">PRE_ORDER</p>
            <div>N.5 CHANEL</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>EAU DE PARFUM - M </p>
              <p style={{ fontSize: 13, color: "#8D8D8D" }}> - Man</p>
            </div>
            <div className="font-semibold text-[18px] text-[#0E4B80] pt-[30px]">$285.00 USD</div>
          </div>
          <div
            style={{
              width: 200,
              margin: "auto",
              textAlign: "center",
              backgroundColor: "#001439",
              paddingTop: 20,
              paddingBottom: 20,
              color: "white",
              fontWeight: 600,
              borderRadius: 50,
              marginTop: 40,
            }}
          >
            ORDER NOW
          </div>
        </div>
        <div style={{ marginLeft: 100, marginBottom: 100, width: 290 }}>
          <div style={{ textAlign: "center" }} className="featureProductCard">
            <img className="featureProductImage" src={gabrielle} alt=""/>
            <p className="p-2 rounded-lg bg-[#0E4B80] text-white w-[83px] text-xs font-semibold preOrder">PRE_ORDER</p>
            <div>GABRIELLE</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>CHANEL PARIS- M </p>
              <p style={{ fontSize: 13, color: "#8D8D8D" }}> - Man</p>
            </div>
            <div className="font-semibold text-[18px] text-[#0E4B80] pt-[30px]">$285.00 USD</div>
          </div>
          <div
            style={{
              width: 200,
              margin: "auto",
              textAlign: "center",
              backgroundColor: "#001439",
              paddingTop: 20,
              paddingBottom: 20,
              color: "white",
              fontWeight: 600,
              borderRadius: 50,
              marginTop: 40,
            }}
          >
            ORDER NOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
