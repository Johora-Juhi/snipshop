import React from "react";
import { BsPlusCircle } from "react-icons/bs";

const ProductsCard = ({ product }) => {
  const recentPrice =
    (product.price - product.price / product.discountPercentage).toFixed(2);
    const price = product.price.toFixed(2)
  return (
    <div className="pt-[34px] px-[33px] border rounded-[34px]">
      <img className="h-[250px] w-full rounded-xl" src={product.thumbnail} alt="" />
      <p className="font-semibold text-[18px] pt-[22px] pb-6">
        {product.title}
      </p>
      <div className="pb-[18px] flex justify-between items-end">
        <div className="flex items-center gap-[17px] font-light text-[18px]">
          <p className="">${recentPrice}</p>
          <p className="text-[#FF4516] line-through">${price}</p>
        </div>
        <div className="w-[61px] h-[61px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-3xl"><BsPlusCircle></BsPlusCircle></div>
      </div>
    </div>
  );
};

export default ProductsCard;
