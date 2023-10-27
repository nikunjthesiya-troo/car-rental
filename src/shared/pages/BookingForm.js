import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";
import carImg from "../assets/images/cars/3.png";

const BookingForm = () => {
	return (
		<Layout>
			<SubHeroSection title="Booking Form" />
			<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
				<div className="relative main-container-big gap-6 items-center">
					<div className="w-full grid md:grid-cols-3 gap-5">
						<div className="w-full flex flex-col items-start gap-4">
							<div className="w-full px-4 py-8 flex flex-col items-start bg-troo-primary-light rounded-lg gap-4">
								<h3 className="text-troo-secondary font-bold text-2xl">
									Booking Detail
								</h3>
								<div className="w-full aspect-video overflow-hidden rounded-md">
									<img
										src={carImg}
										alt="car"
										className="w-full h-full object-cover object-center"
									/>
								</div>
								<div className="flex flex-col items-start gap-1">
									<h5 className="font-semibold">Car Name and Model</h5>
									<p>Porche Taycan Sport 6</p>
								</div>
								<div className="flex flex-col items-start gap-1">
									<h5 className="font-semibold">Price</h5>
									<p>$ 199.00 / per day, $ 49.00 / per hour</p>
								</div>
								<div className="flex flex-col items-start gap-1">
									<h5 className="font-semibold">Car Feature</h5>
									<p>4 Persons, Automatic, Black Lether Interior, Wi-Fi, </p>
								</div>
							</div>
							<div className="w-full bg-troo-primary text-center rounded-lg text-troo-light p-10 flex flex-col items-center gap-3">
								<p>
									<span className="font-bold text-troo-yellow">
										25% Discount
									</span>{" "}
									on First Car Rent
								</p>
								<h5 className="font-bold  text-3xl">
									Premium class cars for your comfort travel
								</h5>
								<button className="btn-theme-light-outlined flex">
									<span>Book Now</span>
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
						<div className="w-full col-span-2  flex flex-col items-start gap-4 p-6 md:p-12 bg-troo-primary-light rounded-lg">
							<div className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-6">
								<div className="flex flex-col items-start gap-3">
									<p>First Name</p>
									<input
										type="text"
										placeholder="First Name"
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									/>
								</div>
								<div className="flex flex-col items-start gap-3">
									<p>Last Name</p>
									<input
										type="text"
										placeholder="Last Name"
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									/>
								</div>
								<div className="flex flex-col items-start gap-3">
									<p>Phone</p>
									<input
										type="text"
										placeholder="Phone"
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									/>
								</div>
								<div className="flex flex-col items-start gap-3">
									<p>Email</p>
									<input
										type="text"
										placeholder="Email"
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									/>
								</div>
								<div className="flex flex-col items-start gap-3">
									<p>Car and model</p>
									<input
										type="text"
										placeholder="Car and model"
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									/>
								</div>
								<div className="flex flex-col items-start gap-3">
									<p>Seat</p>
									<input
										type="text"
										placeholder="Seat"
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									/>
								</div>
								<div className="flex flex-col items-start gap-3">
									<p>Select Date</p>
									<input
										type="date"
										placeholder="Seat"
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									/>
								</div>
								<div className="flex flex-col items-start gap-3">
									<p>Time</p>
									<input
										type="text"
										placeholder="Time"
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									/>
								</div>
								<div className="flex flex-col col-span-2 items-start gap-3">
									<p>Special Request</p>
									<textarea
										className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
										rows={5}
										placeholder="Special Request"
									></textarea>
								</div>
							</div>
							<button className="btn-theme-primary flex">
								<span>Book Now</span>
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
			<DownloadBanner />
		</Layout>
	);
};

export default BookingForm;
