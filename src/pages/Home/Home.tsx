import React from 'react';
import AboutUs from '../../components/About/AboutUs';
import ProductList from '../../components/Products/ProductList';

export default function Home() {
  return (
    <>
      <ProductList />
      <AboutUs />
    </>
  );
}
