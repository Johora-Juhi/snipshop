import React from "react";
import "./TrendindProducts.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import bottle from "../../../assets/image-removebg-preview (55) 1.png";
import watch from "../../../assets/image-removebg-preview (57) 1.png";
import cream from "../../../assets/image-removebg-preview (58) 1.png";
import lamp from "../../../assets/image-removebg-preview (59) 1.png";
import perfume from "../../../assets/image-removebg-preview (60) 1.png";

const TrendingProducts = () => {
  return (
    <div class="trendingProduct py-[100px]">
      <h1>Shop Our Trending Products</h1>
      <p>Life is hard enough already. Let us make it a little easier.</p>
      <div className="flex items-center max-w-[1252px] mx-auto pb-[80px]">
        <div class="pages text-end">
          <p>Fahion</p>
          <p>Technology</p>
          <p>Interiors</p>
          <p>Food & Drink</p>
        </div>
        <div className="flex items-center gap-[16px] max-w-[50px]">
          <p>
            <HiChevronLeft className="bg-[#EBEBEB] text-black rounded-full text-[18px] "></HiChevronLeft>
          </p>
          <p>
            <HiChevronRight className="bg-[#2B2B2B] text-white rounded-full text-[18px]"></HiChevronRight>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[35px] ml-[132px]">
      
        
        <div className="shopCard" style={{backgroundImage: "linear-gradient(#C0D4FE, #ECF1FD)" }}>
          <div style={{ maxWidth: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 600}}>
              Seven Zero Five
            </div>
            <div className="pt-1 pb-3" style={{ fontSize: 16 }}>Starting</div>
            <div style={{ fontSize: 16, color: "red" }}>$10.00</div>
          </div>
          <div className="-mt-[90px]">
            <img className="shopCardImage" src={bottle} />
          </div>
        </div>{" "}
        <div className="shopCard bg-[#E9EBF0]">
          <div style={{ maxWidth: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 600}}>
              Seven Zero Five
            </div>
            <div className="pt-1 pb-3" style={{ fontSize: 16 }}>Starting</div>
            <div style={{ fontSize: 16, color: "red" }}>$10.00</div>
          </div>
          <div className="-mt-[90px]">
            <img className="shopCardImage" src={watch} />
          </div>
        </div>{" "}
        <div className="shopCard bg-[#F0EBFF]">
          <div style={{ maxWidth: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 600}}>
              Seven Zero Five
            </div>
            <div className="pt-1 pb-3" style={{ fontSize: 16 }}>Starting</div>
            <div style={{ fontSize: 16, color: "red" }}>$10.00</div>
          </div>
          <div className="-mt-[90px]">
            <img className="shopCardImage" src={cream} />
          </div>
        </div>{" "}
        <div className="shopCard bg-[#EBF9FF]">
          <div style={{ maxWidth: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 600}}>
              Seven Zero Five
            </div>
            <div className="pt-1 pb-3" style={{ fontSize: 16 }}>Starting</div>
            <div style={{ fontSize: 16, color: "red" }}>$10.00</div>
          </div>
          <div className="-mt-[90px]">
            <img className="shopCardImage" src={lamp} />
          </div>
        </div>{" "}
        <div className="shopCard bg-[#E9F0FF]">
          <div style={{ maxWidth: 150 }}>
            <div style={{ fontSize: 22, fontWeight: 600}}>
              Seven Zero Five
            </div>
            <div className="pt-1 pb-3" style={{ fontSize: 16 }}>Starting</div>
            <div style={{ fontSize: 16, color: "red" }}>$10.00</div>
          </div>
          <div className="-mt-[90px]">
            <img className="perfumeImage" src={perfume} />
          </div>
        </div>{" "}
        
       
      </div>
    </div>
  );
};

export default TrendingProducts;
