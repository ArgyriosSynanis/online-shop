import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Product from '../../components/Products/Product';
import Loading from '../../components/Loading';

function ProductItem() {
  const { id } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () =>
      await axios.get(`https://dummyjson.com/products/${id}`),
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      {product && (
        <Product
          key={product.data.id}
          id={product.data.id}
          thumbnail={product.data.thumbnail}
          title={product.data.title}
          description={product.data.description}
          category={product.data.category}
          price={product.data.price}
          rating={product.data.rating}
        />
      )}
    </div>
  );
}

export default ProductItem;
