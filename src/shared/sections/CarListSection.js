import React from "react";
import { CARS } from "../constants";
import CarCard from "../components/CarCard";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const CarListSection = ({ isListingPage }) => {
	return (
		<div
			className={`w-full py-[80px] text-troo-secondary ${
				isListingPage ? "bg-troo-light" : "bg-troo-light"
			}`}
		>
			<div className="main-container flex flex-col gap-8 items-center">
				{!isListingPage && (
					<div className="flex flex-col items-center text-center gap-4">
						<h2 className="text-4xl font-bold text-troo-secondary">
							Explore The Range Of Our Cars
						</h2>
						<p className="text-troo-secondary">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							<br />
							industry. Lorem Ipsum has been the industry.
						</p>
					</div>
				)}
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-14">
					{isListingPage
						? CARS?.map((data, i) => {
								return <CarCard isListingPage={isListingPage} data={data} />;
						  })
						: CARS?.slice(0, 5)?.map((data, i) => {
								return <CarCard isListingPage={isListingPage} data={data} />;
						  })}
				</div>
				{!isListingPage && (
					<Link to={ROUTES.ourFleets}>
						<button className="btn-theme-primary-outlined flex mt-16">
							<span>View Car Fleets</span>
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
					</Link>
				)}
			</div>
		</div>
	);
};

export default CarListSection;
