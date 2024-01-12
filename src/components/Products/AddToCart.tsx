import React, { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col md:flex-row w-full md:space-x-10 space-y-4 md:space-y-0 ">
      <div className="flex">
        <button
          className="bg-gray-50 border border-gray-300 px-4 py-2 rounded-l text-primary font-bold"
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          className="bg-gray-50 border-t border-b border-gray-300 text-gray-900 text-sm p-2.5 w-10 text-center"
        />
        <button
          className="bg-gray-50 border border-gray-300 px-4 py-2 rounded-r text-primary font-bold"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <Button>
        <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
