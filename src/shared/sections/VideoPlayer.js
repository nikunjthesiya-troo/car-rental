import React from "react";
import { motion } from "framer-motion";

const VideoPlayer = () => {
	return (
		<motion.div
			initial={{ y: 30 }}
			whileInView={{ y: 1 }}
			transition={{
				type: "spring",
				stiffness: 100,
			}}
			className="relative w-full h-[850px] overflow-hidden bg-video-banner bg-no-repeat bg-cover bg-center"
		>
			<div className="relative w-full h-full flex flex-col items-center justify-center bg-troo-secondary bg-opacity-50">
				<div className="absolute top-0 w-full bg-half-circle bg-top h-[100px]" />
				<div className="relative before:absolute flex items-center justify-center bg-troo-light text-troo-primary rounded-full p-8 text-4xl z-[1]">
					<div className="absolute w-full h-full bg-troo-light rounded-full bg-opacity-40 scale-125 -z-[1] animate-pulse animate-infinite duration-100 delay-75"></div>
					<div className="absolute w-full h-full bg-troo-light rounded-full bg-opacity-30 scale-150 -z-[1] animate-pulse animate-infinite duration-300 delay-200"></div>
					<div className="absolute w-full h-full bg-troo-light rounded-full bg-opacity-20 scale-[1.75] -z-[1] animate-pulse animate-infinite duration-700 delay-500"></div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-8 h-8"
						>
							<path
								fillRule="evenodd"
								d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<div className="absolute rotate-180 bottom-0 w-full bg-half-circle-2 bg-top h-[100px]" />
			</div>
		</motion.div>
	);
};

export default VideoPlayer;
