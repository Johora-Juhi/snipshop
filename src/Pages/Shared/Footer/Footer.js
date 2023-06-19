import React from 'react';
import './Footer.css'
import logo from '../../../assets/Untitled design.png';
import insta from '../../../assets/Combined-Shape.png';
import twitter from '../../../assets/Combined-Shape (1).png';
import combined from '../../../assets/Combined-Shape (2).png';
import fb from '../../../assets/Fill-1.png';
import pinterest from '../../../assets/Path.png';
import background from '../../../assets/Vector 2.png'

const Footer = () => {
    return (
        <div class="footerContainer">
        <div class="footerDiv">
<img src={background} className='footerBackground' alt="" />
           <div class="footerPart ">
               <h1>Shop</h1>
               <p>Gift cards</p>
               <p>Snipshop blog</p>
           </div>
           <div class="footerPart ">
               <h1>Sell</h1>
               <p>Sell on SnipShop</p>
               <p>Tearms</p>
               <p>Forums</p>
               <p>Affiliates</p>
           </div>
           <div class="footerPart ml-10">
               <h1>About</h1>
               <p>SnipShop,Inc.</p>
               <p>Policies</p>
               <p>Investors</p>
               <p>Careers</p>
               <p>Press</p>
               <p>Impact</p>
           </div>
           <div class="footerPart ml-20  pb-[24px]">
               <h1>Help</h1>
               <p>Help center</p>
               <p>Trust and safety</p>
               <p>Privacy settings</p>
               <div class="img flex  items-center mt-[10px] px-2">
                   <img src={logo} alt="" />
                   <p className='pb-[0!important] tracking-wider'>Download the SnipShop App </p>
               </div>
               <div class="footerLogo flex justify-start items-center">
                   <img src={insta} alt="" />
                   <img src={fb} alt="" />
                   <img src={twitter} alt="" />
                   <img src={combined} alt="" />
                   <img src={pinterest} alt="" />
               </div>
           </div>
           
        </div>
        <div class="flex items-center justify-between px-[135px]  py-[23px] bg-[#232347] text-white ">
           <p>© 2021-2023 SnipShop.com</p>
           <div class="flex items-center gap-[20px]">
               <p>Terms of use</p>
               <p>Privacy</p>
               <p>Interest-based ads</p>
           </div>
        </div>
        
   </div>
    );
};

export default Footer;