import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import SearchBar from './SearchBar';

const NavBar = () => {
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
          <Link href="/" className="text-white flex items-center text-lg">
            Home
          </Link>
          <Link href="/products" className="text-white flex items-center text-lg">
            Products
          </Link>
          <Link href="/cart" className="text-white flex items-center">
            <FaShoppingCart className="mr-2" size={24}/>
          </Link>
          {/* Agregar aquí el contador de productos en el carrito si es necesario */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;








