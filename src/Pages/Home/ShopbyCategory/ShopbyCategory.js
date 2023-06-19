import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductsCard from "./ProductsCard";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const ShopbyCategory = () => {
  const url = `https://dummyjson.com/products?limit=9&skip=10&select=title,price,discountPercentage,thumbnail`;

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.products;
    },
  });
  console.log(products);
  return (
    <div className="w-[1256px] mx-auto pb-[190px]">
      <p className="font-bold text-4xl pb-6">Shop by Category</p>
      <div className="flex justify-between items-center mb-[66px]">
        <p className="text-[18px]">
          Life is hard enough already. Let us <br /> make it a little easier.
        </p>
        <div className="flex items-center gap-[16px]">
          <p>
            <HiChevronLeft className="bg-[#EBEBEB] text-black rounded-full text-[18px] "></HiChevronLeft>
          </p>
          <p>
            <HiChevronRight className="bg-[#2B2B2B] text-white rounded-full text-[18px]"></HiChevronRight>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ShopbyCategory;
