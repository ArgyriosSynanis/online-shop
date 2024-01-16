import React from 'react';
import { Link } from 'react-router-dom';

import { ProductItem } from './ProductList';
import Rating from './Rating';
import AddToCartButton from '../Button/AddToCartButton';

const Product = ({
  id,
  thumbnail,
  title,
  description,
  price,
  category,
  rating,
}: ProductItem) => {
  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl p-4 rounded-md flex flex-col justify-between">
      <p className="bg-red-100 border text-center border-red-500 rounded-md text-primary text-sm poppins px-4 inline-block mt-2 w-fit">
        {category}
      </p>
      <div className="flex flex-col py-4 mb-4">
        <Link to={`/product/${id}`} className="w-full">
          <img
            className="w-full h-36 object-cover transform transition duration-300 rounded-md"
            src={thumbnail}
            alt={title}
          />
        </Link>
        <div className="flex flex-col mt-4 space-y-4 w-full">
          <Link to={`/product/${id}`}>
            <h1 className="text-gray-900 poppins text-lg font-bold">{title}</h1>
          </Link>
          <p className="text-gray-500 poppins text-sm">{description}</p>
          <Rating rating={rating} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-gray-900 poppins text-2xl font-bold">£{price}</h2>
        <AddToCartButton
          id={id}
          title={title}
          price={price || 0}
          thumbnail={thumbnail}
        />
      </div>
    </div>
  );
};

export default Product;
