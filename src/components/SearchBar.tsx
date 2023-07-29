"use client"
// import React, { useState, useEffect, useMemo } from 'react';
// import { ProductData } from './Products';

// export interface SearchBarProps {
//   products: ProductData[];
//   onSearch: (results: ProductData[]) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ products, onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredResults, setFilteredResults] = useState<ProductData[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedPrice, setSelectedPrice] = useState('');

//   const categories = useMemo(() => {
//     // Extraer las categorías únicas de los productos
//     const uniqueCategories = [...new Set(products.map((product) => product.category))];
//     return uniqueCategories;
//   }, [products]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(e.target.value);
//   };

//   const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedPrice(e.target.value);
//   };

//   useEffect(() => {
//     const filteredBySearch = products.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const filteredByCategory = selectedCategory
//       ? filteredBySearch.filter((product) => product.category === selectedCategory)
//       : filteredBySearch;

//     const filteredByPrice = selectedPrice
//       ? filteredByCategory.filter((product) => product.price <= Number(selectedPrice))
//       : filteredByCategory;

//     setFilteredResults(filteredByPrice);
//     onSearch(filteredByPrice);
//   }, [products, searchTerm, selectedCategory, selectedPrice, onSearch]);

//   return (
//     <div className="max-w-md mx-auto pb-10">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={handleInputChange}
//         className="w-full px-2 py-1 rounded-md border border-purple-700 mb-2"
//       />

//       <select
//         value={selectedCategory}
//         onChange={handleCategoryChange}
//         className="w-full px-2 py-1 rounded-md border border-purple-700 mb-2"
//       >
//         <option value="">All categories</option>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>

//       <select
//         value={selectedPrice}
//         onChange={handlePriceChange}
//         className="w-full px-2 py-1 rounded-md border border-purple-700"
//       >
//         <option value="">All prices</option>
//         <option value="50">Up to $50</option>
//         <option value="100">Up to $100</option>
//         <option value="200">Up to $200</option>
//         <option value="500">Up to $500</option>
//       </select>
//     </div>
//   );
// };

// export default SearchBar;


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
