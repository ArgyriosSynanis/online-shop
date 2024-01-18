import React from 'react';
import { Link } from 'react-router-dom';
import CartItemQuantity from './CartItemQuantity';
import { ProductItem } from '../../../types/Product.types';

interface CartItemProps extends ProductItem {
  quantity: number;
  toggleCartHandler: () => void;
}

const CartItem = ({
  id,
  title,
  quantity,
  price,
  thumbnail,
  totalPrice,
  toggleCartHandler,
}: CartItemProps) => {
  return (
    <div className="mt-8">
      <div className="flex">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col w-full">
          <h3 className="font-bold">
            <Link to={`/product/${id}`} onClick={toggleCartHandler}>
              {title}
            </Link>
          </h3>

          <div className="flex flex-1 items-end justify-between text-lg text-gray-900">
            <CartItemQuantity
              id={id}
              quantity={quantity}
              price={price}
              title={title}
              thumbnail={thumbnail}
            />
            <p className="ml-4 font-bold">${totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-4" />
    </div>
  );
};

export default CartItem;
