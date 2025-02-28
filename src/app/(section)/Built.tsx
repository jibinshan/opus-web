"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Built: React.FC = () => {
	return (
		<section className=" w-full h-full px-4 md:px-50 py-6 md:py-12 bg-[#f9f7fa] ">
			<div className="flex relative flex-col gap-6 md:gap-14 bg-[#09060E]  pt-6 pb-0 md:pt-12 md:pb-12 border rounded-4xl ">
				<div className="hidden md:block absolute top-14 right-16">
					{/* <div className="relative">
						<div className="absolute top-0 left-20 right-10">
							<div>
								<Image
									src={"/images/home/built/frame1.png"}
									width={49}
									height={46}
									alt="frame"
								/>
							</div>
						</div>

						<div className="absolute top-16 left-4 right-10">
							<div>
								<Image
									src={"/images/home/built/frame2.png"}
									width={64}
									height={60}
									alt="frame"
								/>
							</div>
						</div>
						<div className="absolute top-36 left-0 right-10">
							<div>
								<Image
									src={"/images/home/built/frame3.png"}
									width={49}
									height={46}
									alt="frame"
								/>
							</div>
						</div>
						<div className="absolute top-16 left-24 right-10">
							<div>
								<Image
									src={"/images/home/built/frame4.png"}
									width={49}
									height={46}
									alt="frame"
								/>
							</div>
						</div>
						<div className="absolute top-32 left-20 right-10">
							<div>
								<Image
									src={"/images/home/built/frame5.png"}
									width={37}
									height={35}
									alt="frame"
								/>
							</div>
						</div>
						<Image
							src={"/images/home/built/bg1.png"}
							width={205}
							height={218}
							alt="bg"
						/>
					</div> */}
					<motion.div
						className="relative"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: false, amount: 0.2 }}
					>
						<div className="absolute top-0 left-20 right-10">
							<Image
								src={"/images/home/built/frame1.png"}
								width={49}
								height={46}
								alt="frame"
							/>
						</div>

						<div className="absolute top-16 left-4 right-10">
							<Image
								src={"/images/home/built/frame2.png"}
								width={64}
								height={60}
								alt="frame"
							/>
						</div>

						<div className="absolute top-36 left-0 right-10">
							<Image
								src={"/images/home/built/frame3.png"}
								width={49}
								height={46}
								alt="frame"
							/>
						</div>

						<div className="absolute top-16 left-24 right-10">
							<Image
								src={"/images/home/built/frame4.png"}
								width={49}
								height={46}
								alt="frame"
							/>
						</div>

						<div className="absolute top-32 left-20 right-10">
							<Image
								src={"/images/home/built/frame5.png"}
								width={37}
								height={35}
								alt="frame"
							/>
						</div>

						<Image
							src={"/images/home/built/bg1.png"}
							width={205}
							height={218}
							alt="bg"
						/>
					</motion.div>
				</div>
				<div className="hidden md:block absolute top-44 right-0">
					<Image
						src={"/images/home/built/bg2.png"}
						width={65}
						height={100}
						alt="bg"
					/>
				</div>
				<div className="hidden md:block absolute bottom-0 right-0">
					<Image
						src={"/images/home/built/bg3.png"}
						width={165}
						height={110}
						alt="bg"
					/>
				</div>
				<div className="flex flex-col px-6 md:px-10 gap-5">
					<div className="flex flex-col items-center md:flex-row gap-2">
						<Image
							src={"/images/home/built/lock.png"}
							width={36}
							height={44}
							alt="lock"
						/>
						<h3 className="w-full hidden md:block font-inter max-w-[600px] font-[700] text-2xl text-center md:text-start md:text-3xl text-[#ffff] ">
							Built with Privacy in Mind
						</h3>
						<h3 className="w-full md:hidden font-inter  font-[700] text-3xl text-center md:text-start md:text-3xl text-[#ffff] ">
							Built with Privacy <br /> in Mind
						</h3>
					</div>
					<p className="ml-2 md:ml-0 w-[290px] font-inter md:w-[750px] font-[700] text-xs md:text-base md:tracking-[0.5px] text-[#ffff] ">
						At Opus RMT Systems, your privacy is our priority. We design our
						systems to protect your data while delivering unparalleled
						convenience and security.
					</p>
				</div>
				<div className="flex flex-col px-8 md:px-10 gap-4 md:pb-6">
					<p className="w-full font-inter font-[600] text-xs md:text-sm text-[#ffff] ">
						{" "}
						Your personal information stays private, always.
					</p>
					<p className="w-full font-inter font-[600] text-xs md:text-sm text-[#ffff] ">
						{" "}
						Focus on enjoying your smart home without worrying about data
						misuse.
					</p>
				</div>
				<div className="md:hidden h-[250px] relative ">
					<div className="absolute top-0 left-16 right-10">
						{/* <div className="relative">
							<div className="absolute top-0 left-20 right-10">
								<div>
									<Image
										src={"/images/home/built/frame1.png"}
										width={49}
										height={46}
										alt="frame"
									/>
								</div>
							</div>

							<div className="absolute top-16 left-4 right-10">
								<div>
									<Image
										src={"/images/home/built/frame2.png"}
										width={64}
										height={60}
										alt="frame"
									/>
								</div>
							</div>
							<div className="absolute top-36 left-0 right-10">
								<div>
									<Image
										src={"/images/home/built/frame3.png"}
										width={49}
										height={46}
										alt="frame"
									/>
								</div>
							</div>
							<div className="absolute top-16 left-24 right-10">
								<div>
									<Image
										src={"/images/home/built/frame4.png"}
										width={49}
										height={46}
										alt="frame"
									/>
								</div>
							</div>
							<div className="absolute top-32 left-20 right-10">
								<div>
									<Image
										src={"/images/home/built/frame5.png"}
										width={37}
										height={35}
										alt="frame"
									/>
								</div>
							</div>
							<Image
								src={"/images/home/built/bg1.png"}
								width={205}
								height={218}
								alt="bg1"
							/>
						</div> */}
						<motion.div
							className="relative"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, ease: "easeOut" }}
							viewport={{ once: false, amount: 0.2 }}
						>
							<div className="absolute top-0 left-20 right-10">
								<Image
									src={"/images/home/built/frame1.png"}
									width={49}
									height={46}
									alt="frame"
								/>
							</div>

							<div className="absolute top-16 left-4 right-10">
								<Image
									src={"/images/home/built/frame2.png"}
									width={64}
									height={60}
									alt="frame"
								/>
							</div>

							<div className="absolute top-36 left-0 right-10">
								<Image
									src={"/images/home/built/frame3.png"}
									width={49}
									height={46}
									alt="frame"
								/>
							</div>

							<div className="absolute top-16 left-24 right-10">
								<Image
									src={"/images/home/built/frame4.png"}
									width={49}
									height={46}
									alt="frame"
								/>
							</div>

							<div className="absolute top-32 left-20 right-10">
								<Image
									src={"/images/home/built/frame5.png"}
									width={37}
									height={35}
									alt="frame"
								/>
							</div>

							<Image
								src={"/images/home/built/bg1.png"}
								width={205}
								height={218}
								alt="bg1"
							/>
						</motion.div>
					</div>
					<div className="absolute bottom-12 right-0">
						<div>
							<Image
								src={"/images/home/built/bg4.png"}
								width={68}
								height={100}
								alt="bg2"
							/>
						</div>
					</div>
					<div className="absolute bottom-0 right-0">
						<div>
							<Image
								src={"/images/home/built/bg5.png"}
								width={178}
								height={81}
								alt="bg2"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Built;
