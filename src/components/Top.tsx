"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Top = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 600) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <div
                    className="scroll-to-top-button header__float"
                    onClick={scrollToTop}
                >
                    <Image
                        src="/svg/top.svg"
                        alt="Scroll to Top"
                        width={80}
                        height={80}
                    />
                </div>
            )}
        </>
    );
};

export default Top;
