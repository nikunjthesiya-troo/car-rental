import React from "react";
import Star from "./Star";

const CarCard = ({ data, isListingPage }) => {
	return (
		<div className="w-full flex flex-col items-start rounded-md">
			<div className="relative w-full rounded-t-lg overflow-hidden">
				<div className="absolute w-full h-full top-0 left-0 p-4 flex flex-col items-center justify-between bg-troo-primary bg-opacity-70">
					<div />
					<div className="p-4 bg-troo-yellow text-troo-secondary text-4xl rounded-full aspect-square flex items-center justify-center text-center">
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
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
					</div>
					<div className="w-full flex justify-start">
						<div className="bg-troo-secondary flex items-center gap-1 text-troo-yellow p-3 rounded-md">
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</div>
					</div>
				</div>
				<img
					src={data?.img}
					alt="car"
					className="w-full object-cover object-center"
				/>
			</div>
			<div
				className={`w-full flex flex-col items-start gap-3 text-troo-secondary rounded-b-lg py-4 px-6 ${
					isListingPage ? "bg-troo-primary-light" : "bg-troo-light"
				}`}
			>
				<h3 className="text-2xl font-bold">{data?.title}</h3>
				<div className="w-full flex items-center gap-4 justify-between">
					<p className="font-bold">Base Rate:</p>
					<p>{data?.baseRate}</p>
				</div>
				<div className="w-full flex items-center gap-4 justify-between">
					<p className="font-bold">Seat Capacity:</p>
					<p>{data?.seatCapacity}</p>
				</div>
				<div className="w-full flex items-center gap-4 justify-between">
					<p className="font-bold">Car Type:</p>
					<p>{data?.carType}</p>
				</div>
				<div className="w-full flex items-center gap-4 justify-between">
					<p className="font-bold">Model:</p>
					<p>{data?.model}</p>
				</div>
				<div className="w-full flex items-center gap-4 justify-between">
					<p className="font-bold">Miles:</p>
					<p>{data?.miles}</p>
				</div>
				<button className="btn-theme-primary flex self-center -mb-10 shadow-lg">
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
	);
};

export default CarCard;
