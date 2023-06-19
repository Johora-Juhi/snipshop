import React from "react";
import person from "../../../assets/image.png";
import logo from "../../../assets/37 11.png";
import "./ProductSeller.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const ProductSeller = () => {
  return (
    <div class="productSeller">
      <div class="productSellerImg">
        <img src={person} alt="" />
      </div>
      <div class="productSellerDetails">
        <div class="productSellerTitle">
          <h1>Justin Pierre</h1>
          <img src={logo} alt="" />
        </div>
        <p>Products Seller</p>
        <h2>
          “In 2 years, my business went from just me and my Shop site to 40
          employees, my own fulfillment center and over 22 million dollars in
          revenue.”
        </h2>
        <div className="flex items-center justify-start">
          <IoIosArrowDropleftCircle class=" leftArrow"></IoIosArrowDropleftCircle>{" "}
          <IoIosArrowDroprightCircle class="rightArrow"></IoIosArrowDroprightCircle>
        </div>
      </div>
    </div>
  );
};

export default ProductSeller;
