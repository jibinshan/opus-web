'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";

const imageSrc = "/images/home/hero/hero.png"; // Replace with your image path
const slideInterval = 3000; // Auto-slide interval (3 seconds)

const HeroRes = ({ }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const stopAutoPlay = () => {
        setIsAutoPlaying(false);
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
            }, 3000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying])

    const slideNext = () => {
        setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
    };

    const slidePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1));
    };

    return (
        <section className="relative w-full pt-24 pb-24 flex flex-col">
            <div className="relative w-full flex flex-col justify-center items-center px-4">
                <p className="text-black font-[800] font-inter text-xl text-center">Seamless Living,</p>
                <p className="text-black font-[800] font-inter text-3xl text-center">Smartly <span className="text-[#6B2FE4]">Automated</span></p>
                <div className="w-full flex justify-center items-center gap-3 pt-3">
                    <Button className="bg-[#6B2FE4] text-white font-inter font-[500] flex justify-center items-center py-2 px-5 rounded-full text-xs">
                        <Image
                            src='/images/home/hero/explore.png'
                            width={24}
                            height={24}
                            alt="explore"
                            className="w-[15px] h-[15px]"
                        />
                        <span>Explore Features</span>
                    </Button>
                    <Button className="text-black font-inter font-[500] flex justify-center items-center py-2 px-5 rounded-full border-black text-xs" variant='outline'>
                        Speak To An Expert
                    </Button>
                </div>
            </div>

            <div className="relative w-full pt-4 px-3 mx-1 rounded-t-4xl shadow-lg mt-8 z-30"
                style={{
                    background: 'linear-gradient(180deg, rgba(164, 132, 227, 0.30) 0%, rgba(164, 132, 227, 0.00) 100%)'
                }}
            >
                <div className="relative w-full h-fit overflow-hidden">
                    <div className="flex w-full h-[400px] transition-normal duration-75" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {[0, 1, 2].map((index) => (
                            <div key={index} className="w-full h-full flex-shrink-0 relative">
                                <Image
                                    src={imageSrc}
                                    alt={`Image part ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ objectPosition: `${index * 33.33}% center` }}
                                    className="rounded-t-4xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative w-full flex justify-start items-center bg-transparent gap-2 mt-3 px-4 z-30">
                <div className={cn("py-1 px-2 rounded-full bg-[#a484e3] transition-all duration-500 ease-out", currentIndex === 0 && "px-4 bg-[#a484e3]")}
                    onClick={() => {
                        stopAutoPlay()
                        setCurrentIndex(0)
                    }}></div>
                <div className={cn("py-1 px-2 rounded-full bg-[#a484e3] transition-all duration-500 ease-out", currentIndex === 1 && "px-4 bg-[#a484e3]")}
                    onClick={() => {
                        stopAutoPlay()
                        setCurrentIndex(1)
                    }}></div>
                <div className={cn("py-1 px-2 rounded-full bg-[#a484e3] transition-all duration-500 ease-out", currentIndex === 2 && "px-4 bg-[#a484e3]")}
                    onClick={() => {
                        stopAutoPlay()
                        setCurrentIndex(2)
                    }}></div>
            </div>
            <div className="absolute w-full left-0 bottom-0 flex justify-center">
                <Image
                    src='/images/home/hero/arrowdown.png'
                    width={270}
                    height={152}
                    alt="arrowdown"
                />
            </div>
        </section>
    )
}

export default HeroRes