'use client';

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query); // Call the onSearch function passed as a prop
    };

    return (
        <form onSubmit={handleSubmit} className="flex text-black">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search Creator/Product"
                className="md:w-[290px] md:h-[45px] rounded-[25px] border border-gray-300 md:p-2" // Tailwind styles
            />
        </form>
    );
};

export default SearchBar;
