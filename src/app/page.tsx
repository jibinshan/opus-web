import Automate from "./(section)/Automate";
import AutomateRes from "./(section)/AutomateRes";
import Empowering from "./(section)/Empowering";
import MobileApp from "./(section)/MobileApp";
import SmartHome from "./(section)/SmartHome";
import WeOffer from "./(section)/WeOffer";
import Working from "./(section)/Working";

export default function Home() {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
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

			{/*
			 */}
		</div>
	);
}
