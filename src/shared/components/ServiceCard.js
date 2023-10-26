import React from "react";

const ServiceCard = ({ icon, title, description, iconBig }) => {
	return (
		<div className="relative w-full shadow-2xl bg-troo-light rounded-lg flex flex-col items-start gap-4 md:gap-6 p-6 2xl:p-10">
			<div className="text-troo-primary p-3 rounded-full border border-troo-primary">
				{icon}
			</div>
			<div className="absolute top-10 right-10 text-troo-primary text-opacity-20">
				{iconBig}
			</div>
			<div className="w-full rounded-lg bg-troo-primary text-troo-light font-semibold px-4 py-2 md:py-3 md:text-lg 2xl:text-xl">
				{title}
			</div>
			<p className="text-sm md:text-base text-troo-secondary">{description}</p>
		</div>
	);
};

export default ServiceCard;
