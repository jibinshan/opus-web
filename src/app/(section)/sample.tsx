"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const imageSrc = "/images/home/hero/hero.png"; // Replace with your image path
const slideInterval = 3000; // Auto-slide interval (3 seconds)

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideNext = () => {
        setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
    };

    const slidePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1));
    };

    // useEffect(() => {
    //     const interval = setInterval(slideNext, slideInterval);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 z-10 flex justify-between p-4">
                <button onClick={slidePrev} className="bg-gray-800 text-white px-4 py-2">◀</button>
                <button onClick={slideNext} className="bg-gray-800 text-white px-4 py-2">▶</button>
            </div>
            <div className="flex w-full h-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {[0, 1, 2].map((index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <Image
                            src={imageSrc}
                            alt={`Image part ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            style={{ objectPosition: `${index * 33.33}% center` }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

