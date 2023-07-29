
import Image from 'next/image';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface CardProps {
    title: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
}

const Card: React.FC<CardProps> = ({ title, description, price, currency, image, rating }) => {
    return (
        <div className="max-w-[320px] border border-gray-300 rounded">
            <img src={image} alt={title} className="w-full h-300 object-cover rounded-t" />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <p className="text-green-600 font-bold mt-2">
                    Price: {price} {currency}
                </p>
                <p className="text-yellow-500 font-bold">Rating: {rating}</p>

                <Image
                    width={60}
                    height={60}
                    priority={true}
                    src="/svg/addcart.svg"
                    alt="add to cart"
                />
            </div>
        </div>

    );
};

export default Card;
