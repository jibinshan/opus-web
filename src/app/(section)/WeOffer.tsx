"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionImage = motion(Image);

const WeOffer = ({}) => {
	const text = "What We Offer";
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) return null;
	return (
		<section className="w-full h-full flex flex-col gap-6 justify-start items-center py-12 md:py-24 px-4 md:px-[130px]">
			<div className="w-full flex flex-col gap-2 justify-center items-center">
				{/* <p className="font-inter text-5xl font-[800] text-[#09060E]">
					What We Offer
				</p> */}
				<p className="font-inter text-4xl md:text-5xl font-[800] text-[#09060E] flex gap-1">
					{text.split("").map((char, index) => (
						<motion.span
							key={index}
							initial={{ y: 0 }}
							animate={{ y: index % 2 === 0 ? -10 : 10 }}
							transition={{
								duration: 0.6,
								ease: "easeInOut",
								repeat: Infinity,
								repeatType: "reverse",
							}}
						>
							{char === " " ? "\u00A0" : char}
						</motion.span>
					))}
				</p>
				<p className="font-open.sans text-center text-sm md:text-lg font-[400] text-[#09060E] tracking-[1px]">
					Experience the ease of living with a home that works for you, not the
					other way around.
				</p>
			</div>
			<div className="hidden w-full md:flex flex-col gap-4 justify-center items-center">
				<div className="flex gap-4">
					<MotionImage
						src="/images/home/we-offer/a.png"
						width={632}
						height={300}
						alt="we-offer"
						className="md:col-span-2"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
						viewport={{ once: false, amount: 0.2 }}
					/>
					<Image
						src="/images/home/we-offer/b.png"
						width={426}
						height={300}
						alt="we-offer"
					/>
				</div>
				<div className="flex gap-4">
					<Image
						src="/images/home/we-offer/c.png"
						width={426}
						height={300}
						alt="we-offer"
					/>
					<Image
						src="/images/home/we-offer/d.png"
						width={632}
						height={300}
						alt="we-offer"
						className="md:col-span-2"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col gap-4 justify-center items-center md:hidden">
				<Image
					src="/images/home/we-offer/mobilea.png"
					width={311}
					height={218}
					alt="we-offer"
					className="w-full"
				/>
				<Image
					src="/images/home/we-offer/mobileb.png"
					width={311}
					height={218}
					alt="we-offer"
					className="w-full"
				/>
				<Image
					src="/images/home/we-offer/mobilec.png"
					width={311}
					height={218}
					alt="we-offer"
					className="w-full"
				/>
				<Image
					src="/images/home/we-offer/mobiled.png"
					width={311}
					height={218}
					alt="we-offer"
					className="w-full"
				/>
			</div>
		</section>
	);
};

export default WeOffer;
