'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"

const rooms: string[] = [
    "/images/home/hero/hero.png",
    "/images/home/hero/hero.png",
    "/images/home/hero/hero.png",
    "/images/home/hero/hero.png",
]

const Hero = ({ }) => {
    const [room, setRoom] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)
    useEffect(() => {
        setShow(false)
    }, [room])
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000);
    }, [room])
    return (
        <section className="w-full pt-24 px-[140px] flex flex-col gap-8">
            <div className="w-full flex flex-col gap-2 justify-center items-center">
                <p className="text-black font-[800] font-inter text-4xl text-center">Seamless Living,</p>
                <p className="text-black font-[800] font-inter text-5xl text-center">Smartly <span className="text-[#6B2FE4]">Automated</span></p>
                <div className="w-full flex justify-center items-center gap-3 pt-4">
                    <Button className="bg-[#6B2FE4] text-white font-inter font-[500] flex justify-center items-center py-5 px-7 rounded-full">
                        <Image
                            src='/images/home/hero/explore.png'
                            width={24}
                            height={24}
                            alt="explore"
                        />
                        <span>Explore Features</span>
                    </Button>
                    <Button className="text-black font-inter font-[500] flex justify-center items-center py-5 px-7 rounded-full border-black" variant='outline'>
                        Speak To An Expert
                    </Button>
                </div>
            </div>

            <div className="relative w-full pt-7 px-7 rounded-4xl flex justify-center items-center"
                style={{
                    background: "linear-gradient(180deg, rgba(164, 132, 227, 0.30) 0%, rgba(164, 132, 227, 0.00) 100%);"
                }}
            >
                {rooms[room] &&
                    <div className="relative">
                        < Image
                            src={rooms[room]}
                            width={1360}
                            height={768}
                            alt="hero"
                            className="rounded-t-3xl w-[1360px] h-[95vh]"
                        />
                        <div className={cn("absolute z-30 left-5 bottom-[130px] flex flex-col justify-end items-end opacity-0 transition-all duration-300 ease-in", show && "opacity-100")}>
                            <div className="bg-[#b67f57] p-3 rounded-2xl border-[2px] border-white">
                                <p className="text-white font-open.sans text-[10px] max-w-[200px]">Lorem ipsum dolor sit amet consectetur. Pharetra eget volutpat nec non.</p>
                            </div>
                            <div className="flex flex-col items-end justify-end -mr-8 -mt-3">
                                <Image
                                    src="/images/home/hero/livingroom/1.png"
                                    width={34}
                                    height={52}
                                    alt="hero"
                                    className=""
                                />
                                <div className="w-6 h-6 rounded-full border-[2px] border-white bg-[#b59b88] p-1 -mr-3">
                                    <div className="w-full h-full bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className={cn("absolute z-30 left-[330px] top-[260px] flex flex-col justify-end items-end opacity-0 transition-all duration-300 ease-in", show && "opacity-100")}>
                            <div className="bg-[#b67f57] p-3 rounded-2xl border-[2px] border-white">
                                <p className="text-white font-open.sans text-[10px] max-w-[200px]">Lorem ipsum dolor sit amet consectetur. Pharetra eget volutpat nec non.</p>
                            </div>
                            <div className="flex flex-col items-end justify-end -mr-8 -mt-3">
                                <Image
                                    src="/images/home/hero/livingroom/2.png"
                                    width={34}
                                    height={52}
                                    alt="hero"
                                    className=""
                                />
                                <div className="w-6 h-6 rounded-full border-[2px] border-white bg-[#b59b88] p-1 -mr-3">
                                    <div className="w-full h-full bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className={cn("absolute z-30 right-[330px] top-[320px] flex flex-col justify-center items-center opacity-0 transition-all duration-300 ease-in", show && "opacity-100")}>
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-6 h-6 rounded-full border-[2px] border-white bg-[#b59b88] p-1 ">
                                    <div className="w-full h-full bg-white rounded-full"></div>
                                </div>
                                <Image
                                    src="/images/home/hero/livingroom/3.png"
                                    width={2}
                                    height={50}
                                    alt="hero"
                                    className=""
                                />
                            </div>
                            <div className="bg-[#b67f57] p-3 rounded-2xl border-[2px] border-white">
                                <p className="text-white font-open.sans text-[10px] max-w-[200px]">Lorem ipsum dolor sit amet consectetur. Pharetra eget volutpat nec non.</p>
                            </div>
                        </div>

                        <div className={cn("absolute z-30 right-[90px] top-[200px] flex flex-col justify-center items-center opacity-0 transition-all duration-300 ease-in", show && "opacity-100")}>
                            <div className="flex flex-col items-start justify-center">
                                <div className="w-6 h-6 rounded-full border-[2px] border-white bg-[#b59b88] p-1 -ml-3">
                                    <div className="w-full h-full bg-white rounded-full"></div>
                                </div>
                                <Image
                                    src="/images/home/hero/livingroom/4.png"
                                    width={66}
                                    height={54}
                                    alt="hero"
                                    className="-mt-3"
                                />
                            </div>
                            <div className="bg-[#b67f57] p-3 rounded-2xl border-[2px] border-white">
                                <p className="text-white font-open.sans text-[10px] max-w-[200px]">Lorem ipsum dolor sit amet consectetur. Pharetra eget volutpat nec non.</p>
                            </div>
                        </div>

                    </div>
                }
                <div className="absolute w-full h-[105px] top-0 left-0 pt-7 flex justify-center items-end gap-5">

                    <div className="bg-white/30 p-2 rounded-full backdrop-blur-lg bg-opacity-60" onClick={() => setRoom(0)}>
                        <button type="button" className={cn("w-[150px] px-5 py-2 text-[#09060E] bg-white border border-white text-sm font-open.sans font-[700] rounded-full cursor-pointer", room !== 0 && "bg-[#e2dbd4]")}>
                            Livingroom
                        </button>
                    </div>

                    <div className="bg-white/30 p-2 rounded-full backdrop-blur-lg bg-opacity-60" onClick={() => setRoom(1)}>
                        <button type="button" className={cn("w-[150px] px-5 py-2 text-[#09060E] bg-white border border-white text-sm font-open.sans font-[700] rounded-full cursor-pointer", room !== 1 && "bg-[#e2dbd4]")}>
                            Kitchen
                        </button>
                    </div>

                    <div className="bg-white/30 p-2 rounded-full backdrop-blur-lg bg-opacity-60" onClick={() => setRoom(2)}>
                        <button type="button" className={cn("w-[150px] px-5 py-2 text-[#09060E] bg-white border border-white text-sm font-open.sans font-[700] rounded-full cursor-pointer", room !== 2 && "bg-[#e2dbd4]")}>
                            Bedroom
                        </button>
                    </div>

                    <div className="bg-white/30 p-2 rounded-full backdrop-blur-lg bg-opacity-60" onClick={() => setRoom(3)}>
                        <button type="button" className={cn("w-[150px] px-5 py-2 text-[#09060E] bg-white border border-white text-sm font-open.sans font-[700] rounded-full cursor-pointer", room !== 3 && "bg-[#e2dbd4]")}>
                            Terrace
                        </button>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Hero