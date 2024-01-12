import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../components/Loading';
import Rating from '../../components/Products/Rating';
import AddToCart from '../../components/Products/AddToCart';

function ProductItem() {
  const { id } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () =>
      await axios.get(`https://dummyjson.com/products/${id}`),
  });

  if (isLoading) return <Loading />;

  return (
    <div className="my-20">
      {product && (
        <div className="flex flex-col md:flex-row md:space-x-14">
          <div className="w-full my-8">
            <img
              className="w-full rounded-xl"
              src={product.data.thumbnail}
              alt={product.data.title}
            />
          </div>
          <div className="w-full my-8">
            <div className="space-y-8">
              <div className="flex flex-col">
                <p className="bg-red-100 mb-4 border text-center border-red-500 rounded-xl text-primary text-sm poppins px-4 mt-2 w-fit">
                  {product.data.category}
                </p>
                <h1 className="text-4xl font-bold">{product.data.title}</h1>
              </div>
              <div>
                <p className="text-xl">{product.data.description}</p>
                <Rating rating={product.data.rating} />
              </div>
              <div>
                <p className="text-3xl font-bold">£{product.data.price}</p>
              </div>
              <AddToCart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
