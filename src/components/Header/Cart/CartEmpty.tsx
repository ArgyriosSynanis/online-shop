import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Button/Button';

type CartEmptyProps = {
  toggleCartHandler: () => void;
};

const CartEmpty: React.FC<CartEmptyProps> = ({ toggleCartHandler }) => {
  return (
    <div className="flex flex-col text-center space-y-4 justify-center mt-12">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-6xl text-indigo-600"
      />
      <p className="text-gray-500 text-lg">Your cart is empty</p>
      <div className="max-w-42 mx-auto">
        <Button onClick={toggleCartHandler} bgColor="secondary">
          <p>Continue shopping</p>
        </Button>
      </div>
    </div>
  );
};

export default CartEmpty;
