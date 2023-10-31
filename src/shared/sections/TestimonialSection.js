import React from "react";
import { TESTIMONIALS } from "../constants";
import TestimonialCard from "../components/TestimonialCard";
import { motion } from "framer-motion";
import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";

const TestimonialSection = ({ isListingPage }) => {
	return (
		<div
			className={`w-full py-[80px] bg-review bg-cover bg-center bg-no-repeat text-troo-secondary ${
				isListingPage ? "bg-troo-light" : "bg-troo-primary-light"
			}`}
		>
			<div className="main-container">
				{isListingPage ? (
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
						{TESTIMONIALS.map((data, i) => {
							return (
								<motion.div
									key={i}
									initial={{ y: 30, scale: 0.9, opacity: 0 }}
									whileInView={{ y: 1, scale: 1, opacity: 1 }}
									whileHover={{ scale: 0.95 }}
									transition={{
										type: "spring",
										stiffness: 100,
										delay: 0.1 * i,
									}}
									className="w-full cursor-pointer"
								>
									<TestimonialCard data={data} />
								</motion.div>
							);
						})}
					</div>
				) : (
					<div className="w-full bg-troo-light bg-review bg-cover bg-center bg-no-repeat rounded-xl flex flex-col items-start gap-10 p-4 md:p-12 lg:p-20">
						<div className="w-full flex md:flex-row flex-col md:items-center justify-between gap-6">
							<h2 className="text-4xl font-bold text-troo-secondary">
								What our valuable client
								<br /> say about our services
							</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								<br />
								industry. Lorem Ipsum has been the industry.
							</p>
						</div>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
							{TESTIMONIALS?.slice(0, 5).map((data, i) => {
								return (
									<motion.div
										key={i}
										initial={{ y: 30, scale: 0.9, opacity: 0 }}
										whileInView={{ y: 1, scale: 1, opacity: 1 }}
										whileHover={{ scale: 0.95 }}
										transition={{
											type: "spring",
											stiffness: 100,
											delay: 0.1 * i,
										}}
										className="w-full cursor-pointer"
									>
										<TestimonialCard data={data} />
									</motion.div>
								);
							})}
						</div>
						<Link to={ROUTES.clientReview}>
							<button className="btn-theme-primary-outlined flex self-center">
								<span>VIEW ALL TESTIMONIALS</span>
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
					</div>
				)}
			</div>
		</div>
	);
};

export default TestimonialSection;
