import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";

const SubHeroSection = ({ title }) => {
	return (
		<div className="relative py-16 w-full bg-troo-primary-light">
			<div className="main-container flex flex-col h-full items-center">
				<div className="flex w-full flex-col items-center justify-center text-troo-light gap-6">
					<motion.h2
						initial={{ y: -10, scale: 0.9, opacity: 0 }}
						whileInView={{ y: 1, scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
						}}
						className="text-troo-primary font-semibold"
					>
						{title}
					</motion.h2>
				</div>
			</div>
			<div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
				<Breadcrumbs />
			</div>
		</div>
	);
};

export default SubHeroSection;
