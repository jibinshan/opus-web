"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Advantages {
	photoUrl: string;
	title: string;
	description: string;
}

const items: Advantages[] = [
	{
		photoUrl: "/images/home/automate/1.png",
		title: "Smart Lighting",
		description:
			"Create the perfect ambiance for every moment with intelligent  lighting systems that adjust to your preferences.",
	},
	{
		photoUrl: "/images/home/automate/2.png",
		title: "Seamless Integration with Your Lifestyle",
		description:
			"Effortlessly connect and control all your smart devices to match your unique daily routines and preferences.",
	},
	{
		photoUrl: "/images/home/automate/3.png",
		title: "Climate Control",
		description:
			"Maintain the ideal temperature with automated thermostats  and integrated air conditioning systems.",
	},
	{
		photoUrl: "/images/home/automate/4.png",
		title: "Security Automation",
		description:
			"Stay connected with real-time monitoring and automated alarms designed to keep your family safe.",
	},
	{
		photoUrl: "/images/home/automate/5.png",
		title: "Voice and App Integration",
		description:
			" Control your home effortlessly using voice assistants or our user- friendly mobile app.",
	},
	{
		photoUrl: "/images/home/automate/6.png",
		title: "Home Entertainment",
		description:
			" Enjoy seamless control over your TVs, speakers, and other entertainment devices.",
	},
];

const AutomateRes = ({}) => {
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
				setCurrentIndex((prevIndex) =>
					prevIndex === items.length - 1 ? 0 : prevIndex + 1
				);
			}, 3000);
		}

		return () => {
			if (autoPlayRef.current) {
				clearInterval(autoPlayRef.current);
			}
		};
	}, [isAutoPlaying]);

	const handleNext = () => {
		stopAutoPlay();
		setCurrentIndex((prevIndex) =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		stopAutoPlay();
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		);
	};

	return (
		<section className="w-full flex flex-col justify-center items-center py-12 md:py-24 px-4 bg-[#f7f7f7]">
			<div className="w-full max-w-[1300px] flex flex-col">
				<div className="w-full flex flex-col gap-3 justify-center items-center">
					{/* <p
						className="font-[800] text-3xl font-inter text-center"
						style={{
							background: "linear-gradient(180deg, #FFF 0%, #4B3274 33.5%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							color: "transparent",
						}}
					>
						Your Smart Home, Your Way
					</p> */}
					<motion.p
						className="font-[800] text-3xl font-inter text-center"
						style={{
							background: "linear-gradient(180deg, #FFF 0%, #4B3274 33.5%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							color: "transparent",
						}}
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
						viewport={{ once: false }}
					>
						Your Smart Home, Your Way
					</motion.p>
					<p className="text-[#09060E] font-open.sans font-[600] text-sm text-center">
						{" "}
						Automate Every Corner of Your Home with Opus
					</p>
				</div>
				<div className="w-full flex flex-col items-center justify-center gap-3">
					<div className="w-full pt-9 pb-3 flex flex-col gap-5 justify-center items-center">
						<div className="w-full flex justify-center items-center gap-3">
							<div
								className={cn(
									"py-1 px-2 rounded-full bg-[#c3c3c3] transition-all duration-500 ease-out",
									currentIndex === 0 && "px-4 bg-[#a484e3]"
								)}
								onClick={() => {
									stopAutoPlay();
									setCurrentIndex(0);
								}}
							></div>
							<div
								className={cn(
									"py-1 px-2 rounded-full bg-[#c3c3c3] transition-all duration-500 ease-out",
									currentIndex === 1 && "px-4 bg-[#a484e3]"
								)}
								onClick={() => {
									stopAutoPlay();
									setCurrentIndex(1);
								}}
							></div>
							<div
								className={cn(
									"py-1 px-2 rounded-full bg-[#c3c3c3] transition-all duration-500 ease-out",
									currentIndex === 2 && "px-4 bg-[#a484e3]"
								)}
								onClick={() => {
									stopAutoPlay();
									setCurrentIndex(2);
								}}
							></div>
							<div
								className={cn(
									"py-1 px-2 rounded-full bg-[#c3c3c3] transition-all duration-500 ease-out",
									currentIndex === 3 && "px-4 bg-[#a484e3]"
								)}
								onClick={() => {
									stopAutoPlay();
									setCurrentIndex(3);
								}}
							></div>
							<div
								className={cn(
									"py-1 px-2 rounded-full bg-[#c3c3c3] transition-all duration-500 ease-out",
									currentIndex === 4 && "px-4 bg-[#a484e3]"
								)}
								onClick={() => {
									stopAutoPlay();
									setCurrentIndex(4);
								}}
							></div>
							<div
								className={cn(
									"py-1 px-2 rounded-full bg-[#c3c3c3] transition-all duration-500 ease-out",
									currentIndex === 5 && "px-4 bg-[#a484e3]"
								)}
								onClick={() => {
									stopAutoPlay();
									setCurrentIndex(5);
								}}
							></div>
						</div>
						<div className="relative w-full h-[300px] flex gap-0 overflow-hidden">
							{items.map((item, index) => (
								<div
									key={index}
									className={cn(
										"absolute top-0 left-0 w-full h-full flex flex-col gap-8 justify-start items-center transition-all duration-500 ease-out",
										currentIndex === index
											? "opacity-100 translate-x-0"
											: currentIndex > index
											? "opacity-0 translate-x-[-50px]"
											: "opacity-0 translate-x-[50px]"
									)}
								>
									<div className="relative">
										<Image
											src={item?.photoUrl}
											width={387}
											height={265}
											alt="automate"
										/>
										<div className="absolute w-full h-fit bg-white/30 backdrop-blur-lg border-[1px] border-white z-20 -bottom-14 rounded-3xl px-6 py-3 flex flex-col justify-center items-center gap-2">
											<p className="text-center text-[#09060E] text-base font-[700]">
												{item?.title}
											</p>
											<p className="text-center text-xs">{item?.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="mt-0 flex w-full items-center justify-center gap-4">
							<button
								onClick={handlePrev}
								className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6b2fe4] transition-transform hover:scale-110"
								aria-label="Previous slide"
							>
								<ArrowLeft className="h-5 w-5 text-[#6b2fe4]" />
							</button>
							<button
								onClick={handleNext}
								className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6b2fe4] transition-transform hover:scale-110"
								aria-label="Next slide"
							>
								<ArrowRight className="h-5 w-5 text-[#6b2fe4]" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AutomateRes;
