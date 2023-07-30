"use client"

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ProductData } from './Products';

export interface SearchBarProps {
    products: ProductData[];
    onSearch: (
      results: ProductData[],
      selectedCategory: string | null,
      selectedPriceFilter: string | null
    ) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ products, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState<ProductData[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedPriceFilter, setSelectedPriceFilter] = useState<string | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
  
    const newFilteredResults = useMemo(() => {
      return products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [products, searchTerm]);
  
    const onSearchRef = useRef(onSearch);
    useEffect(() => {
      onSearchRef.current(newFilteredResults, selectedCategory, selectedPriceFilter);
    }, [newFilteredResults, selectedCategory, selectedPriceFilter]);
  
    useEffect(() => {
      setFilteredResults(newFilteredResults);
    }, [newFilteredResults]);
  
    useEffect(() => {
      const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
      setCategories(uniqueCategories);
    }, [products]);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(e.target.value === '' ? null : e.target.value); 
    };
  
    const handlePriceFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPriceFilter(e.target.value === '' ? null : e.target.value); 
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

            {/* Category filter */}
            <select
                value={selectedCategory || ''}
                onChange={handleCategoryChange}
                className="w-full px-2 py-1 mt-4 rounded-md border border-purple-700"
            >
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            {/* Price filter */}
            <select
                value={selectedPriceFilter || ''}
                onChange={handlePriceFilterChange}
                className="w-full px-2 py-1 mt-4 rounded-md border border-purple-700"
            >
                <option value="">All Prices</option>
                <option value="below100">Below $100</option>
                <option value="above100">Above $100</option>
                <option value="above200">Above $200</option>
                <option value="above300">Above $300</option>
                <option value="above500">Above $500</option>
            </select>
        </div>
    );
};

export default SearchBar;





