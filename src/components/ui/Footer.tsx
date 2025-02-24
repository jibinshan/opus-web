import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
	return (
		<section className="w-full relative">
			<div className="absolute w-full h-full left-0 top-0 bg-[#e7b9ff] md:hidden"></div>
			<div className="relative bg-gradient-to-r to-[#0b0418] rounded-tl-[80px] pt-12 md:pt-16 px-4 md:px-[80px] 2xl:px-[140px] from-[#0d0636] md:rounded-tl-[140px] h-full w-full" >
				<div className="relative flex flex-col gap-8 z-30">
					<div className="flex flex-col gap-8 md:gap-20 2xl:gap-32 md:flex-row">
						<div className="flex flex-col gap-4 items-center md:pt-16 md:items-start md:gap-6">
							<Image
								src={"/images/home/footer/logo.svg"}
								width={136}
								height={46}
								alt="frame"
							/>
							<p className="font-inter font-[400] text-[#ffff] text-sm md:text-base w-full max-w-[270px] text-center md:text-start ">
								Opus RMT Systems brings intelligent automation to your fingertips,
								enhancing your home's security, comfort, and energy efficiency
								with cutting-edge technology.
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-8 md:gap-16 2xl:gap-32">
							<div className="flex flex-col gap-3 md:gap-4">
								<div className="flex flex-col justify-center items-center gap-0">
									<h2 className="font-inter font-[700] text-[#ffff] text-lg md:text-xl ">
										Office
									</h2>
									<Image
										src={"/images/home/footer/line.svg"}
										width={117}
										height={17}
										alt="line"
										className="w-16  md:w-20 "
									/>
								</div>
								<div className="flex flex-col gap-6 md:gap-10">
									<div className="flex flex-col gap-1 md:gap-2">
										<Link
											className="text-sm  font-inter font-[500] text-center w-full text-[#ffff] "
											href={""}
											target="_blank"
										>
											Regency Mall, Mamom Rd, <br /> Trivandrum
										</Link>
										<Link
											className="text-sm  font-inter font-[500] text-center text-[#ffff] "
											href={""}
											target="_blank"
										>
											Pincode-695103{" "}
										</Link>
										<Link
											className="text-sm  font-inter font-[500] text-center text-[#ffff] "
											href={""}
											target="_blank"
										>
											Kerala ,India{" "}
										</Link>
									</div>
									<div className="flex flex-col gap-1 md:gap-3">
										<Link
											className="text-sm underline font-inter font-[500] text-center text-[#ffff] "
											href={""}
										>
											hello@opusrmt.com
										</Link>
										<Link
											className="text-sm  font-inter font-[700] text-center text-[#ffff] "
											href={""}
										>
											+91 8075308255
										</Link>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-3 md:gap-4">
								<div className="flex flex-col justify-center md:mr-4 items-center gap-0">
									<h2 className="font-inter font-[700] text-[#ffff] text-lg md:text-xl ">
										Links
									</h2>
									<Image
										src={"/images/home/footer/line.svg"}
										width={117}
										height={17}
										alt="line"
										className="w-16  md:w-20 "
									/>
								</div>
								<div className="flex flex-col gap-2 md:ml-6 md:gap-3">
									<Link
										className="text-base  font-inter font-[500] text-center md:text-start text-[#ffff] "
										href={""}
									>
										About
									</Link>
									<Link
										className="text-base  font-inter font-[500] text-center md:text-start text-[#ffff] "
										href={""}
									>
										Privacy Policy
									</Link>
									<Link
										className="text-base  font-inter font-[500] text-center md:text-start text-[#ffff] "
										href={""}
									>
										Term of Service
									</Link>
									<Link
										className="text-base  font-inter font-[500] text-center md:text-start text-[#ffff] "
										href={""}
									>
										Careers
									</Link>
									<Link
										className="text-base  font-inter font-[500] text-center md:text-start text-[#ffff] "
										href={""}
									>
										Blog
									</Link>
								</div>
							</div>
							<div className="flex flex-col gap-2 md:gap-4">
								<div className="flex flex-col justify-center items-center gap-0">
									<h2 className="font-inter font-[700] text-[#ffff] text-lg md:text-xl ">
										Follow Us
									</h2>
									<Image
										src={"/images/home/footer/line.svg"}
										width={117}
										height={17}
										alt="line"
										className="md:w-32 "
									/>
								</div>
								<div className="flex flex-row justify-center items-center gap-2">
									<Link href={""} target="_blank">
										<Image
											src={"/images/home/footer/fb.png"}
											width={45}
											height={45}
											alt="line"
										/>
									</Link>
									<Link href={""} target="_blank">
										<Image
											src={"/images/home/footer/insta.png"}
											width={45}
											height={45}
											alt="line"
										/>
									</Link>
									<Link href={""} target="_blank">
										<Image
											src={"/images/home/footer/phone.png"}
											width={45}
											height={45}
											alt="line"
										/>
									</Link>
									<Link href={""} target="_blank">
										<Image
											src={"/images/home/footer/linkdin.png"}
											width={45}
											height={45}
											alt="line"
										/>
									</Link>
								</div>
								<div className="flex justify-center items-center mt-2 md:mt-12">
									<div className=" border-b-[1px] w-[220px] md:w-[250px] opacity-30 border-[#fff]" />
								</div>
								<div className="flex flex-row justify-center items-center gap-10  md:gap-14 py-8">
									<div className="py-6 px-4 w-[50px] h-[50px] border bg-[#fff]" />
									<div className="py-6 px-4 w-[50px] h-[50px] border bg-[#fff]" />
									<div className="py-6 px-4 w-[50px] h-[50px] border bg-[#fff]" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4 py-2">
						<div className=" border-b-[1px] w-full opacity-50 border-[#fff]" />
						<Link
							href={""}
							className="text-xs md:text-sm font-inter font-[500] text-center  text-[#ffff] "
							target="_blank"
						>
							© 2025 Opus RMT Systems. All rights reserved. <br />
							<span className="font-[700] md:font-[500]">
								Powered By Neurofactor
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
