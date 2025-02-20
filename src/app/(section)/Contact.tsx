'use client'
import Image from "next/image"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const FormValidation = z.object({
    name: z.string().min(1, "please enter your name"),
    phone: z.string().min(11, "Please enter a valid phone number with 11 digits").max(11, "Please enter a valid phone number with 11 digits"),
    email: z.string().min(1, "please enter your email"),
    reason: z.string().min(1, "please enter reason"),
    message: z.string().optional(),
});


type FormData = z.infer<typeof FormValidation>;

const Contact = ({ }) => {

    const form = useForm<FormData>({
        resolver: zodResolver(FormValidation),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            reason: "",
            message: "",
        },
    });


    const onSubmit = (data: FormData) => {
        console.log(data);

    };

    return (
        <section className="w-full h-fit flex justify-center items-center md:px-[100px] py-24">
            <div className="w-full h-fit flex justify-center items-center md:border-[2px] md:border-[#b8b5b5] md:rounded-2xl"
                style={{
                    background: "linear-gradient(180deg, #F9F7FA 47.1%, #E6B5FF 100%);",
                }}
            >
                <div className="hidden md:block w-1/3">
                    <Image
                        src='/images/home/contact/contact.png'
                        width={471}
                        height={798}
                        alt="contact"
                    />
                </div>
                <div className="w-full md:w-2/3 px-5 md:px-12 pt-6 pb-8 flex flex-col justify-center items-center gap-7 md:gap-4">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="text-[#09060E] font-[600] font-inter text-3xl md:text-5xl text-center">Contact Us</p>
                        <p className="text-[#09060E] font-[600] font-inter text-base md:text-xl text-center">Weʼre Here to Help</p>
                        <p className="text-[#09060E] font-[200] font-open.sans text-sm md:text-base text-center">Got questions or need assistance? Contact us today!</p>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center md:justify-center items-center gap-4 md:gap-16">
                        <div className="bg-white/30 w-[200px] h-[140px] backdrop-blur-lg border-[2px] border-[#dfd0d0] flex flex-col justify-between items-center gap-2 p-5 rounded-3xl">
                            <Image
                                src='/images/home/contact/1.png'
                                width={28}
                                height={28}
                                alt="mail"
                            />
                            <p className="text-[#09060E] text-center font-open.sans font-[700] text-sm">Email</p>
                            <p className="text-[#09060E] text-center font-open.sans font-[600] text-xs">hello@opusrmt.com</p>
                        </div>
                        <div className="bg-white/30 w-[200px] h-[140px] backdrop-blur-lg border-[2px] border-[#dfd0d0] flex flex-col justify-between items-center gap-2 p-5 rounded-3xl">
                            <Image
                                src='/images/home/contact/2.png'
                                width={28}
                                height={28}
                                alt="mail"
                            />
                            <p className="text-[#09060E] text-center font-open.sans font-[700] text-sm">WhatsApp / Phone</p>
                            <p className="text-[#09060E] text-center font-open.sans font-[600] text-xs">+91 8075308255</p>
                        </div>
                        <div className="bg-white/30 w-[200px] h-[140px] backdrop-blur-lg border-[2px] border-[#dfd0d0] flex flex-col justify-between items-center gap-2 p-5 rounded-3xl">
                            <Image
                                src='/images/home/contact/3.png'
                                width={28}
                                height={28}
                                alt="mail"
                            />
                            <p className="text-[#09060E] text-center font-open.sans font-[700] text-sm">Address</p>
                            <p className="text-[#09060E] text-center font-open.sans font-[600] text-xs">Regency Mall, Mamom Rd,<br /> Trivandrum, Kerala-695103</p>
                        </div>
                    </div>
                    <div className="w-full bg-white/30 backdrop-blur-lg border-[2px] border-[#dfd0d0] p-6 rounded-3xl">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel htmlFor="name" className="text-black font-inter text-base font-[500]">Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="h-11 w-full rounded-lg border-none bg-[#fefdff] pl-4 active:outline-none active:ring-0 focus-visible:ring-0 border-[1px] border-[#d0d0d0] ring-[1px] ring-[#d0d0d0]"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel htmlFor="name" className="text-black font-inter text-base font-[500]">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="h-11 w-full rounded-lg border-none bg-[#fefdff] pl-4 active:outline-none active:ring-0 focus-visible:ring-0 border-[1px] border-[#d0d0d0] ring-[1px] ring-[#d0d0d0]"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel htmlFor="name" className="text-black font-inter text-base font-[500]">Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    className="h-[70px] w-full rounded-lg border-none bg-[#fefdff] pl-4 active:outline-none active:ring-0 focus-visible:ring-0 border-[1px] border-[#d0d0d0] ring-[1px] ring-[#d0d0d0]"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="w-full flex justify-center md:justify-end">
                                    <Button className="bg-[#6b2fe4] rounded-4xl text-white font-inter text-base font-[500] flex justify-center items-center gap-1 py-6 px-8">
                                        <Send className="w-6 h-6" />
                                        <span>Submit</span>
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact