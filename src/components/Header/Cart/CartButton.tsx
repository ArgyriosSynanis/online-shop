import React from 'react';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, uiActions } from '../../../store/ui-slice';

const CartButton = () => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Button onClick={toggleCartHandler} bgColor="secondary">
      <p>My cart</p>
      <p className="bg-white text-indigo-600 px-2 rounded-md">{cartQuantity}</p>
    </Button>
  );
};

export default CartButton;
