import React from "react";
import HeroImg from "../../shared/assets/images/hero-img.png";
import { Input, Select, SelectItem } from "@nextui-org/react";

const HeroSection = () => {
	return (
		<div className="w-full py-[80px] bg-troo-primary-light text-troo-secondary">
			<div className="relative main-container flex gap-16 items-center justify-between">
				<div className="w-full flex flex-col items-start gap-4">
					<h2 className="text-7xl font-bold">
						We try our best to make your drive memorable
					</h2>
					<p className="text-xl">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</p>
					<div className="flex items-center gap-5 mt-5">
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
				<img
					src={HeroImg}
					alt="hero img"
					className="w-full h-full object-cover object-center"
				/>
				<div className="absolute w-[80%] p-8 rounded-lg bg-troo-light left-[5%] shadow-xl bottom-8 flex items-end gap-4 justify-between">
					<div className="flex flex-col items-start gap-3 w-full">
						<p>Car Type</p>
						<Select
							label="Select Car"
							classNames={{
								trigger: "bg-troo-primary bg-opacity-10",
							}}
						>
							<SelectItem>Maruti Suzuki</SelectItem>
							<SelectItem>Tata</SelectItem>
							<SelectItem>Kia</SelectItem>
							<SelectItem>Audi</SelectItem>
							<SelectItem>Ferrari</SelectItem>
						</Select>
					</div>
					<div className="flex flex-col items-start gap-3 w-full">
						<p>Pick Up Location</p>
						<Select
							size="md"
							label="Select Location"
							classNames={{
								trigger: "bg-troo-primary bg-opacity-10",
								innerWrapper: "pt-0",
							}}
						>
							<SelectItem>India</SelectItem>
							<SelectItem>Dubai</SelectItem>
							<SelectItem>United States</SelectItem>
							<SelectItem>United Kingdom</SelectItem>
							<SelectItem>Paris</SelectItem>
						</Select>
					</div>
					<div className="flex flex-col items-start gap-3 w-full">
						<p>Car Type</p>
						<Input
							size="lg"
							classNames={{
								inputWrapper: "bg-troo-primary bg-opacity-10",
								innerWrapper: "py-8",
							}}
							type="date"
							endContent={
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
										d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
									/>
								</svg>
							}
						/>
					</div>
					<div className="flex flex-col items-start gap-3 w-full">
						<p>Car Type</p>
						<Select
							label="Select Car"
							classNames={{
								trigger: "bg-troo-primary bg-opacity-10",
							}}
						>
							<SelectItem>Maruti Suzuki</SelectItem>
							<SelectItem>Tata</SelectItem>
							<SelectItem>Kia</SelectItem>
							<SelectItem>Audi</SelectItem>
							<SelectItem>Ferrari</SelectItem>
						</Select>
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
