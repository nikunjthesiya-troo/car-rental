import React from "react";
import Logo from "../../shared/assets/images/Logo.svg";
import Facebook from "../../shared/assets/images/icons/facebook.svg";
import Twitter from "../../shared/assets/images/icons/x.svg";
import LinkedIn from "../../shared/assets/images/icons/linkedin.svg";
import Instagram from "../../shared/assets/images/icons/instagram.svg";
import Clock from "../../shared/assets/images/icons/clock.svg";
import Location from "../../shared/assets/images/icons/location.svg";
import Phone from "../../shared/assets/images/icons/phone.svg";
const Footer = () => {
	return (
		<div className="pt-[50px] bg-troo-secondary text-troo-light bg-footer-top bg-no-repeat bg-left-top w-full">
			<div className="main-container-big flex h-full gap-8 items-center flex-col">
				<img src={Logo} alt="brand logo" />
				<p className="text-sm text-center">
					Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
					<br /> diska. Jinesade bel när feras redorade i belogi.
				</p>
				<div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 py-5 border-y-1 border-dashed border-troo-primary border-opacity-20">
					<div className="flex items-center gap-x-8 gap-y-4 flex-wrap justify-center">
						<p>Home</p>
						<p>About Us</p>
						<p>Services</p>
						<p>Portfolio</p>
						<p>News</p>
						<p>Contact Us</p>
					</div>
					<div className="flex flex-col sm:flex-row items-center gap-2">
						<p>Social Media</p>
						<div className="flex items-center gap-3">
							<div className="p-2 bg-troo-primary bg-opacity-20 rounded-full">
								<img src={Facebook} alt="facebook" className="w-4 h-4" />
							</div>
							<div className="p-2 bg-troo-primary bg-opacity-20 rounded-full">
								<img src={Twitter} alt="twitter" className="w-4 h-4" />
							</div>
							<div className="p-2 bg-troo-primary bg-opacity-20 rounded-full">
								<img src={LinkedIn} alt="linked in" className="w-4 h-4" />
							</div>
							<div className="p-2 bg-troo-primary bg-opacity-20 rounded-full">
								<img src={Instagram} alt="instagram" className="w-4 h-4" />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
					<div className="flex flex-col items-start gap-2">
						<h2 className="text-3xl md:text-6xl">Don’t Be Shy.</h2>
						<h2 className="text-3xl md:text-6xl">Say Hello</h2>
					</div>
					<div className="flex items-center gap-2 md:gap-6">
						<div className="w-full h-[2px] bg-troo-light"></div>
						<p className=" md:text-2xl font-semibold">contact@troothemes.com</p>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
					<div className="flex flex-col items-start gap-4">
						<h4>Have you any questions?</h4>
						<div className="flex items-start gap-3">
							<img src={Phone} className="w-8 h-8" alt="phone" />
							<p className="text-sm sm:text-base md:text-xl">
								+44 123 456 7890 <br />
								+44 123 456 7890
							</p>
						</div>
					</div>
					<div className="flex flex-col items-start gap-4">
						<h4>Visit our Shop</h4>
						<div className="flex items-start gap-3">
							<img src={Location} className="w-8 h-8" alt="phone" />
							<p className="text-sm sm:text-base md:text-xl">
								North Ewingar Road Lionsville, <br />
								New South Wales, 2460 Aus
							</p>
						</div>
					</div>
					<div className="flex flex-col items-start gap-4">
						<h4>Shop Hours</h4>
						<div className="flex items-start gap-3">
							<img src={Clock} className="w-8 h-8" alt="phone" />
							<p className="text-sm sm:text-base md:text-xl">
								Mon – Fri: 09am to 08pm
								<br /> Sat – Sun: 08am to 09pm
							</p>
						</div>
					</div>
				</div>
				<div className="w-full py-6 flex flex-col lg:flex-row items-center gap-10 justify-between border-t border-troo-primary border-opacity-10 text-sm md:text-base">
					<div className="flex items-center gap-6 text-center flex-wrap justify-center">
						<p>Terms & Conditions</p>
						<p>Cookie Policy</p>
						<p>Privacy Policy</p>
					</div>
					<p className="text-center">
						Copyright © 2023. troothemes. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
