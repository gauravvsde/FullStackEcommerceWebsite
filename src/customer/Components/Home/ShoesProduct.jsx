import React from "react";

import { useNavigate } from "react-router-dom";

const ShoesProduct = ({ product }) => {
  const navigate = useNavigate();
  //   console.log("product", product);

  return (
    <div
      onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="cursor-pointer flex space-x-10  bg-white rounded shadow-xl overflow-hidden w-[15rem] mx-1 my-2"
    >
      <div className="flex flex-col items-center">
        <div className="h-[13rem] w-[15rem]">
          <img
            className="object-cover object-top w-full h-full"
            src={product?.image || product?.imageUrl}
            alt={product?.title}
          />
        </div>

        <div className=" p-4">
          <h3 className=" text-lg font-medium text-gray-900 ">
            {product?.brand || product?.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoesProduct;
