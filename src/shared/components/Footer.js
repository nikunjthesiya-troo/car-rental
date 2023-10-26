import React from "react";
import Logo from "../../shared/assets/images/logo-light.svg";
import Facebook from "../../shared/assets/images/icons/facebook.svg";
import Twitter from "../../shared/assets/images/icons/x.svg";
import LinkedIn from "../../shared/assets/images/icons/linkedin.svg";
import Instagram from "../../shared/assets/images/icons/instagram.svg";

const Footer = () => {
	return (
		<div className="pt-[50px] bg-troo-secondary text-troo-light bg-footer-top bg-no-repeat bg-left-top w-full">
			<div className="main-container flex h-full gap-8 flex-col items-center w-full">
				<div className="w-full flex md:flex-row flex-col items-center py-4 border-y border-troo-light border-opacity-20 gap-4 justify-between">
					<img src={Logo} alt="brand logo" className="w-48 md:w-64" />
					<div className="flex items-center flex-wrap justify-center gap-x-8 gap-y-4 md:text-base text-sm">
						<p>Home</p>
						<p>About Us</p>
						<p>Our Fleet</p>
						<p>Our Blogs</p>
						<p>Contact Us</p>
					</div>
				</div>
				<div className="py-4 w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 flex flex-col items-start gap-6">
						<div className="w-full flex items-start flex-wrap gap-x-20 gap-y-8">
							<div className="flex flex-col items-start gap-4">
								<p className="uppercase text-lg font-bold">
									Have you any questions?
								</p>
								<div className="flex item-start gap-2">
									<div className="text-troo-yellow">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-8 h-8"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
											/>
										</svg>
									</div>
									<div className="flex flex-col items-start gap-1">
										<p>+44 123 456 7890</p>
										<p>contact@troocarrent.com</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start gap-4">
								<p className="uppercase text-lg font-bold">Visit our Office</p>
								<div className="flex item-start gap-2">
									<div className="text-troo-yellow">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-8 h-8"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
											/>
										</svg>
									</div>
									<div className="flex flex-col items-start gap-1">
										<p>4516 School Street</p>
										<p>Danbury, CT, Canada</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start gap-4">
								<p className="uppercase text-lg font-bold">Office time</p>
								<div className="flex item-start gap-2">
									<div className="text-troo-yellow">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-8 h-8"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div className="flex flex-col items-start gap-1">
										<p>Mon – Fri: 09am – 08pm </p>
										<p>Sat - Sun: Closed</p>
									</div>
								</div>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, do eiusmod tempor incididunt ut
							labore et dolore magna aliqua Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, do eiusmod tempor incididunt ut
							labore et dolore magna aliqua
						</p>
					</div>
					<div className="bg-troo-primary-light bg-opacity-5 w-full p-7 rouned-lg flex flex-col items-start gap-4">
						<p className="font-bold text-2xl uppercase">Our Newsletter</p>
						<div className="px-4 py-2 rounded-md bg-troo-light bg-opacity-5 outline-none flex items-center justify-between gap-2 w-full">
							<input
								type="email"
								placeholder="Email"
								className="bg-transparent border-none w-full outline-none"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
								/>
							</svg>
						</div>
						<div className="flex">
							<input
								type="checkbox"
								className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
								id="hs-checkbox-group-1"
							/>
							<label
								for="hs-checkbox-group-1"
								className="text-sm text-gray-500 ml-3 dark:text-gray-400"
							>
								Accept Terms & Conditions.
							</label>
						</div>
						<button className="btn-theme-primary flex">
							<span>Subscribe Now</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="py-3 rounded-t-md bg-troo-primary text-troo-light px-6 w-full flex lg:flex-row flex-col items-center justify-between gap-4 text-sm">
					<p className="lg:w-full text-center lg:text-left">
						Copyright © 2023. troothemes. All rights reserved.
					</p>
					<div className="lg:w-full flex items-center justify-center gap-2 text-sm">
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
					<div className="lg:w-full flex flex-wrap items-center lg:justify-end gap-5">
						<p>Terms & Conditions</p>
						<p>Cookie Policy</p>
						<p>Privacy Policy</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
