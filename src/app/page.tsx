import Footer from "@/components/ui/Footer";
import Automate from "./(section)/Automate";
import AutomateRes from "./(section)/AutomateRes";
import Contact from "./(section)/Contact";
import Empowering from "./(section)/Empowering";
import MobileApp from "./(section)/MobileApp";
import Review from "./(section)/Review";
import ReviewRes from "./(section)/ReviewRes";
import ImageSlider from "./(section)/sample";
import SmartHome from "./(section)/SmartHome";
import TrustedPartner from "./(section)/TrustedPartner";
import WeOffer from "./(section)/WeOffer";
import Working from "./(section)/Working";
import Whats from "./(section)/Whats";
import Built from "./(section)/Built";

export default function Home() {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<TrustedPartner />
			<WeOffer />
			<Working />
			<SmartHome />
			<MobileApp />
			<div className="hidden md:block md:w-full">
				<Automate />
			</div>
			<div className="block md:hidden md:w-full">
				<AutomateRes />
			</div>
			<Empowering />
			<Built />
			<div className="hidden md:block md:w-full">
				<Review />
			</div>
			<div className="md:hidden overflow-x-hidden">
				<ReviewRes />
			</div>
			<Whats />
			<Contact />
			<Footer />
			{/* <ImageSlider /> */}
			{/*
			 */}
		</div>
	);
}
