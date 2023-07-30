import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex items-center justify-center p-5 bg-[#6D00DB] text-white footer">
            <p>All rights reserved - Shop Bag; {currentYear}</p>
        </div>
    );
};

export default Footer;