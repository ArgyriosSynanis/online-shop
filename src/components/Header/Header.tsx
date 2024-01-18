import React from 'react';
import { RootState } from '../../store/ui-slice';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Cart from './Cart/Cart';
import Button from '../Button/Button';
import CartButton from './Cart/CartButton';

const Header = () => {
  const cartIsVisible = useSelector(
    (state: RootState) => state.ui.cartIsVisible
  );

  return (
    <header
      data-testId="header"
      className="fixed z-50 top-0 left-0 w-full transition duration-500 bg-white"
    >
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 ">
        <div className="flex flex-grow ">
          <Link to="/">
            <img
              className="sm:w-40 w-28 py-4 cursor-pointer"
              src={logo}
              alt="Red Onion Logo"
              data-testId="logo"
            />
          </Link>
        </div>
        <div className="relative">
          <div className="flex items-center justify-end sm:space-x-6 space-x-4 py-4">
            <div data-testId="sign-in-button">
              <Button>Sign in</Button>
            </div>
            <div data-testId="cart-button">
              <CartButton />
            </div>
          </div>
          {cartIsVisible && <Cart />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
