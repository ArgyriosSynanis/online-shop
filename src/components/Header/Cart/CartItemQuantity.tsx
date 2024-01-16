import React from 'react';
import { useAddToCart, useRemoveFromCart } from '../../../hooks/useCartActions';

const CartItemQuantity = ({
  id,
  quantity,
  price,
  title,
  thumbnail,
}: {
  id: string;
  quantity: number;
  price: number;
  title: string;
  thumbnail: string;
}) => {
  const addToCartHandler = useAddToCart();
  const removeFromCartHandler = useRemoveFromCart();

  return (
    <div className="flex flex-col md:flex-row w-full md:space-x-10 space-y-4 md:space-y-0 ">
      <div className="flex">
        <button
          className="bg-gray-50 border border-gray-300 px-4 py-2 rounded-l text-primary font-bold"
          onClick={() => removeFromCartHandler(id)}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          className="bg-gray-50 border-t border-b border-gray-300 text-gray-900 text-sm p-2.5 w-10 text-center"
          readOnly
        />
        <button
          className="bg-gray-50 border border-gray-300 px-4 py-2 rounded-r text-primary font-bold"
          onClick={() => addToCartHandler({ id, price, title, thumbnail })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItemQuantity;
