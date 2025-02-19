import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Empowering = ({ }) => {
    return (
        <section className="w-full h-fit md:h-[100vh] flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="relative w-full md:w-1/2 h-full flex flex-col justify-center items-center px-6 pt-12 pb-24 md:pb-12">
                <div className="absolute w-full h-full left-0 top-0 overflow-y-hidden">
                    <div className="w-2/5 md:w-1/3 flex justify-between overflow-y-hidden">
                        <div className="flex gap-2 md:gap-3">
                            <Image
                                src='/images/home/empowering/bg.png'
                                width={53}
                                height={715}
                                alt="bg"
                                className="h-[100vh]"
                            />
                            <Image
                                src='/images/home/empowering/bg.png'
                                width={53}
                                height={715}
                                alt="bg"
                            />
                        </div>
                        <div className="flex gap-2 md:gap-3">
                            <Image
                                src='/images/home/empowering/bg.png'
                                width={53}
                                height={715}
                                alt="bg"
                            />
                            <Image
                                src='/images/home/empowering/bg.png'
                                width={53}
                                height={715}
                                alt="bg"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-fit bg-white/30 backdrop-blur-lg border-[5px] border-white py-8 px-6 md:px-12 rounded-4xl z-30 flex flex-col justify-center items-center gap-12 md:gap-16">
                    <div className="flex flex-col justify-center items-center gap-1">
                        <p className="text-black text-lg md:text-2xl font-inter font-[800]">Energy Monitoring</p>
                        <p className="font-inter text-center text-sm md:text-base">Track your usage and optimize your consumption.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <p className="text-black text-lg md:text-2xl font-inter font-[800]">Smart Schedules</p>
                        <p className="font-inter text-center text-sm md:text-base"> Automate energy-intensive tasks for off-peak hours.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <p className="text-black text-lg md:text-2xl font-inter font-[800]">Eco-Friendly Practices</p>
                        <p className="font-inter text-center text-sm md:text-base"> Reduce your carbon footprint without compromising  comfort.</p>
                    </div>
                </div>
                <div className="absolute w-full justify-center bottom-0 left-0 py-6 md:py-12 bg-transparent">
                    <Link href='#' className="text-[#6B2FE4] font-[600] flex justify-center items-center gap-1">
                        <span>Make Your Home Smart Now</span>
                        <ArrowRight className="w-4 h-4 md:h-6 md:w-6 text-[#6B2FE4]" />
                    </Link>
                </div>
            </div >
            <div className="w-full md:w-1/2 h-full flex flex-col bg-[#e6f6e6] justify-center items-center text-center py-12 px-6 gap-6 md:gap-12">
                <p className="text-[#09060E] text-2xl md:text-3xl font-inter font-[800]">Empowering Sustainable Living</p>
                <div className="w-full flex flex-col justify-center items-center gap-6">
                    <Image
                        src='/images/home/empowering/image.png'
                        width={400}
                        height={349}
                        alt="empowering"
                        className="w-9/12 md:w-[400px]"
                    />
                    <div className="flex flex-col justify-center items-center gap-2">
                        <p className="text-[#09060E] font-open.sans font-[600] text-lg md:text-xl text-center">Smarter Homes for a Greener Planet</p>
                        <p className="font-open.sans text-[#09060E] max-w-[450px] text-center text-sm md:text-base"> At Opus, we believe in making the world a better placeone home at a time. Our  energy-efficient automation solutions are designed to minimize waste, reduce  costs, and create a sustainable future.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Empowering