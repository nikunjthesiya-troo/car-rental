import React from "react";
import { Clock, PhoneCall } from "react-feather";
import Facebook from "../../shared/assets/images/icons/facebook.svg";
import Twitter from "../../shared/assets/images/icons/x.svg";
import LinkedIn from "../../shared/assets/images/icons/linkedin.svg";
import Instagram from "../../shared/assets/images/icons/instagram.svg";

const Header = () => {
	return (
		<div className="hidden sm:block py-2 bg-troo-primary text-troo-light w-full">
			<div className="main-container flex flex-col lg:flex-row h-full gap-4 lg:gap-8 items-center justify-between">
				<div className="lg:w-full flex items-center gap-4">
					<div className="flex text-troo-yellow items-center gap-2">
						<PhoneCall className="text-sm" size={16} />
						<p className="text-troo-light text-sm">
							Email Us: info@troocarrent.com
						</p>
					</div>
					<div className="flex text-troo-yellow items-center gap-2">
						<Clock size={16} />
						<p className="text-troo-light text-sm">
							Hours of Operation: 24 X 7
						</p>
					</div>
				</div>
				<div className="w-full hidden xl:flex items-center justify-center">
					<div className="text-sm py-1 px-3 bg-troo-yellow rounded-md text-troo-secondary">
						Now enjoy comfortable trip with TRoo Car Rent
					</div>
				</div>
				<div className="lg:w-full flex items-center justify-end gap-2 text-sm">
					<p>We Are on:</p>
					<div className="flex items-center gap-2">
						<div className="p-2 bg-troo-light bg-opacity-20 rounded-full">
							<img src={Facebook} alt="facebook" className="w-4 h-4" />
						</div>
						<div className="p-2 bg-troo-light bg-opacity-20 rounded-full">
							<img src={Twitter} alt="twitter" className="w-4 h-4" />
						</div>
						<div className="p-2 bg-troo-light bg-opacity-20 rounded-full">
							<img src={LinkedIn} alt="linked in" className="w-4 h-4" />
						</div>
						<div className="p-2 bg-troo-light bg-opacity-20 rounded-full">
							<img src={Instagram} alt="instagram" className="w-4 h-4" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
