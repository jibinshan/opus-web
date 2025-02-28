"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface reviewstype {
	imageurl: string;
	des: string;
	name: string;
}

const reviews: reviewstype[] = [
	{
		imageurl: "/images/home/review/3.png",
		des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
		name: "Sarah D.",
	},
	{
		imageurl: "/images/home/review/2.png",
		des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
		name: "Sarah D.",
	},
	{
		imageurl: "/images/home/review/1.png",
		des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
		name: "Sarah D.",
	},
	{
		imageurl: "/images/home/review/3.png",
		des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
		name: "Sarah D.",
	},
	{
		imageurl: "/images/home/review/2.png",
		des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
		name: "Sarah D.",
	},
	{
		imageurl: "/images/home/review/2.png",
		des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
		name: "Sarah D.",
	},
	{
		imageurl: "/images/home/review/2.png",
		des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
		name: "Sarah D.",
	},
];

const Review = ({}) => {
	const arraylength = Math.ceil(reviews.length / 3);
	const reviewsPerSlide = 3;
	return (
		<section className="w-full h-fit flex flex-col gap-12 justify-center items-center px-4 md:px-[130px] py-8">
			<div className="w-full flex flex-col gap-2 justify-center items-center">
				{/* <p
					className="font-open.sans text-4xl text-center font-[700]"
					style={{
						background: "linear-gradient(180deg, #FFF 0%, #4B3274 33.5%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
						color: "transparent",
					}}
				>
					What Our Customers Say
				</p> */}
				<motion.p
					className="font-open.sans text-4xl text-center font-[700]"
					style={{
						background: "linear-gradient(180deg, #FFF 0%, #4B3274 33.5%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
						color: "transparent",
					}}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.5 }}
				>
					What Our Customers Say
				</motion.p>

				<p className="text-[#09060E] font-open.sans text-sm text-center">
					Discover what our satisfied customer have to say about their
					experiences with our products/services
				</p>
			</div>
			<Carousel className="w-full max-w-xs">
				<CarouselContent>
					{Array.from({ length: arraylength }).map((_, index) => {
						const start = index * reviewsPerSlide;
						const end = start + reviewsPerSlide;
						const slicedReviews = reviews?.slice(start, end) || [];
						return (
							<CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
								<div className="p-1 flex flex-col gap-2">
									{slicedReviews?.map((item, i) => (
										<Card
											style={{
												background:
													"linear-gradient(180deg, #FFF 0%,  #A484E3 100%)",
											}}
											className="w-full rounded-4xl border-[1px] border-[#E7E5E5]"
											key={i}
										>
											<CardContent className="w-full flex items-center justify-between py-4 px-4 gap-6">
												<Image
													src={item?.imageurl}
													width={188}
													height={190}
													alt="review"
													className="w-1/4 rounded-full"
												/>
												<div className="flex flex-col gap-2">
													<p className="text-[#09060E] font-open.sans max-w-[400px] text-center text-xs">
														{item?.des}
													</p>
													<p className="text-sm text-[#09060E] font-open.sans text-center font-[700]">
														{item?.name}
													</p>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<div className="w-full flex justify-center items-center gap-5 mt-14">
					<CarouselPrevious className="static hover:scale-[1.1] transition-all ease-in duration-200" />
					<CarouselNext className="static hover:scale-[1.1] transition-all ease-in duration-200" />
				</div>
			</Carousel>
		</section>
	);
};

export default Review;
