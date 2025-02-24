import { Button } from "@/components/ui/button"
import Image from "next/image"

const MobileApp = ({ }) => {
    return (
        <section className="w-full flex h-fit py-12 md:pt-16 md:pb-24 px-4 md:px-[130px]">
            <div className="relative w-full z-0">
                <div className="absolute w-full h-full top-9 px-4">
                    <div className="w-full h-full bg-[#dccff6] rounded-3xl"></div>
                </div>
                <div className="absolute w-full h-full top-6 p-2">
                    <div className="w-full h-full bg-[#6b2fe4] rounded-3xl"></div>
                </div>
                <div className="relative w-full flex flex-col md:flex-row bg-[#000000] rounded-3xl gap-4 ">
                    <div className="w-full md:w-3/5 p-7 flex flex-col justify-start items-start gap-6 md:pb-12">
                        <div className="w-full flex flex-col gap-3 border-b-[1px] border-b-[#6b2fe4] pb-4">
                            <p className="text-2xl md:text-5xl font-[800] capitalize text-white font-inter">The Opus Mobile App</p>
                            <p className="text-white font-open.sans text-sm md:text-xl">All your home automation needs at your fingertips.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-white font-open.sans text-sm md:text-xl">Effortlessly control and monitor devices.</p>
                            <p className="text-sm md:text-lg text-white font-open.sans">Set schedules and create routines for a truly personalized experience.</p>
                            <p className="text-sm md:text-lg text-white font-open.sans">Receive instant updates and alerts to stay informed.</p>
                        </div>
                        <div className="w-full flex justify-center md:justify-start items-center gap-4 px-6 md:px-0 pt-6 md:pt-0">
                            <div className="flex justify-center items-center gap-2 bg-[#666666] border-[1px] border-[#FFF] px-6 py-3 rounded-lg">
                                <Image
                                    src='/images/home/mobile-app/play-store.png'
                                    width={39}
                                    height={42}
                                    alt="play-store"
                                    className="w-[28px] md:w-[39px]"
                                />
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <Image
                                        src='/images/home/mobile-app/get-it-on.png'
                                        width={81}
                                        height={14}
                                        alt="play-store"
                                        className="w-[60px] md:h-[12px] md:w-[78px]"
                                    />
                                    <Image
                                        src='/images/home/mobile-app/google-play.png'
                                        width={128}
                                        height={25}
                                        alt="play-store"
                                        className="w-[80px] md:h-[20px] md:w-[115px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2 bg-[#666666] border-[1px] border-[#FFF] px-6 py-3 rounded-lg">
                                <Image
                                    src='/images/home/mobile-app/apple.png'
                                    width={33}
                                    height={40}
                                    alt="play-store"
                                    className="w-[28px] md:w-[33px]"
                                />
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <Image
                                        src='/images/home/mobile-app/download.png'
                                        width={121}
                                        height={12}
                                        alt="play-store"
                                        className="w-[90px] md:h-[12px] md:w-[121px]"
                                    />
                                    <Image
                                        src='/images/home/mobile-app/app-store.png'
                                        width={122}
                                        height={28}
                                        alt="play-store"
                                        className="w-[80px] md:h-[20px] md:w-[115px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 flex justify-center items-center">
                        <Image
                            src='/images/home/mobile-app/phone.png'
                            width={663}
                            height={536}
                            alt="mobile-app"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MobileApp