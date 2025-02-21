'use client'
import Image from "next/image"
import { useEffect, useState } from "react";


const TrustedPartner = ({ }) => {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating((prev) => !prev);
        }, 2000); // Restart animation every 2 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative w-full h-full px-4 md:px-[130px] pt-24 pb-32 flex flex-col gap-12">
            <div className="absolute w-full h-full left-0 top-0 flex flex-col gap-12">
                <div className="w-full flex justify-center">
                    <Image
                        src='/images/home/partner/arrowline1.png'
                        width={747}
                        height={251}
                        alt="arrowline"
                        className="h-[141px] w-[650px] -ml-[519px]"
                    />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="598" height="201" viewBox="0 0 598 201" fill="none" className="h-[141px] w-[650px] -ml-[519px]">
                        <path d="M242.5 198.041L237.5 195.154V200.928L242.5 198.041ZM596.5 0V54.9923H597.5V0H596.5ZM577 74.4923H21V75.4923H577V74.4923ZM0.5 94.9923V178.041H1.5V94.9923H0.5ZM21 198.541H238V197.541H21V198.541ZM0.5 178.041C0.5 189.363 9.67816 198.541 21 198.541V197.541C10.2304 197.541 1.5 188.811 1.5 178.041H0.5ZM21 74.4923C9.67817 74.4923 0.5 83.6705 0.5 94.9923H1.5C1.5 84.2227 10.2305 75.4923 21 75.4923V74.4923ZM596.5 54.9923C596.5 65.7618 587.77 74.4923 577 74.4923V75.4923C588.322 75.4923 597.5 66.3141 597.5 54.9923H596.5Z" fill="#6B2FE4" />
                    </svg> */}
                </div>

            </div>
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <div className="relative">
                    <p className="text-6xl text-center font-inter font-[700]"
                        style={{
                            background: 'linear-gradient(180deg, #6B2FE4 34.5%, #A484E3 100%);',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >Your Trusted Partner in<br />Smart Home Automation
                    </p>
                    <div className="absolute w-full top-0 left-0 flex justify-end items-end ml-[168px] mt-[94px]">
                        <Image
                            src='/images/home/partner/arrowline2.png'
                            width={722}
                            height={270}
                            alt="arrowline"
                            className="h-[210px] w-[550px]"
                        />
                    </div>
                </div>
                <p className="text-center text-[#09060E] font-open.sans font-[500] text-sm max-w-[850px]">
                    Opus RMT Systems is your gateway to the future of home automation. Our mission is to make your life more convenient, energy-efficient, and enjoyable through  innovative technology tailored to your lifestyle. With Opus, your home becomes  smarter, more comfortable, and seamlessly connected.
                </p>
            </div>
            <div className="w-full flex justify-center items-center gap-5">
                <div className="w-1/3 flex flex-col gap-10">
                    <div className="w-full flex justify-end">
                        <div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
                            <Image
                                src="/images/home/partner/2.png"
                                width={175}
                                height={120}
                                alt="2"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-start">
                        <div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
                            <Image
                                src="/images/home/partner/1.png"
                                width={129}
                                height={87}
                                alt="2"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-1/3 flex justify-center items-center">
                    <div className="p-2 border-[3px] border-[#62381a] rounded-2xl mt-[55px]">
                        <Image
                            src="/images/home/partner/3.png"
                            width={344}
                            height={234}
                            alt="2"
                            className="rounded-2xl"
                        />
                    </div>
                </div>

                <div className="w-1/3 flex flex-col gap-10">
                    <div className="w-full flex justify-end">
                        <div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
                            <Image
                                src="/images/home/partner/5.png"
                                width={129}
                                height={87}
                                alt="2"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-start">
                        <div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
                            <Image
                                src="/images/home/partner/4.png"
                                width={175}
                                height={120}
                                alt="2"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end">
                <Image
                    src="/images/home/partner/arrowline3.png"
                    width={6}
                    height={137}
                    alt="3"
                    className="h-[130px]"
                />
            </div>
        </section >
    )
}

export default TrustedPartner