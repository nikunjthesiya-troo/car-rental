import React from "react";
import car from "../assets/images/car.svg";
import CheckList from "./CheckList";

const PricingCard = ({ price, pkg }) => {
	return (
		<div className="w-full rounded-lg bg-troo-primary-light p-8 flex flex-wrap items-center gap-4 justify-between">
			<div className="bg-troo-light p-6 rounded-lg flex items-start flex-col">
				<div className="w-full flex items-center gap-8 justify-between">
					<h4 className="text-troo-primary font-bold">{pkg}</h4>
					<img src={car} className="" alt="car" />
				</div>
				<div className="w-full flex items-center gap-4">
					<h3 className="font-bold">${price}</h3>
					<p>/per month</p>
				</div>
			</div>
			<div className="flex sm:flex-row flex-col items-start gap-3 md:gap-10">
				<div className="flex flex-col items-start gap-3">
					<CheckList txt="Choose The Car You Like" />
					<CheckList txt="Quick Set-up Facility" />
					<CheckList txt="Bigger Fleet Capacity" />
				</div>
				<div className="flex flex-col items-start gap-3">
					<CheckList txt="MaximumSatisfaction. Enjoy" />
					<CheckList txt="Save Money WithOur Rental" />
					<CheckList txt="Transport And Comfortable Experience" />
				</div>
			</div>
			<button className="btn-theme-primary-outlined flex">
				<span>Choose This Package</span>
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
	);
};

export default PricingCard;
