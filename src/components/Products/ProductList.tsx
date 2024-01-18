import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import Loading from '../Loading';
import useDebounce from '../../hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import Button from '../Button/Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductItem } from '../../types/Product.types';

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

  useEffect(() => {
    const total = products && products.data.total;
    if (limit >= total) {
      setShowLoadButton(false);
    } else {
      setShowLoadButton(true);
    }
  }, [limit, products]);

  return (
    <section className="my-12 max-w-screen-xl mx-auto md:px-6">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-300" />
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50"
            placeholder="Search phones, laptops..."
          />
        </div>
      </form>
      {products && products.data.products.length === 0 && (
        <p className="text-center text-2xl poppins mt-12">
          No products found...
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {products &&
          products.data.products.map((item: ProductItem) => (
            <Product
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
        {isLoading && <Loading />}
      </div>

      <div className="flex justify-center mt-14">
        {showLoadButton && (
          <Button
            onClick={handleLoadMore}
            bgColor="secondary"
            textSize="text-2xl"
          >
            Load more
          </Button>
        )}
      </div>
    </section>
  );
};

export default ProductList;
