"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WeOffer = ({ }) => {
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) return null;
	return (
		<section className="w-full h-full flex flex-col gap-6 justify-start items-center py-12 md:py-16 px-4 md:px-[130px]">
			<div className="w-full flex flex-col gap-2 justify-center items-center">
				<p className="font-inter text-4xl md:text-5xl font-[800] text-[#09060E] flex gap-1">
					What We Offer
				</p>
				<p className="font-open.sans text-center text-sm md:text-lg font-[400] text-[#09060E] tracking-[1px]">
					Experience the ease of living with a home that works for you, not the
					other way around.
				</p>
			</div>
			<div className="hidden w-full md:flex flex-col gap-4 justify-center items-center">
				<div className="flex gap-4">
					<div className="relative">
						<Image
							src="/images/home/we-offer/1.png"
							width={1360}
							height={768}
							alt="we-offer"
							className="md:col-span-2 rounded-3xl object-cover h-[400px]"
						/>
						<div className="absolute w-full h-[150px] left-0 bottom-0 flex flex-col justify-center items-center rounded-b-3xl gap-1"
							style={{
								background: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 45.9%, rgba(0, 0, 0, 0.80) 100%)"
							}}
						>
							<p className="w-full text-center font-inter text-white font-[700] text-xl">AI Driven Home Automation</p>
							<p className="w-full text-center text-white text-sm font-open.sans"
								style={{
									fontWeight: "200"
								}}
							>
								Advanced systems that learn your habits and<br />
								preferences to deliver unparalleled comfort and efficiency.
							</p>
						</div>
					</div>
					<div className="relative">
						<Image
							src="/images/home/we-offer/2.png"
							width={1024}
							height={1024}
							alt="we-offer"
							className="rounded-3xl h-[400px] object-cover"
						/>
						<div className="absolute w-full h-[150px] left-0 bottom-0 flex flex-col justify-center items-center rounded-b-3xl gap-1"
							style={{
								background: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 45.9%, rgba(0, 0, 0, 0.80) 100%)"
							}}
						>
							<p className="w-full text-center font-inter text-white font-[700] text-xl"> Remote Control and Monitoring</p>
							<p className="w-full text-center text-white text-sm font-open.sans"
								style={{
									fontWeight: "200"
								}}
							>
								Manage your entire home with a touch,<br />
								whether youʼre on the couch or across the globe.
							</p>
						</div>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="relative">
						<Image
							src="/images/home/we-offer/3.png"
							width={1024}
							height={1024}
							alt="we-offer"
							className="rounded-3xl h-[400px] object-cover"
						/>
						<div className="absolute w-full h-[150px] left-0 bottom-0 flex flex-col justify-center items-center rounded-b-3xl gap-1"
							style={{
								background: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 45.9%, rgba(0, 0, 0, 0.80) 100%)"
							}}
						>
							<p className="w-full text-center font-inter text-white font-[700] text-xl">24/7 Support</p>
							<p className="w-full text-center text-white text-sm font-open.sans"
								style={{
									fontWeight: "200"
								}}
							>
								Our dedicated team is always ready to assist you<br /> in optimizing your smart home experience.
							</p>
						</div>
					</div>
					<div className="relative">
						<Image
							src="/images/home/we-offer/4.png"
							width={1360}
							height={768}
							alt="we-offer"
							className="md:col-span-2 rounded-3xl h-[400px] object-cover"
						/>
						<div className="absolute w-full h-[150px] left-0 bottom-0 flex flex-col justify-center items-center rounded-b-3xl gap-1"
							style={{
								background: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 45.9%, rgba(0, 0, 0, 0.80) 100%)"
							}}
						>
							<p className="w-full text-center font-inter text-white font-[700] text-xl">Customized Solutions for Every Home</p>
							<p className="w-full text-center text-white text-sm font-open.sans"
								style={{
									fontWeight: "200"
								}}
							>
								From integrated smart lighting and<br />
								climate control to home entertainment and beyond, we<br /> create tailored solutions for every need.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col gap-4 justify-center items-center md:hidden">
				<div className="w-full relative">
					<Image
						src="/images/home/we-offer/3.png"
						width={1024}
						height={1024}
						alt="we-offer"
						className="rounded-3xl h-[200px] object-cover"
					/>
					<div className="absolute w-full h-[100px] left-0 bottom-0 flex flex-col justify-center items-center rounded-b-3xl gap-1"
						style={{
							background: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 45.9%, rgba(0, 0, 0, 0.80) 100%)"
						}}
					>
						<p className="w-full text-center font-inter text-white font-[700] text-base">24/7 Support</p>
						<p className="w-full text-center text-white text-xs font-open.sans"
							style={{
								fontWeight: "200"
							}}
						>
							Our dedicated team is always ready to assist you<br /> in optimizing your smart home experience.
						</p>
					</div>
				</div>
				<div className="w-full relative">
					<Image
						src="/images/home/we-offer/2.png"
						width={1024}
						height={1024}
						alt="we-offer"
						className="rounded-3xl h-[200px] object-cover"
					/>
					<div className="absolute w-full h-[100px] left-0 bottom-0 flex flex-col justify-center items-center rounded-b-3xl gap-1"
						style={{
							background: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 45.9%, rgba(0, 0, 0, 0.80) 100%)"
						}}
					>
						<p className="w-full text-center font-inter text-white font-[700] text-base"> Remote Control and Monitoring</p>
						<p className="w-full text-center text-white text-xs font-open.sans"
							style={{
								fontWeight: "200"
							}}
						>
							Manage your entire home with a touch,<br />
							whether youʼre on the couch or across the globe.
						</p>
					</div>
				</div>
				<div className="w-full relative">
					<Image
						src="/images/home/we-offer/1.png"
						width={1360}
						height={768}
						alt="we-offer"
						className="rounded-3xl h-[200px] object-cover"
					/>
					<div className="absolute w-full h-[100px] left-0 bottom-0 flex flex-col justify-center items-center rounded-b-3xl gap-1"
						style={{
							background: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 45.9%, rgba(0, 0, 0, 0.80) 100%)"
						}}
					>
						<p className="w-full text-center font-inter text-white font-[700] text-base">AI Driven Home Automation</p>
						<p className="w-full text-center text-white text-xs font-open.sans"
							style={{
								fontWeight: "200"
							}}
						>
							Advanced systems that learn your habits and<br />
							preferences to deliver unparalleled comfort and efficiency.
						</p>
					</div>
				</div>
				<div className="w-full relative">
					<Image
						src="/images/home/we-offer/4.png"
						width={1360}
						height={768}
						alt="we-offer"
						className="rounded-3xl h-[200px] object-cover"
					/>
					<div className="absolute w-full h-[100px] left-0 bottom-0 flex flex-col justify-center items-center rounded-b-3xl gap-1"
						style={{
							background: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 45.9%, rgba(0, 0, 0, 0.80) 100%)"
						}}
					>
						<p className="w-full text-center font-inter text-white font-[700] text-base">Customized Solutions for Every Home</p>
						<p className="w-full text-center text-white text-xs font-open.sans"
							style={{
								fontWeight: "200"
							}}
						>
							From integrated smart lighting and<br />
							climate control to home entertainment and beyond, we<br /> create tailored solutions for every need.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WeOffer;
