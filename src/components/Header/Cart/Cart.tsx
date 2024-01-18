import React from 'react';
import { useDispatch } from 'react-redux';
import { RootState, uiActions } from '../../../store/ui-slice';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import CartEmpty from './CartEmpty';

const Cart = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            data-testId="cart"
            className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={toggleCartHandler}
                        data-testId="close-cart-button"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {cartItems.length === 0 && (
                    <CartEmpty toggleCartHandler={toggleCartHandler} />
                  )}
                  {cartItems &&
                    cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        quantity={item.quantity}
                        price={item.price}
                        thumbnail={item.thumbnail}
                        description={item.description}
                        totalPrice={item.totalPrice}
                        toggleCartHandler={toggleCartHandler}
                      />
                    ))}
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p className="text-lg font-bold">£{cartTotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                      Checkout
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500 space-x-2">
                    <p>or</p>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={toggleCartHandler}
                      data-testId="continue-shopping-button"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
