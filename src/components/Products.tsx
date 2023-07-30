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
  category: string;
}


const Products = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://my-json-server.typicode.com/HarrisonHdez/data/products'
        );
        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (
    results: ProductData[],
    selectedCategory?: string | null,
    selectedPriceFilter?: string | null
  ) => {
    let filteredResults = results;

    // Apply category filter
    if (selectedCategory) {
      filteredResults = filteredResults.filter((product) => product.category === selectedCategory);
    }

    // Apply price filter
    if (selectedPriceFilter === 'above500') {
      filteredResults = filteredResults.filter((product) => product.price > 500);
    } else if (selectedPriceFilter === 'below100') {
      filteredResults = filteredResults.filter((product) => product.price < 100);
    }

    setFilteredProducts(filteredResults);
    setShowNoResultsMessage(filteredResults.length === 0);
  };

  return (
    <section className="p-8 animate__animated animate__fadeIn" id="products" style={{ paddingBottom: '200px' }}>
      <h2 className="text-center text-purple-800 text-4xl font-bold pb-16">Products</h2>

      <SearchBar products={products} onSearch={handleSearch} />

      {showNoResultsMessage ? (
        <p className="text-red-500 flex justify-center items-center h-full">No results found. Please try a different search term.</p>

      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                currency={product.currency}
                image={product.image}
                rating={product.rating}
              />
            ))
            }
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;


