'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"


interface reviewstype {
    imageurl: string,
    des: string,
    name: string
}

const reviews: reviewstype[] = [
    {
        imageurl: "/images/home/review/3.png",
        des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
        name: "Sarah D."
    },
    {
        imageurl: "/images/home/review/2.png",
        des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
        name: "Sarah D."
    },
    {
        imageurl: "/images/home/review/1.png",
        des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
        name: "Sarah D."
    },
    {
        imageurl: "/images/home/review/3.png",
        des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
        name: "Sarah D."
    },
    {
        imageurl: "/images/home/review/2.png",
        des: "“Opus has made my home life so much easier. The automation features are a game- changer!ˮ",
        name: "Sarah D."
    },
]

const Review = ({ }) => {
    return (
        <section className="w-full h-fit flex flex-col gap-12 justify-center items-center px-4 md:px-[130px] py-24">
            <div className="w-full flex flex-col gap-2 justify-center items-center">
                <p className="text-[#09060E] font-open.sans text-5xl font-[700]">What Our Customers Say</p>
                <p className="text-[#09060E] font-open.sans text-lg">Discover what our satisfied customer have to say about their experiences with our products/services</p>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {reviews?.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="w-full flex justify-center items-center p-1">
                                <Card
                                    style={{
                                        background: "linear-gradient(180deg, #FFF 0%,  #A484E3 100%)"
                                    }}
                                    className="w-4/5 rounded-4xl border-[1px] border-[#E7E5E5]"
                                >
                                    <CardContent className="flex flex-col items-center justify-center py-8 px-12 gap-6">
                                        <Image
                                            src={item?.imageurl}
                                            width={188}
                                            height={190}
                                            alt="review"
                                            className="rounded-full"
                                        />
                                        <p className="text-[#09060E] font-open.sans max-w-[500px] text-center text-lg">{item?.des}</p>
                                        <p className="text-lg text-[#09060E] font-open.sans text-center font-[700]">{item?.name}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="w-full flex justify-center items-center gap-5 mt-14">
                    <CarouselPrevious className="static hover:scale-[1.1] transition-all ease-in duration-200" />
                    <CarouselNext className="static hover:scale-[1.1] transition-all ease-in duration-200" />
                </div>
            </Carousel>
        </section>
    )
}

export default Review