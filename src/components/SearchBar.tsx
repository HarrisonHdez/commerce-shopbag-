import React from 'react'

const SearchBar = () => {
    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Search Product..."
                className="bg-white rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
                type="button"
                className="ml-2 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar