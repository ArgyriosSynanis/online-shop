import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductItem } from './ProductList';
import Rating from './Rating';

const Product = ({
  id,
  thumbnail,
  title,
  description,
  price,
  category,
  rating,
}: ProductItem) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg flex flex-col justify-between">
      <p className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 inline-block mt-2 w-32">
        {category}
      </p>
      <div className="flex flex-col py-4 justify-start items-start">
        <img
          className="w-full h-36 object-cover mx-auto transform transition duration-300"
          src={thumbnail}
          alt={title}
        />
        <div className="flex flex-col mt-4 space-y-2 ">
          <h1 className="text-gray-900 poppins text-lg font-bold">{title}</h1>
          <p className="text-gray-500 poppins text-sm">{description}</p>
          <Rating rating={rating} />
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <h2 className="text-gray-900 poppins text-2xl font-bold">£{price}</h2>
        <button
          className="bg-primary text-white px-6 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105"
          onClick={handleRoute}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Product;
