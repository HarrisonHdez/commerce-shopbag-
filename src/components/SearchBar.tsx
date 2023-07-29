"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { ProductData } from './Products';

export interface SearchBarProps {
    products: ProductData[];
    onSearch: (results: ProductData[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ products, onSearch }) => {


    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState<ProductData[]>([]);

    const newFilteredResults = useMemo(() => {
        return products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    useEffect(() => {
        setFilteredResults(newFilteredResults);
        onSearch(newFilteredResults);
    }, [newFilteredResults, onSearch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="max-w-md mx-auto pb-10">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full px-2 py-1 rounded-md border border-purple-700"
            />
        </div>

    );
};

export default SearchBar;
