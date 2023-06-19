import React from 'react';
import image from '../../../assets/image1.png';
import './FeatureProduct.css';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const FeaturedProduct = () => {
    return (
        <div  className="featureProduct">
        <div className="featureProductDetails">
          <h1>
            Featured Product For <br /> Pre-Order 
          </h1>
          <span className="discoverProduct"><p>Discover Our Products    <i style={{paddingLeft: '5px'}} class="fa-solid fa-arrow-right"></i></p></span>
        </div>
        <div style={{display: 'flex', }}>
          <div className='flex items-center justify-start' style={{fontSize: '37.5px',marginTop: '-280px', marginLeft: '200px'}}>
          <IoIosArrowDropleftCircle class=" leftArrow"></IoIosArrowDropleftCircle>{" "}
          <IoIosArrowDroprightCircle class="rightArrow"></IoIosArrowDroprightCircle>
          </div>
          <div style={{ marginLeft: 100, marginBottom: 100, width: 290 }}>
            <div style={{ textAlign: "center" }} className="featureProductCard">
              <img className="featureProductImage" src={image} />
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
              <div>$285.00 USD</div>
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
              <img className="featureProductImage" src={image} />
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
              <div>$285.00 USD</div>
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
              <img className="featureProductImage" src={image} />
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
              <div>$285.00 USD</div>
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