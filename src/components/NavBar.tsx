import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Link } from 'react-scroll';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import { CartItem } from '@/redux/features/cartSlice';

const calculateCartTotal = (items: CartItem[]): { totalQuantity: number; totalPrice: number } => {
  let totalQuantity = 0;
  let totalPrice = 0;

  for (const item of items) {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  }

  totalPrice = Number(totalPrice.toFixed(2));

  return { totalQuantity, totalPrice };
};

const NavBar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { totalQuantity, totalPrice } = calculateCartTotal(cartItems);

  return (
    <nav className="bg-[#6D00DB] fixed top-0 left-0 w-full shadow-lg py-4 z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Image
          width={1}
          height={1}
          src="svg/logo1.svg"
          alt="logo"
          priority={true}
          className="logo"
        />


        <div className="flex flex-col items-end sm:flex-row sm:items-center sm:space-x-3">
          <Link to="products" className="text-white flex items-center">
            <FaShoppingCart className="mr-2" size={24} />
            {totalQuantity > 0 && (
              <div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </div>
            )}
          </Link>

          <div className="text-white sm:self-end">
            Total: {totalPrice}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;