import React from "react";
import img from "../assets/images/about.png";
import aboutCar from "../assets/images/about-car.png";
const AboutSection = () => {
	return (
		<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
			<div className="relative main-container flex gap-6 items-center">
				<div className="w-[10%] hidden sm:flex items-center justify-center">
					<h2 className="text-troo-secondary text-opacity-10 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl -rotate-90 whitespace-nowrap">
						Safe. Fast. Quick
					</h2>
				</div>
				<div className="flex gap-6 items-start flex-col lg:flex-row 2xl:items-center justify-between w-full sm:w-[90%]">
					<div className="w-full overflow-hidden rounded-md">
						<img src={img} className="w-full h-full" alt="car" />
					</div>

					<div className="w-full flex flex-col items-start gap-4">
						<h3 className="text-3xl xl:text-4xl font-bold">
							A Rental Service for All-Car Lovers.
						</h3>
						<p className="xl:text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim minim
							veniam, quis nostrud exercitation ullamco laboris nisi esse cillum
							dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
							non proident.
						</p>
						<p className="xl:text-lg">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even
							slightly believable.
						</p>
						<div className="w-full grid sm:grid-cols-2 gap-5 my-4">
							<div className="flex sm:flex-row flex-col items-start gap-4">
								<div className="text-troo-light bg-troo-primary rounded-lg p-3 aspect-square">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="xl:w-8 xl:h-8 w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
										/>
									</svg>
								</div>
								<div className="flex flex-col items-start gap-3">
									<h4 className="font-bold text-2xl xl:text-3xl">
										Quality For Clients
									</h4>
									<p>There are many variations of passages of Lorem Ipsum.</p>
								</div>
							</div>
							<div className="flex sm:flex-row flex-col items-start gap-4">
								<div className="text-troo-light bg-troo-primary rounded-lg p-3 aspect-square">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="xl:w-8 xl:h-8 w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
										/>
									</svg>
								</div>
								<div className="flex flex-col items-start gap-3">
									<h4 className="font-bold text-2xl xl:text-3xl">
										Affordable Price
									</h4>
									<p>There are many variations of passages of Lorem Ipsum.</p>
								</div>
							</div>
						</div>
						<div className="xl:-ml-16 grid grid-cols-1 sm:grid-cols-3 w-full box-border shadow-2xl">
							<div className="border-4 h-full border-troo-yellow box-border sm:rounded-l-lg">
								<img
									src={aboutCar}
									className="w-full h-full object-cover"
									alt="car"
								/>
							</div>
							<div className="sm:col-span-2 h-full bg-troo-primary text-troo-light flex items-center gap-10 sm:rounded-r-lg justify-between px-6 md:px-10 py-7">
								<div className="flex flex-col items-start justify-center w-full gap-2 border-r">
									<h3 className="text-3xl xl:text-4xl font-bold">3460+</h3>
									<p className="xl:text-lg">Satisfied Customer</p>
								</div>
								<div className="flex flex-col items-start justify-center w-full gap-2">
									<h3 className="text-3xl xl:text-4xl font-bold">250+</h3>
									<p className="xl:text-lg">Skiled Staff</p>
								</div>
							</div>
						</div>
						<button className="btn-theme-primary-outlined flex mt-16">
							<span>Learn More</span>
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
		</div>
	);
};

export default AboutSection;
