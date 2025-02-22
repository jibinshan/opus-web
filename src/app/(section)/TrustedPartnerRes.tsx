import Image from "next/image"

const TrustedPartnerRes = ({ }) => {
    return (
        <section className="w-full px-3 pb-10 flex flex-col gap-3">
            <div className="w-full flex flex-col gap-2 justify-center items-center">
                <p className="w-full text-center font-inter font-[700] text-2xl"
                    style={{
                        background:
                            "linear-gradient(180deg, #6B2FE4 34.5%, #A484E3 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >Your Trusted Partner in <br />Smart Home Automation</p>
                <div className="w-full flex flex-col justify-center items-center">
                    <p className="text-[#09060E] font-open.sans text-center text-sm font-[600]">Opus RMT Systems is your gateway to the future of home automation. Our mission is to make your life more convenient, energy-efficient, and enjoyable through  innovative technology tailored to your lifestyle. With Opus, your home becomes  smarter, more comfortable, and seamlessly connected.</p>
                    <Image
                        src='/images/home/partner/resline1.png'
                        width={6}
                        height={45}
                        alt="line"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="p-2 border-[3px] border-[#62381a] rounded-2xl">
                    <Image
                        src='/images/home/partner/res1.png'
                        width={200}
                        height={130}
                        alt="1"
                    />
                </div>
                <div className="relative w-full flex justify-center items-center">
                    <Image
                        src='/images/home/partner/resline2.png'
                        width={31}
                        height={440}
                        alt="line"
                        className="max-h-[340px]"
                    />
                    <div className="absolute w-full h-full left-0 top-0 flex justify-between py-6">
                        <div className="w-[50%] flex flex-col gap-14 pl-4">
                            <div className="w-full flex justify-start">
                                <div className="w-fit p-2 border-[3px] border-[#62381a] rounded-2xl">
                                    <Image
                                        src='/images/home/partner/res2.png'
                                        width={105}
                                        height={64}
                                        alt="2"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-end">
                                <div className="w-fit p-2 border-[3px] border-[#62381a] rounded-2xl">
                                    <Image
                                        src='/images/home/partner/res3.png'
                                        width={129}
                                        height={87}
                                        alt="3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] flex flex-col gap-14 pl-2">
                            <div className="w-full flex justify-start">
                                <div className="w-fit p-2 border-[3px] border-[#62381a] rounded-2xl">
                                    <Image
                                        src='/images/home/partner/res5.png'
                                        width={133}
                                        height={91}
                                        alt="5"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-end">
                                <div className="w-fit p-2 border-[3px] border-[#62381a] rounded-2xl">
                                    <Image
                                        src='/images/home/partner/res4.png'
                                        width={127}
                                        height={83}
                                        alt="4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedPartnerRes