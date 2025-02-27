import Image from "next/image"

const SmartHome = ({ }) => {
    return (
        <section className="w-full h-fit md:h-[100vh] flex flex-col md:flex-row justify-center items-center gap-4 px-4 md:px-[100px]"
            style={{
                backgroundImage: `url('/images/home/smart-home/background.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="w-full h-full md:w-2/5 flex flex-col md:flex-row gap-5 justify-center items-start pb-[100px] pt-0 md:pt-12 md:pb-12">
                <div className="block md:hidden w-full h-full px-6">
                    <p className="text-[#09060E] font-inter font-[800] text-2xl text-center">Why Choose Opus for Your Smart Home?</p>
                </div>
                <div className="relative w-full flex justify-center items-center">
                    <div className="w-8/12 md:w-fit relative p-4 rounded-xl bg-white/30 backdrop-blur-lg border-[1px] border-white z-20">
                        <Image
                            src='/images/home/smart-home/a.png'
                            width={306}
                            height={317}
                            alt="Smart Home"
                        />
                    </div>
                    <div className="absolute w-full flex justify-between items-start -bottom-[120px] md:-bottom-[220px]">
                        <div className="w-4/12 md:w-fit p-4 rounded-xl bg-white/30 backdrop-blur-lg border-[1px] border-white">
                            <Image
                                src='/images/home/smart-home/b.png'
                                width={140}
                                height={146}
                                alt="Smart Home"
                            />
                        </div>
                        <div className="w-5/12 md:w-fit p-4 rounded-xl bg-white/30 backdrop-blur-lg border-[1px] border-white">
                            <Image
                                src='/images/home/smart-home/c.png'
                                width={217}
                                height={225}
                                alt="Smart Home"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-full md:w-3/5 flex justify-center items-center py-12">
                <div className="hidden md:block absolute w-full h-full py-24 top-0 -left-16">
                    <p className="text-[#09060E] font-inter font-[800] text-[40px] min-w-[900px]">Why Choose Opus for Your Smart Home?</p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-16">
                    <div className="w-full flex flex-col gap-2 justify-start items-center">
                        <Image
                            src='/images/home/smart-home/1.png'
                            width={32}
                            height={32}
                            alt="Smart Home"
                        />
                        <p className="text-[#6B2FE4] font-[700] font-inter text-xl">Personalized Automation</p>
                        <p className="text-[#09060E] font-open.sans font-[600] font-lg text-center max-w-[300px]">Tailor your home automation to your lifestyle and
                            preferences.</p>
                    </div>
                    <div className="w-full flex flex-col gap-2 justify-start items-center">
                        <Image
                            src='/images/home/smart-home/2.png'
                            width={32}
                            height={32}
                            alt="Smart Home"
                        />
                        <p className="text-[#6B2FE4] font-[700] font-inter text-xl">Energy Efficiency</p>
                        <p className="text-[#09060E] font-open.sans font-[600] font-lg text-center max-w-[300px]">Save energy and reduce costs with intelligent systems  designed for optimal efficiency.</p>
                    </div>
                    <div className="w-full flex flex-col gap-2 justify-start items-center">
                        <Image
                            src='/images/home/smart-home/3.png'
                            width={32}
                            height={32}
                            alt="Smart Home"
                        />
                        <p className="text-[#6B2FE4] font-[700] font-inter text-xl">Remote Access</p>
                        <p className="text-[#09060E] font-open.sans font-[600] font-lg text-center max-w-[300px]">Control your home from anywhere, giving you peace of mind  and flexibility.</p>
                    </div>
                    <div className="w-full flex flex-col gap-2 justify-start items-center">
                        <Image
                            src='/images/home/smart-home/4.png'
                            width={32}
                            height={32}
                            alt="Smart Home"
                        />
                        <p className="text-[#6B2FE4] font-[700] font-inter text-xl">Seamless Integration</p>
                        <p className="text-[#09060E] font-open.sans font-[600] font-lg text-center max-w-[300px]"> All your smart devices working together in harmony,  powered by Opus.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmartHome