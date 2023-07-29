"use client"

import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';

export interface ProductData {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
}

const Products = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
    const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/HarrisonHdez/data/products');
            const productsData = await response.json();
            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (results: ProductData[]) => {
        setFilteredProducts(results);
        setShowNoResultsMessage(results.length === 0);
    };

    return (
        <section className="p-8">
            <h2 className="text-3xl font-semibold mb-6">Our products</h2>
            <SearchBar products={products} onSearch={handleSearch} />
            {showNoResultsMessage ? (
                <p className="text-red-500">No results found. Please try a different search term.</p>
            ) : (
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl">
                        {filteredProducts.map((product) => (
                            <Card
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                currency={product.currency}
                                image={product.image}
                                rating={product.rating}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;
