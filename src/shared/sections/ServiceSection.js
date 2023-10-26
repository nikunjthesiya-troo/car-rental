import React from "react";
import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../constants";

const ServiceSection = () => {
	return (
		<div className="w-full flex flex-col items-center pb-[80px] bg-troo-primary-light text-troo-secondary">
			<div className="bg-troo-primary h-52 w-full" />
			<div className="-mt-28 main-container w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 2xl:gap-8">
				{SERVICES?.map((data, i) => {
					return (
						<ServiceCard
							key={i}
							title={data?.title}
							icon={data?.icon}
							description={data?.description}
							iconBig={data?.iconBig}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ServiceSection;
