import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { Sidebar } from "./ui/sidebar";

interface NavbarProps {
	position?: "static" | "fixed" | "absolute";
}

const Navbar: React.FC<NavbarProps> = ({ position = "static" }) => {
	return (
		<section
			className={`${position} top-0 z-50 flex h-[10vh] w-full items-center px-4  transition-all duration-300 ease-in-out 2xl:px-[130px]  md:px-[80px]`}
		>
			<div className="flex bg-[#FFFFFF] w-full py-4 flex-col rounded-b-2xl lg:rouded-b-[50px] border border-[#E2E2E2] gap-0">
				<div className="flex w-full flex-row items-center justify-between px-4 md:px-8">
					<div className="">
						<Link href={"/"}>
							<Image
								src={"/images/home/navbar/logo.svg"}
								width={228}
								height={78}
								alt="logo"
								className="w-24"
							/>
						</Link>
					</div>
					<div className="hidden w-full flex-row  items-end justify-end gap-12 bg-transparent py-3 lg:flex">
						<Link
							className="text-center font-public_sans text-sm font-[500]  tracking-[0.96px] text-[#62381A]"
							href={"/"}
						>
							Home
						</Link>
						<Link
							className="text-center font-public_sans text-sm font-[500]  tracking-[0.96px] text-[#62381A]"
							href={""}
						>
							About
						</Link>

						<Link
							className="text-center font- text-sm font-[500]  tracking-[0.96px] text-[#62381A]"
							href={""}
						>
							How it Works
						</Link>
						<Link
							className="text-center font-public_sans text-sm font-[500]  tracking-[0.96px] text-[#62381A]"
							href={""}
						>
							Blog
						</Link>
						<Link
							className="text-center font-public_sans text-sm font-[500]  tracking-[0.96px] text-[#62381A]"
							href={""}
						>
							Product
						</Link>
					</div>

					{/* <div className="lg:hidden">
						<Sidebar>
							<Button
								variant="ghost"
								className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
							>
								<div className="flex flex-row gap-2">
									<EqualizerIcon />
								</div>
							</Button>
						</Sidebar>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
	return (
		<div className="equalizer-icon rotate">
			<div className="bar"></div>
			<div className="bar"></div>
			<div className="bar"></div>
		</div>
	);
};
