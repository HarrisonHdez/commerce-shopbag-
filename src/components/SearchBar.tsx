"use client"

import React, { useState, useEffect } from 'react';

interface Product {
    id: number;
    title: string;
}

interface SearchBarProps {
    products: Product[];
    onSearch: (results: Product[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ products, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState<Product[]>([]);

    useEffect(() => {
        const newFilteredResults = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Comparar los resultados filtrados antiguos y nuevos
        if (JSON.stringify(filteredResults) !== JSON.stringify(newFilteredResults)) {
            setFilteredResults(newFilteredResults);
            onSearch(newFilteredResults);
        }
    }, [searchTerm, products, filteredResults, onSearch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="relative flex justify-center">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="px-2 py-1 rounded-md border border-purple-700 mr-2"
            />
        </div>
    );
};

export default SearchBar;
