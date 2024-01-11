import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../pages/Home/Home';
import ProductItem from '../pages/Product/ProductItem';

const RoutsWithLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutsWithLayout;
