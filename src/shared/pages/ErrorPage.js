import React from "react";

const ErrorPage = () => {
	return (
		<div className="w-full min-h-screen bg-error bg-cover bg-no-repeat bg-center text-troo-secondary">
			<div className="main-container py-[150px] flex flex-col gap-6">
				<div className="flex flex-col items-start">
					<h2 className="text-8xl sm:text-9xl md:text-[200px] font-bold text-troo-yellow">
						404
					</h2>
					<div className="text-xl sm:text-2xl md:text-3xl text-troo-light md:mt-20">
						Sorry! page did not found
					</div>
					<div className="text-sm sm:text-base md:text-xl text-troo-light mt-8">
						The page you look for does not exist or another error occured
						<br /> please kindly refreash or retun to home page.
					</div>
					<button className="btn-theme-light-outlined flex mt-8">
						<span>Go to Homepage</span>
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
		</div>
	);
};

export default ErrorPage;
