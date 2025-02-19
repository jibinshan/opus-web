import Image from "next/image"

const Automate = ({ }) => {
    return (
        <section className="w-full h-full flex flex-col justify-center items-start px-[100px] py-24 gap-12">
            <div className="w-full flex flex-col gap-3 justify-center items-center">
                <p className="font-[800] text-5xl font-inter"
                    style={{
                        background: 'linear-gradient(180deg, #FFF 0%, #4B3274 33.5%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}
                >Your Smart Home, Your Way</p>
                <p className="text-[#09060E] font-open.sans font-[600] text-2xl"> Automate Every Corner of Your Home with Opus</p>
            </div>
            <div className="w-full h-[160vh] flex flex-col justify-between items-center gap-4">
                <div className="relative w-full flex justify-center items-center">
                    <div className="relative h-fit">
                        <Image
                            src='/images/home/automate/1.png'
                            width={387}
                            height={265}
                            alt="automate"
                        />
                        <div className="absolute w-full h-[130px] bg-white/30 backdrop-blur-lg border-[1px] border-white z-20 -bottom-18 rounded-4xl px-6 py-3">
                            <p className="text-center text-[#09060E] text-[20px] font-[700]">Smart Lighting</p>
                            <p className="text-center text-sm">Create the perfect ambiance for every moment with intelligent  lighting systems that adjust to your preferences.</p>
                        </div>
                    </div>
                    <div className="absolute w-full h-full flex justify-between top-[230px]">
                        <div className="relative">
                            <Image
                                src='/images/home/automate/2.png'
                                width={387}
                                height={265}
                                alt="automate"
                            />
                            <div className="absolute w-full h-[130px] bg-white/30 backdrop-blur-lg border-[1px] border-white z-20 -bottom-18 rounded-4xl px-6 py-3">
                                <p className="text-center text-[#09060E] text-[20px] font-[700]">Seamless Integration with Your Lifestyle</p>
                                <p className="text-center text-sm">Effortlessly connect and control all your smart devices to match your unique daily routines and preferences.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src='/images/home/automate/3.png'
                                width={387}
                                height={265}
                                alt="automate"
                            />
                            <div className="absolute w-full h-[130px] bg-white/30 backdrop-blur-lg border-[1px] border-white z-20 -bottom-18 rounded-4xl px-6 py-3">
                                <p className="text-center text-[#09060E] text-[20px] font-[700]">Climate Control</p>
                                <p className="text-center text-sm">Maintain the ideal temperature with automated thermostats  and integrated air conditioning systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src='/images/home/automate/opus.png'
                        width={241}
                        height={82}
                        alt="automate"
                    />
                </div>
                <div className="relative w-full flex justify-center items-center">
                    <div className="relative">
                        <Image
                            src='/images/home/automate/4.png'
                            width={387}
                            height={265}
                            alt="automate"
                        />
                        <div className="absolute w-full h-[130px] bg-white/30 backdrop-blur-lg border-[1px] border-white z-20 -bottom-18 rounded-4xl px-6 py-3">
                            <p className="text-center text-[#09060E] text-[20px] font-[700]"> Security Automation</p>
                            <p className="text-center text-sm">Stay connected with real-time monitoring and
                                automated alarms designed to keep your family safe.</p>
                        </div>
                    </div>
                    <div className="absolute w-full h-full flex justify-between -top-[230px]">
                        <div className="relative">
                            <Image
                                src='/images/home/automate/5.png'
                                width={387}
                                height={265}
                                alt="automate"
                            />
                            <div className="absolute w-full h-[130px] bg-white/30 backdrop-blur-lg border-[1px] border-white z-20 -bottom-18 rounded-4xl px-6 py-3">
                                <p className="text-center text-[#09060E] text-[20px] font-[700]">Voice and App Integration</p>
                                <p className="text-center text-sm"> Control your home effortlessly using voice
                                    assistants or our user-friendly mobile app.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src='/images/home/automate/6.png'
                                width={387}
                                height={265}
                                alt="automate"
                            />
                            <div className="absolute w-full h-[130px] bg-white/30 backdrop-blur-lg border-[1px] border-white z-20 -bottom-18 rounded-4xl px-6 py-3">
                                <p className="text-center text-[#09060E] text-[20px] font-[700]">Home Entertainment</p>
                                <p className="text-center text-sm"> Enjoy seamless control over your TVs, speakers, and
                                    other entertainment devices.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Automate