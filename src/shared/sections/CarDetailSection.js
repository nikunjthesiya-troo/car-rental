import React from "react";
import car3 from "../assets/images/cars/2.png";
import D1 from "../assets/images/d1.png";
import D2 from "../assets/images/d2.png";
import D3 from "../assets/images/d3.png";
import D4 from "../assets/images/d4.png";
import D5 from "../assets/images/d5.png";
import Star from "../components/Star";

const CarDetailSection = () => {
	return (
		<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
			<div className="main-container-big w-full flex flex-col gap-6 items-start">
				<div className="w-full grid md:grid-cols-2 md:items-center gap-5">
					<img
						src={car3}
						alt="car"
						className="w-full h-full rounded-md object-center object-cover"
					/>
					<div className="w-full flex flex-col items-start gap-3">
						<div className="w-full flex items-center gap-4 justify-between">
							<div className="px-4 py-3 bg-troo-primary text-troo-light rounded-md">
								Rental
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-troo-yellow bg-opacity-10 flex items-center text-troo-yellow p-3 rounded-md">
									<Star />
									<Star />
									<Star />
									<Star />
									<Star />
								</div>
								<p>120 Reviews</p>
							</div>
						</div>
						<h3 className="font-bold">Rolls Royce Phantom</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim minim
							veniam.
						</p>
						<div className="w-full flex items-center flex-wrap gap-4">
							<div className="px-4 py-3 bg-transparent text-troo-secondary border border-troo-secondary rounded-md">
								4 Persons
							</div>
							<div className="px-4 py-3 bg-transparent text-troo-secondary border border-troo-secondary rounded-md">
								Black Lether Interior
							</div>
							<div className="px-4 py-3 bg-transparent text-troo-secondary border border-troo-secondary rounded-md">
								Wi-Fi
							</div>
							<div className="px-4 py-3 bg-transparent text-troo-secondary border border-troo-secondary rounded-md">
								2022 Model
							</div>
							<div className="px-4 py-3 bg-transparent text-troo-secondary border border-troo-secondary rounded-md">
								Electric Charging
							</div>
							<div className="px-4 py-3 bg-transparent text-troo-secondary border border-troo-secondary rounded-md">
								LED Lighting
							</div>
							<div className="px-4 py-3 bg-transparent text-troo-secondary border border-troo-secondary rounded-md">
								Rain Sensors
							</div>
						</div>
						<p>Price</p>
						<div className="flex items-center flex-wrap gap-4">
							<div className="text-troo-light bg-troo-primary px-4 py-3 rounded-md">
								<p>
									$ <span className="text-3xl font-bold">90</span> / per Hour
								</p>
							</div>
							<div className="text-troo-light bg-troo-secondary px-4 py-3 rounded-md">
								<p>
									$ <span className="text-3xl font-bold">195</span> / per Day
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full grid md:grid-cols-3 gap-6">
					<div className="md:col-span-2 w-full flex flex-col items-start gap-4">
						<div className="flex flex-col items-start gap-3">
							<h3 className="font-bold">Rolls Royce Phantom</h3>
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable. If you are going to use a passage of Lorem
								Ipsum, you need to be sure there isn't anything embarrassing
								hidden in the middle of text. All the Lorem Ipsum generators on
								the Internet tend to repeat predefined chunks as necessary,
								making this the first true generator on the Internet. It uses a
								dictionary of over 200 Latin words, combined with a handful of
								model sentence structures, to generate Lorem Ipsum which looks
								reasonable. The generated Lorem Ipsum is therefore always free
								from repetition, injected humour, or non-characteristic words
								etc.
							</p>
						</div>
						<div className="flex flex-col items-start gap-3">
							<h3 className="font-bold">Features & Options</h3>
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable. If you are going to use a passage of Lorem
								Ipsum, you need to be sure there isn't anything embarrassing
								hidden in the middle of text. All the Lorem Ipsum generators on
								the Internet tend to repeat predefined chunks as necessary.
							</p>
						</div>
						<div className="grid w-full md:grid-cols-2 gap-4">
							<div className="w-full p-5 rounded-xl bg-troo-primary-light flex items-start gap-4">
								<div className="p-3 bg-troo-primary rounded-lg bg-opacity-10 text-troo-primary font-bold text-2xl aspect-square">
									<p>01</p>
								</div>
								<div className="flex flex-col items-start gap-2">
									<h4 className="font-bold">High Safety and Nurity</h4>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have.
									</p>
								</div>
							</div>
							<div className="w-full p-5 rounded-xl bg-troo-primary-light flex items-start gap-4">
								<div className="p-3 bg-troo-primary rounded-lg bg-opacity-10 text-troo-primary font-bold text-2xl aspect-square">
									<p>02</p>
								</div>
								<div className="flex flex-col items-start gap-2">
									<h4 className="font-bold">Luxury Limousine Selectiont</h4>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have.
									</p>
								</div>
							</div>
							<div className="w-full p-5 rounded-xl bg-troo-primary-light flex items-start gap-4">
								<div className="p-3 bg-troo-primary rounded-lg bg-opacity-10 text-troo-primary font-bold text-2xl aspect-square">
									<p>03</p>
								</div>
								<div className="flex flex-col items-start gap-2">
									<h4 className="font-bold">Fixed Price & Bonus System</h4>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have.
									</p>
								</div>
							</div>
							<div className="w-full p-5 rounded-xl bg-troo-primary-light flex items-start gap-4">
								<div className="p-3 bg-troo-primary rounded-lg bg-opacity-10 text-troo-primary font-bold text-2xl aspect-square">
									<p>04</p>
								</div>
								<div className="flex flex-col items-start gap-2">
									<h4 className="font-bold">Clean, Polite & Knowledgeable</h4>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have.
									</p>
								</div>
							</div>
						</div>
						<p>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even
							slightly believable.
						</p>
						<div className="w-full flex flex-col items-start gap-4">
							<h3 className="font-bold">Car Interior Image</h3>
							<div className="w=full grid grid-cols-3 gap-4">
								<div className="w-full h-full col-span-3 overflow-hidden rounded-xl">
									<img
										src={D1}
										alt="car"
										className="w-full h-full object-cover object-center"
									/>
								</div>
								<div className="w-full h-full overflow-hidden rounded-xl">
									<img
										src={D2}
										alt="car"
										className="w-full h-full object-cover object-center"
									/>
								</div>
								<div className="w-full h-full overflow-hidden rounded-xl">
									<img
										src={D3}
										alt="car"
										className="w-full h-full object-cover object-center"
									/>
								</div>
								<div className="w-full h-full overflow-hidden rounded-xl">
									<img
										src={D4}
										alt="car"
										className="w-full h-full object-cover object-center"
									/>
								</div>
							</div>
						</div>
						<button className="btn-theme-primary-outlined flex">
							<span>Book This Car</span>
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
					<div className="w-full flex flex-col items-start overflow-hidden rounded-xl">
						<div className="w-full aspect-video overflow-hidden">
							<img
								src={D5}
								alt="car"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="w-full bg-troo-primary overflow-hidden text-troo-light flex flex-col items-center justify-center gap-3 text-center p-6 rounded-b-xl">
							<p className="">
								<span className="text-troo-yellow font-bold">25% Discount</span>{" "}
								on First Car Rent
							</p>
							<p className="text-2xl font-bold text-troo-light">
								Premium class cars for your comfort travel
							</p>
							<button className="btn-theme-light flex">
								<span>BOOK NOW</span>
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
		</div>
	);
};

export default CarDetailSection;
