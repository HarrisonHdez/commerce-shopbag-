import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Link } from 'react-scroll';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

const NavBar = () => {
  const cartItemsCount = useSelector((state: RootState) => state.cart.items.length);

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
        <div className="flex items-center space-x-8">
          {/* Agregar margen a la derecha para separar los enlaces */}

          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white flex items-center text-lg"
          > Home</Link>
          <Link
            activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white flex items-center text-lg"
          > Products</Link>

          <Link to="products" className="text-white flex items-center">
            <FaShoppingCart className="mr-2" size={24} />
            {/* Mostrar el contador de productos en el carrito si es mayor que cero */}
            {cartItemsCount > 0 && (
              <div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
