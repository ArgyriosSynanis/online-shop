import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { ProductItem } from '../types/Product.types';

export const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCartHandler = ({ id, price, title, thumbnail }: ProductItem) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
        thumbnail,
      })
    );
  };

  return addToCartHandler;
};

export const useRemoveFromCart = () => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (id: string) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return removeFromCartHandler;
};
