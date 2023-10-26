import React from "react";
import Star from "./Star";
import quoteIcon from "../assets/images/quote.svg";

const TestimonialCard = ({ data }) => {
	return (
		<div className="w-full bg-troo-light border border-troo-secondary border-opacity-10 rounded-lg p-8 flex flex-col items-start gap-6">
			<div className="bg-troo-yellow bg-opacity-10 flex items-center text-troo-yellow p-3 rounded-md">
				<Star />
				<Star />
				<Star />
				<Star />
				<Star />
			</div>
			<div className="py-4 border-y border-troo-secondary border-opacity-10">
				{data?.description}
			</div>
			<div className="w-full flex items-center justify-between gap-5">
				<div className="flex items-center gap-5">
					<div className="w-12 h-12 md:w-20 md:h-20 aspect-square overflow-hidden rounded-full outline-2 outline-dashed outline-offset-4 outline-troo-primary">
						<img
							src={data?.img}
							alt="review"
							className="w-full h-full object-cover object-center shadow"
						/>
					</div>
					<div>
						<h2 className="text-xl md:text-2xl font-bold">{data?.title}</h2>
						<p>{data?.designation}</p>
					</div>
				</div>
				<div className="aspect-square p-4 rounded-full bg-troo-secondary">
					<img src={quoteIcon} alt="quote" className="w-full" />
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
