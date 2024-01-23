import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product, category }) => {
  const navigate = useNavigate();
  console.log("category", category);

  const generatePath = (category) => {
    // Map each category to a specific path
    const categoryPaths = {
      mens_kurta: "men/clothing/mens_kurta",
      men_jeans: "men/clothing/men_jeans",
      shirt: "/men/clothing/shirt",
      women_dress: "women/clothing/women_dress",
      top: "women/clothing/top",
      // Add more categories and paths as needed
    };

    // Use the mapped path for the category, or a default path if not found
    const path = categoryPaths[category] || "/products/other";
    navigate(path);
    window.scrollTo(0, 0);
    return path;
  };

  return (
    <div
      // onClick={onClick}
      onClick={() => generatePath(category)}
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

export default HomeProductCard;
