"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial scroll position immediately
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-opacity duration-700 flex flex-col items-center ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className="animate-bounce text-white drop-shadow-lg bg-black/20 p-2 rounded-full backdrop-blur-sm">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}
