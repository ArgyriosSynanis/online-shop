import React, { useEffect, useState } from 'react';
import FoodItem from './Product';
import axios from 'axios';
import Loading from '../Loading';
import useDebounce from '../../hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';

export type ProductItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock?: number;
  brand?: string;
  category: string;
  thumbnail: string;
  images?: Array<string>;
};

const ProductList = () => {
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(6);
  const [showLoadButton, setShowLoadButton] = useState(true);
  const debounceSearch = useDebounce(search, 200);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', debounceSearch, limit],
    queryFn: async () =>
      await axios.get(
        `https://dummyjson.com/products/search?q=${debounceSearch}&page=1&limit=${limit}`
      ),
  });

  const handleLoadMore = () => {
    setLimit((prev) => prev + 6);
  };

  // Hide the load more button when the limit is greater than or equal to the total number of products
  useEffect(() => {
    const total = products && products.data.total;
    if (limit >= total) {
      setShowLoadButton(false);
    } else {
      setShowLoadButton(true);
    }
  }, [limit, products]);

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="rounded-full p-1 box-border border border-primary mt-8 bg-white sm:w-96 w-full flex items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" rounded-full p-2 focus:outline-none w-full bg-transparent"
          placeholder="Search here..."
        />
      </div>
      {isLoading && <Loading />}
      {products && products.data.products.length === 0 && (
        <p className="text-center text-2xl poppins mt-12">
          No products found...
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {products &&
          products.data.products.map((item: ProductItem) => (
            <FoodItem
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              description={item.description}
              category={item.category}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>

      <div className="text-center">
        {showLoadButton && (
          <button
            onClick={handleLoadMore}
            className="bg-primary text-2xl text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductList;
