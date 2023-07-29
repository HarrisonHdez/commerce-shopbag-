import React from 'react';

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
        <div className="max-w-[320px] border border-gray-300 rounded p-4">
            <img src={image} alt={title} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-green-600 font-bold mt-2">
                Price: {price} {currency}
            </p>
            <p className="text-yellow-500 font-bold">Rating: {rating}</p>
        </div>
    );
};

export default Card;
