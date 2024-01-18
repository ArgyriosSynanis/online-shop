import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import { useAddToCart } from '../../hooks/useCartActions';
import { ProductItem } from '../../types/Product.types';

const AddToCart = ({ id, price, title, thumbnail }: ProductItem) => {
  const addToCartHandler = useAddToCart();

  return (
    <Button onClick={() => addToCartHandler({ id, price, title, thumbnail })}>
      <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
      Add to cart
    </Button>
  );
};

export default AddToCart;
