import React from "react";
import { HiOutlineUser, HiOutlineShoppingBag, HiMenu } from "react-icons/hi";
import { TbHeart } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from '../../../assets/Logo (1).png'
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#1E66FF] py-[25px] px-[135px]">
        <div className="navbar-start">
          <Link className=""><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center">
          <div className="join bg-white justify-between rounded-full  w-[593px]">
            <input
              className="input outline-none join-item rounded-full pl-8"
              style={{ outline: "none" }}
              placeholder="Search SnipShop.com"
            />
            <button
              className="btn bg-[#4DC3F7] join-item px-[26px] border-0"
              style={{ borderRadius: "50px" }}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="navbar-end   text-white ">
         <div className="flex justify-between items-center">
         <Link className="flex justify-center gap-2 items-center">
            <HiOutlineUser className=""></HiOutlineUser>
            <p className="text-[10px]">Account</p>
          </Link>
          <Link className="flex justify-start gap-2 items-center">
            <TbHeart className=""></TbHeart>
            <p className="text-[10px]">My Items</p>
          </Link>
          <Link className="flex justify-start">
            <HiOutlineShoppingBag className=""></HiOutlineShoppingBag>{" "}
            <span className="h-2 w-2 bg-warning rounded-full flex justify-center items-center indicator-item -ml-[6px] -mt-[6px] text-black text-[4px] font-bold">
              1
            </span>
          </Link>
         </div>
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost">
              <HiMenu className="text-3xl"></HiMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black "
            >
              <li>
                <Link to="/addProduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
