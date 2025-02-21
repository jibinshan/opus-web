import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Whats: React.FC = () => {
	return (
		<section className="bg-[#F9F7FA] w-full h-full py-12 md:py-20 px-8 md:px-[50px] lg:px-[80px] 2xl:px-[140px]">
			<div className="flex flex-col gap-6 md:gap-8">
				<div className="flex flex-col gap-2 md:gap-4">
					<h2 className="text-center text-[#4B3274] font-inter font-[700] text-4xl md:text-5xl ">
						{" "}
						Whatʼs New
					</h2>
					<h6 className="text-center text-[#4B3274] font-inter font-[400] text-base md:text-xl ">
						{" "}
						Stay Updated with Opus
					</h6>
				</div>
				<div className="flex flex-row gap-5 md:justify-center">
					<div className="flex flex-col items-center  gap-2  md:gap-4">
						<div className="flex flex-col gap-2 md:gap-4">
							<Image
								src={"/images/home/whats/image.png"}
								width={320}
								height={249}
								alt="image"
							/>
							<div className="flex flex-row gap-3">
								<span className="text-center text-[#4B3274] font-inter font-[400] text-sm  ">
									Oct 11,2022{" "}
								</span>
								<span className="text-center text-[#4B3274] font-inter font-[400] text-sm  ">
									TAG{" "}
								</span>
							</div>
							<div className="flex flex-col gap-4 md:gap-6">
								<h2 className="font-open.sans font-[700] text-[#000000] text-xl md:text-2xl ">
									Top 5 Smart Home Trends for <br /> 2025
								</h2>
								<div className="flex flex-row items-center gap-2">
									<Image
										src={"/images/home/whats/user.png"}
										width={45}
										height={45}
										alt="image"
										className="object-cover h-full"
									/>
									<div className="flex flex-col gap-0">
										<span className=" text-[#4B3274] font-inter font-[700] md:text-base  text-sm ">
											John Doe
										</span>
										<span className=" text-[#4B3274] font-inter font-[400] md:text-base  text-sm ">
											System Architect{" "}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:flex flex-col items-center  gap-2  md:gap-4">
						<div className="flex flex-col gap-2 md:gap-4">
							<Image
								src={"/images/home/whats/image.png"}
								width={320}
								height={249}
								alt="image"
							/>
							<div className="flex flex-row gap-3">
								<span className="text-center text-[#4B3274] font-inter font-[400] text-sm  ">
									Oct 11,2022{" "}
								</span>
								<span className="text-center text-[#4B3274] font-inter font-[400] text-sm  ">
									TAG{" "}
								</span>
							</div>
							<div className="flex flex-col gap-4 md:gap-6">
								<h2 className="font-open.sans font-[700] text-[#000000] text-xl md:text-2xl ">
									Top 5 Smart Home Trends for <br /> 2025
								</h2>
								<div className="flex flex-row items-center gap-2">
									<Image
										src={"/images/home/whats/user.png"}
										width={45}
										height={45}
										alt="image"
										className="object-cover h-full"
									/>
									<div className="flex flex-col gap-0">
										<span className=" text-[#4B3274] font-inter font-[700] md:text-base  text-sm ">
											John Doe
										</span>
										<span className=" text-[#4B3274] font-inter font-[400] md:text-base  text-sm ">
											System Architect{" "}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:flex flex-col items-center  gap-2  md:gap-4">
						<div className="flex flex-col gap-2 md:gap-4">
							<Image
								src={"/images/home/whats/image.png"}
								width={320}
								height={249}
								alt="image"
							/>
							<div className="flex flex-row gap-3">
								<span className="text-center text-[#4B3274] font-inter font-[400] text-sm  ">
									Oct 11,2022{" "}
								</span>
								<span className="text-center text-[#4B3274] font-inter font-[400] text-sm  ">
									TAG{" "}
								</span>
							</div>
							<div className="flex flex-col gap-4 md:gap-6">
								<h2 className="font-open.sans font-[700] text-[#000000] text-xl md:text-2xl ">
									Top 5 Smart Home Trends for <br /> 2025
								</h2>
								<div className="flex flex-row items-center gap-2">
									<Image
										src={"/images/home/whats/user.png"}
										width={45}
										height={45}
										alt="image"
										className="object-cover h-full"
									/>
									<div className="flex flex-col gap-0">
										<span className=" text-[#4B3274] font-inter font-[700] md:text-base  text-sm ">
											John Doe
										</span>
										<span className=" text-[#4B3274] font-inter font-[400] md:text-base  text-sm ">
											System Architect{" "}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:hidden">
					<Link href={""}>
						<Image
							src={"/images/home/whats/read.png"}
							width={353}
							height={94}
							alt="image"
							className="object-cover h-full"
						/>
					</Link>
				</div>
				<div className="hidden md:flex justify-center mt-4 items-center">
					<Link
						className="text-[#6B2FE4] font-open.sans font-[400] text-base text-center flex flex-row gap-2 "
						href={""}
					>
						Read more <ArrowRight />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Whats;
