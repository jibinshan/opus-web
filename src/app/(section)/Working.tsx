"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Working = ({}) => {
	return (
		<section className="w-full h-fit md:h-[100vh] flex flex-col md:flex-row justify-center items-center">
			<div className="w-full md:w-2/5 h-full bg-[#ece4f8] flex flex-col justify-center items-center gap-4 pt-12">
				<p className="w-full text-center capitalize text-[#09060E] text-3xl md:text-4xl font-[800] font-inter">
					How It Works
				</p>
				<Image
					src="/images/home/working/working.png"
					width={399}
					height={400}
					alt="working"
					className="w-9/12 md:w-[399px]"
				/>
				<p className="w-full text-[#09060E] font-open.sans text-sm md:text-lg text-center font-[600] capitalize tracking-[1px]">
					Transform Your Home in 3 Easy Steps
				</p>
			</div>
			<div className="relative w-full md:w-3/5 h-full flex">
				<div className="absolute md:static w-3/12 md:w-2/12 h-full bg-[#ece4f8]" />
				<div className="absolute block md:hidden w-full h-1/12 bg-[#ece4f8]" />
				{/* <div className="absolute w-9/12 right-0 md:left-0 md:w-full h-full z-30 flex items-end justify-center md:justify-end max-w-[770px] py-3 md:py-6 md:pr-24 pr-4">
                    <Link href='#' className="flex justify-center items-center text-[#6B2FE4] gap-1 font-[600] font-open.sans text-sm md:text-base">
                        <span>Start Your Automation Journey </span>
                        <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                    </Link>
                </div> */}
				<motion.div
					className="absolute w-9/12 right-0 md:left-0 md:w-full h-full z-30 flex items-end justify-center md:justify-end max-w-[770px] py-3 md:py-6 md:pr-24 pr-4"
					animate={{ x: [-10, 10, -10] }}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "mirror",
						ease: "easeInOut",
					}}
				>
					<Link
						href="#"
						className="flex justify-center items-center text-[#6B2FE4] gap-1 font-[600] font-open.sans text-sm md:text-base"
					>
						<span>Start Your Automation Journey</span>
						<ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
					</Link>
				</motion.div>

				<div className="md:absolute w-full h-full z-20 flex flex-col gap-2 md:gap-8 items-start justify-center pl-6 md:pl-0 pt-6 pb-12 md:py-24 pr-4">
					<div className="p-[14px] md:p-[20px] bg-[#f8f6f9] rounded-[40px]">
						<div className="bg-[#ece4f8] py-6 px-6 rounded-[30px]">
							<p className="text-[#E03333] font-open.sans text-xl md:text-2xl font-[600] capitalize">
								Connect
							</p>
							<p className="text-sm md:text-base font-open.sans font-[200] md:max-w-[600px]">
								Get started with our smart home ecosystem, designed for quick
								and seamless integration with your existing appliances and
								devices.
							</p>
						</div>
					</div>
					<div className="p-[14px] md:p-[20px] bg-[#f8f6f9] rounded-[40px]">
						<div className="bg-[#ece4f8] py-6 px-6 rounded-[30px]">
							<p className="text-[#FFB800] font-open.sans text-xl md:text-2xl font-[600] capitalize">
								Customize
							</p>
							<p className="text-sm md:text-base font-open.sans font-[200] max-w-[600px]">
								Tailor automation settings to fit your lifestyle. From setting
								schedules to defining moods, itʼs all in your hands.
							</p>
						</div>
					</div>
					<div className="p-[14px] md:p-[20px] bg-[#f8f6f9] rounded-[40px]">
						<div className="bg-[#ece4f8] py-6 px-6 rounded-[30px]">
							<p className="text-[#057C2D] font-open.sans text-xl md:text-2xl font-[600] capitalize">
								Control
							</p>
							<p className="text-sm md:text-base font-open.sans font-[200] max-w-[600px]">
								Manage your entire home with ease using our Opus mobile app or
								voice assistants, no matter where you are.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Working;
