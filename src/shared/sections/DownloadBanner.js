import React from "react";
import screens from "../assets/images/screens.png";
import playStore from "../assets/images/googleplay.svg";
import appStore from "../assets/images/appstore.svg";
import { motion } from "framer-motion";
const DownloadBanner = () => {
	return (
		<div className="w-full py-[80px] bg-troo-light">
			<div className="main-container-big">
				<motion.div
					initial={{ y: 30, scale: 0.9, opacity: 0 }}
					whileInView={{ y: 1, scale: 1, opacity: 1 }}
					whileHover={{ scale: 0.95 }}
					transition={{
						type: "spring",
						stiffness: 100,
					}}
					className="w-full bg-troo-primary bg-banner bg-no-repeat bg-center bg-cover rounded-xl text-troo-light p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6"
				>
					<div className="flex flex-col items-start gap-2">
						<p className="text-xl">
							Get our mobile app for easy and convenient usage
						</p>
						<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
							Download Our Application
						</h3>
						<div className="flex items-center gap-2 mt-2">
							<div>
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
										d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
									/>
								</svg>
							</div>
							<p>Lorem Ipsum is simply dummy text </p>
						</div>
						<div className="flex items-center gap-2">
							<div>
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
										d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
									/>
								</svg>
							</div>
							<p>Lorem Ipsum is simply dummy text </p>
						</div>
						<div className="flex flex-col md:flex-row items-center gap-4 mt-5">
							<img src={playStore} className="w-full" alt="play store" />
							<img src={appStore} className="w-full" alt="app store" />
						</div>
					</div>
					<div className="bg-troo-light bg-opacity-10 rounded-full relative p-6">
						<img src={screens} alt="screens" className="w-full" />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default DownloadBanner;
