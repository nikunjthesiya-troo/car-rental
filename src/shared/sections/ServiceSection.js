import React from "react";
import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../constants";
import { motion } from "framer-motion";

const ServiceSection = () => {
	return (
		<div className="w-full flex flex-col items-center pb-[80px] bg-troo-primary-light text-troo-secondary">
			<div className="bg-troo-primary h-52 w-full" />
			<div className="-mt-28 main-container w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 2xl:gap-8">
				{SERVICES?.map((data, i) => {
					return (
						<motion.div
							key={i}
							initial={{ y: 30, scale: 0.9, opacity: 0 }}
							whileInView={{ y: 1, scale: 1, opacity: 1 }}
							whileHover={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 100, delay: 0.1 * i }}
							className="w-full cursor-pointer"
						>
							<ServiceCard
								title={data?.title}
								icon={data?.icon}
								description={data?.description}
								iconBig={data?.iconBig}
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default ServiceSection;
