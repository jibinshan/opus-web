"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const TrustedPartner = ({}) => {
	const [isAnimating, setIsAnimating] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating((prev) => !prev);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const visiblePath = "M242.5 198.041L237.5 195.154V200.928L242.5 198.041ZM596.5 0V54.9923H597.5V0H596.5ZM577 74.4923H21V75.4923H577V74.4923ZM0.5 94.9923V178.041H1.5V94.9923H0.5ZM21 198.541H238V197.541H21V198.541ZM0.5 178.041C0.5 189.363 9.67816 198.541 21 198.541V197.541C10.2304 197.541 1.5 188.811 1.5 178.041H0.5ZM21 74.4923C9.67817 74.4923 0.5 83.6705 0.5 94.9923H1.5C1.5 84.2227 10.2305 75.4923 21 75.4923V74.4923ZM596.5 54.9923C596.5 65.7618 587.77 74.4923 577 74.4923V75.4923C588.322 75.4923 597.5 66.3141 597.5 54.9923H596.5Z";
	return (
		<section className="relative w-full h-full px-4 md:px-[130px] pt-32 pb-32 flex flex-col gap-12">
			<div className="absolute w-full h-full left-0 top-0 flex flex-col gap-12">
				<div className="h-[171px] w-[650px] ml-[180px] flex justify-center">
					{/* <Image
						src="/images/home/partner/arrowline1.png"
						width={747}
						height={251}
						alt="arrowline"
						className="h-[171px] w-[650px] -ml-[519px]"
					/> */}
		 {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="598"
      height="201"
      viewBox="0 0 598 201"
      fill="none"
      preserveAspectRatio="none"
	  className="overflow-visible"
    >
      <motion.path
        d="M242.5 198.041L237.5 195.154V200.928L242.5 198.041ZM596.5 0V54.9923H597.5V0H596.5ZM577 74.4923H21V75.4923H577V74.4923ZM0.5 94.9923V178.041H1.5V94.9923H0.5ZM21 198.541H238V197.541H21V198.541ZM0.5 178.041C0.5 189.363 9.67816 198.541 21 198.541V197.541C10.2304 197.541 1.5 188.811 1.5 178.041H0.5ZM21 74.4923C9.67817 74.4923 0.5 83.6705 0.5 94.9923H1.5C1.5 84.2227 10.2305 75.4923 21 75.4923V74.4923ZM596.5 54.9923C596.5 65.7618 587.77 74.4923 577 74.4923V75.4923C588.322 75.4923 597.5 66.3141 597.5 54.9923H596.5Z"
        stroke="#6B2FE4"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          filter: [
            "drop-shadow(0px 0px 12px #6B2FE4)",
            "drop-shadow(0px 0px 24px #A020F0)",
            "drop-shadow(0px 0px 12px #6B2FE4)"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          filter: "drop-shadow(0px 0px 12px #6B2FE4)",
        }}
      />
      <motion.circle
        r="5"
        fill="#A020F0"
        animate={{
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.animateMotion
          repeatCount="indefinite"
          dur="2s"
          path="M596.5 0V54.9923H577V74.4923H21V94.9923V178.041H21V198.541H242.5L237.5 195.154V200.928L242.5 198.041"
          keyPoints="0;1"
          keyTimes="0;1"
        />
      </motion.circle>
    </svg> */}
	{/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="598"
      height="201"
      viewBox="0 0 598 201"
      fill="none"
      preserveAspectRatio="none"
	  className="overflow-visible"
    >
      <motion.path
        d="M242.5 198.041L237.5 195.154V200.928L242.5 198.041ZM596.5 0V54.9923H597.5V0H596.5ZM577 74.4923H21V75.4923H577V74.4923ZM0.5 94.9923V178.041H1.5V94.9923H0.5ZM21 198.541H238V197.541H21V198.541ZM0.5 178.041C0.5 189.363 9.67816 198.541 21 198.541V197.541C10.2304 197.541 1.5 188.811 1.5 178.041H0.5ZM21 74.4923C9.67817 74.4923 0.5 83.6705 0.5 94.9923H1.5C1.5 84.2227 10.2305 75.4923 21 75.4923V74.4923ZM596.5 54.9923C596.5 65.7618 587.77 74.4923 577 74.4923V75.4923C588.322 75.4923 597.5 66.3141 597.5 54.9923H596.5Z"
        stroke="#6B2FE4"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          filter: [
            "drop-shadow(0px 0px 12px #6B2FE4)",
            "drop-shadow(0px 0px 24px #A020F0)",
            "drop-shadow(0px 0px 12px #6B2FE4)"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          filter: "drop-shadow(0px 0px 12px #6B2FE4)",
        }}
      />
      <motion.circle
        r="5"
        fill="#A020F0"
        animate={{
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.animateMotion
          repeatCount="indefinite"
          dur="3s"
          path="M242.5 198.041L237.5 195.154V200.928L242.5 198.041ZM596.5 0V54.9923H577V74.4923H21V94.9923V178.041H21V198.541H242.5"
          keyPoints="0;0.25;0.5;0.75;1"
          keyTimes="0;0.25;0.5;0.75;1"
        />
      </motion.circle>
    </svg> */}

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="698"
  height="171"
  viewBox="0 0 598 201"
  fill="none"
  preserveAspectRatio="none"
  className="overflow-visible"
>
  <defs>
    <marker
      id="arrow"
      markerWidth="10"
      markerHeight="10"
      refX="5"
      refY="5"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,0 L10,5 L0,10 Z" fill="#6B2FE4" />
    </marker>
  </defs>

  <motion.path
    d="
    M596.5 0 
    V54 
    A20 20 0 0 1 576.5 74
    H41 
    A20 20 0 0 0 21 94
    V178.541 
    A20 20 0 0 0 41 198.541
    H242.5"
    fill="none"
    stroke="#6B2FE4"
    strokeLinecap="round"
    strokeLinejoin="round"
    markerEnd="url(#arrow)"  // Arrow at the end of the path
  />

  {/* <motion.circle
    r="5"
    fill="#A020F0"
    animate={{
      opacity: [1, 0.8, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  > */}
	<motion.circle
  r="5"
  fill="#A020F0"
  filter="drop-shadow(0px 0px 8px #A020F0)" // Electric glow effect
  animate={{
    opacity: [1, 0.8, 1],
    scale: [1, 1.2, 1],
    x: [0, -1, 1, -2, 2, 0], // Jitter effect
    y: [0, 1, -1, 2, -2, 0], // Jitter effect
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
    times: [0, 0.25, 0.5, 0.75, 1],
  }}
>
    <motion.animateMotion
      repeatCount="indefinite"
      dur="4s"
      path="
      M596.5 0 
      V54 
      A20 20 0 0 1 576.5 74
      H41 
      A20 20 0 0 0 21 94
      V178.541 
      A20 20 0 0 0 41 198.541
      H242.5"
      keyTimes="0;0.5;1"
      keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
      calcMode="spline"
    />
  </motion.circle>
</svg>


	{/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="598"
      height="171"
      viewBox="0 0 598 201"
      fill="none"
      preserveAspectRatio="none"
      className="overflow-visible"
    >
      <motion.path
        d={visiblePath}
        fill="#6B2FE4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <motion.circle
        r="5"
        fill="#A020F0"
        animate={{
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.animateMotion
          repeatCount="indefinite"
          dur="5s" 
          begin="0s"
          calcMode="linear" 
          path={visiblePath}
        />
      </motion.circle>
    </svg> */}

				</div>
			</div>
			<div className="w-full flex flex-col justify-center items-center gap-5">
				<div className="relative">
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
						viewport={{ amount: 0.2 }}
						className="text-6xl text-center font-inter font-[700]"
						style={{
							background:
								"linear-gradient(180deg, #6B2FE4 34.5%, #A484E3 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							color: "transparent",
						}}
					>
						Your Trusted Partner in
						<br />
						Smart Home Automation
					</motion.p>

					<div className="absolute w-full top-0 left-0 flex justify-end items-end ml-[178px] mt-[94px]">
						{/* <Image
							src="/images/home/partner/arrowline2.png"
							width={722}
							height={270}
							alt="arrowline"
							className="h-[210px] w-[550px]"
						/> */}
					<svg
  xmlns="http://www.w3.org/2000/svg"
  width="578"
  height="210"
  viewBox="0 0 578 216"
  fill="none"
  preserveAspectRatio="none"
  className="overflow-visible"
>
  <defs>
    <marker
      id="arrowhead"
      markerWidth="8"
      markerHeight="8"
      refX="5"
      refY="2"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,0 L5,2 L0,4" fill="none" stroke="#6B2FE4" strokeWidth="2" />
    </marker>
  </defs>

  <motion.path
    d="
      M396.843 1.5H557
      A20 20 0 0 1 577 21
      V119.503
      A20 20 0 0 1 557 139.003
      H24
      A20 20 0 0 0 4 159.503
      V215
    "
    fill="none"
    stroke="#6B2FE4"
    strokeLinecap="round"
    strokeLinejoin="round"
    markerEnd="url(#arrowhead)"
  />
  <motion.circle
    r="5"
    fill="#A020F0"
    animate={{ opacity: [1, 0.8, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <motion.animateMotion
      repeatCount="indefinite"
      dur="4s"
      path="
        M396.843 1.5H557
        A20 20 0 0 1 577 21
        V119.503
        A20 20 0 0 1 557 139.003
        H24
        A20 20 0 0 0 4 159.503
        V215
      "
      keyTimes="0;0.5;1"
      keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
      calcMode="spline"
    />
  </motion.circle>
</svg>


					</div>
				</div>
				<p className="text-center text-[#09060E] font-open.sans font-[500] text-sm max-w-[850px]">
					Opus RMT Systems is your gateway to the future of home automation. Our
					mission is to make your life more convenient, energy-efficient, and
					enjoyable through innovative technology tailored to your lifestyle.
					With Opus, your home becomes smarter, more comfortable, and seamlessly
					connected.
				</p>
			</div>
			<div className="w-full flex justify-center items-center gap-5">
				<div className="w-1/3 flex flex-col gap-10">
					<div className="w-full flex justify-end">
						<div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
							<MotionImage
								src="/images/home/partner/2.png"
								width={175}
								height={120}
								alt="2"
								className="rounded-2xl"
								initial={{ scale: 0.5, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 1.2, ease: "easeOut" }}
								viewport={{ amount: 0.3 }}
							/>
						</div>
					</div>
					<div className="w-full flex justify-start">
						<div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
							<MotionImage
								src="/images/home/partner/1.png"
								width={129}
								height={87}
								alt="2"
								className="rounded-2xl"
								initial={{ scale: 0.5, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 1.2, ease: "easeOut" }}
								viewport={{ amount: 0.3 }}
							/>
						</div>
					</div>
				</div>

				<div className="w-1/3 flex justify-center items-center">
					<div className="p-2 border-[3px] border-[#62381a] rounded-2xl mt-[55px]">
						<MotionImage
							src="/images/home/partner/3.png"
							width={344}
							height={234}
							alt="2"
							className="rounded-2xl"
							initial={{ scale: 0.5, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 1.2, ease: "easeOut" }}
							viewport={{ amount: 0.3 }}
						/>
					</div>
				</div>

				<div className="w-1/3 flex flex-col gap-10">
					<div className="w-full flex justify-end">
						<div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
							<MotionImage
								src="/images/home/partner/5.png"
								width={129}
								height={87}
								alt="2"
								className="rounded-2xl"
								initial={{ scale: 0.5, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 1.2, ease: "easeOut" }}
								viewport={{ amount: 0.3 }}
							/>
						</div>
					</div>
					<div className="w-full flex justify-start">
						<div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
							<MotionImage
								src="/images/home/partner/4.png"
								width={175}
								height={120}
								alt="2"
								className="rounded-2xl"
								initial={{ scale: 0.5, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 1.2, ease: "easeOut" }}
								viewport={{ amount: 0.3 }}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute w-full h-full top-0 left-0 flex justify-center items-end">
				{/* <Image
					src="/images/home/partner/arrowline3.png"
					width={6}
					height={137}
					alt="3"
					className="h-[130px]"
				/> */}
				<svg
  xmlns="http://www.w3.org/2000/svg"
  width="6"
  height="130"
  viewBox="0 0 6 137"
  fill="none"
  preserveAspectRatio="none"
  className="overflow-visible"
>
  <motion.path
    d="M3 0 V132"
    fill="none"
    stroke="#6B2FE4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  
  {/* Filled Arrow */}
  <motion.polygon 
    points="0.113243 132, 3 137, 5.88675 132"
    fill="#6B2FE4"
  />

  {/* Animated Circle Moving Only on the Vertical Line */}
  <motion.circle
    r="5"
    fill="#A020F0"
    animate={{
      opacity: [1, 0.8, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <motion.animateMotion
      repeatCount="indefinite"
      dur="3s"
      path="M3 0 V132"
      keyTimes="0;1"
      keySplines="0.42 0 0.58 1"
      calcMode="spline"
    />
  </motion.circle>
</svg>



			</div>
		</section>
	);
};

export default TrustedPartner;
