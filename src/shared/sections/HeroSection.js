import React from "react";
import HeroImg from "../../shared/assets/images/hero-img.png";

const HeroSection = () => {
	return (
		<div className="w-full py-[80px] bg-troo-primary-light text-troo-secondary">
			<div className="relative main-container flex flex-col gap-8 items-start justify-between">
				<div className="w-full flex md:flex-row flex-col items-start justify-between gap-16">
					<div className="w-full flex flex-col  2xl:mt-32 items-start gap-4">
						<h2 className="text-4xl md:text-5xl 2xl:text-7xl font-bold">
							We try our best to make your drive memorable
						</h2>
						<p className="text-base md:text-xl">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s
						</p>
						<div className="flex sm:flex-row flex-col sm:items-center gap-3 md:gap-5 mt-5">
							<button className="btn-theme-primary flex">
								<span>GET A QUOTE</span>
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
							<button className="btn-theme-primary-outlined flex">
								<span>View Car Listing</span>
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
					<div className="w-full overflow-hidden rounded-lg">
						<img
							src={HeroImg}
							alt="hero img"
							className="w-full h-full object-cover object-center"
						/>
					</div>
				</div>
				<div className="xl:absolute w-full xl:w-[80%] p-8 rounded-lg bg-troo-light left-[5%] shadow-xl bottom-8 flex items-end flex-wrap lg:flex-nowrap gap-4 justify-between">
					<div className="flex flex-col items-start gap-3 w-full">
						<p>Car Type</p>
						<select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-10 sm:p-4">
							<option selected>Select Car</option>
							<option>Honda</option>
							<option>Bentley</option>
							<option>Ferrari</option>
						</select>
					</div>
					<div className="flex flex-col items-start gap-3 w-full">
						<p>Pick Up Location</p>
						<select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-10 sm:p-4">
							<option selected>Select Location</option>
							<option>India</option>
							<option>New York</option>
							<option>Dubai</option>
						</select>
					</div>
					<div className="flex flex-col items-start gap-3 w-full">
						<p>Pick Up Date</p>
						<input
							type="date"
							id="input-label"
							className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-10 sm:p-4"
							placeholder="Pick Up Date"
						/>
					</div>
					<div className="flex flex-col items-start gap-3 w-full">
						<p>Return Date</p>
						<input
							type="date"
							id="input-label"
							className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-10 sm:p-4"
							placeholder="Return Date"
						/>
					</div>

					<button className="btn-theme-primary flex">
						<span>GET A QUOTE</span>
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
		</div>
	);
};

export default HeroSection;
