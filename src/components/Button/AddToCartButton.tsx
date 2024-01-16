import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import { useAddToCart } from '../../hooks/useCartActions';

const AddToCart = ({
  id,
  price,
  title,
  thumbnail,
}: {
  id: string;
  price: number;
  title: string;
  thumbnail: string;
}) => {
  const addToCartHandler = useAddToCart();

  return (
    <Button onClick={() => addToCartHandler({ id, price, title, thumbnail })}>
      <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
      Add to cart
    </Button>
  );
};

export default AddToCart;
