import React from "react";
import img from "../assets/images/blog-detail.png";
import img2 from "../assets/images/blog-detail-image-2.png";
import CheckList from "../components/CheckList";
import Facebook from "../../shared/assets/images/icons/facebook.svg";
import Twitter from "../../shared/assets/images/icons/x.svg";
import LinkedIn from "../../shared/assets/images/icons/linkedin.svg";
import Instagram from "../../shared/assets/images/icons/instagram.svg";

const BlogDetailSection = () => {
	return (
		<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
			<div className="main-container-big w-full flex flex-col gap-6 items-start">
				<h3 className="font-bold">
					Renting A Car With A Debit Card Is Not A Dream!
				</h3>
				<div className="w-full relative rounded-xl overflow-hidden flex flex-col gap-4 md:block">
					<img
						src={img}
						alt="car"
						className="w-full rounded-xl aspect-video md:aspect-auto object-cover object-center"
					/>
					<div className="md:absolute bottom-4 right-4 p-6 rounded-xl flex flex-col items-start gap-4 bg-troo-primary text-troo-light">
						<div className="flex items-center gap-4">
							<div className="text-troo-yellow">
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
										d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
									/>
								</svg>
							</div>
							<p>Posted By: Admin</p>
						</div>
						<div className="flex items-center gap-4">
							<div className="text-troo-yellow">
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
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<p>Posted Date: 20 June, 2023</p>
						</div>
						<div className="flex items-center gap-4">
							<div className="text-troo-yellow">
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
										d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 6h.008v.008H6V6z"
									/>
								</svg>
							</div>
							<p>Tags: Car Rent, Self Drive Car</p>
						</div>
					</div>
				</div>
				<div className="w-[90%] flex flex-col items-start gap-5 self-center">
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text. All the Lorem Ipsum generators on the Internet tend
						to repeat predefined chunks as necessary, making this the first true
						generator on the Internet. It uses a dictionary of over 200 Latin
						words, combined with a handful of model sentence structures.
					</p>
					<h3 className="font-bold">When Should You Use Rental Cars?</h3>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text. All the Lorem.
					</p>
					<h3 className="font-bold">
						There Are Limitless Opportunities & Time Saving With Car Rentals
					</h3>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text. All the Lorem Ipsum generators on the Internet tend
						to repeat predefined.
					</p>
					<div className="p-5 bg-troo-primary-light border-t-2 border-troo-primary text-xl font-semibold">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything.
					</div>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum.
					</p>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-start md:items-center">
						<div className="w-full h-full overflow-hidden rounded-md">
							<img
								src={img2}
								alt="car"
								className="w-full h-full object-contain object-center"
							/>
						</div>
						<div className="flex flex-col items-start gap-4">
							<h4 className="font-bold">
								Benefits Of Hiring A Private Driver & Traveling
							</h4>
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable. If you are going to use a passage of Lorem
								Ipsum, you need to be sure there isn't anything embarrassing.
							</p>
							<CheckList txt="Every lorem ipsum dollr." />
							<CheckList txt="Using powerful lorem dollr " />
							<CheckList txt="Lorem ipsum dollr sit." />
						</div>
					</div>
					<div className="w-full flex flex-col flex-wrap md:flex-row items-start md:items-center justify-between gap-5 py-3 border-y border-troo-secondary border-opacity-20">
						<div className="flex flex-wrap items-center gap-2">
							Share this Article:
							<div className="p-2 bg-troo-secondary bg-opacity-75 rounded-full">
								<img src={Facebook} alt="facebook" className="w-4 h-4" />
							</div>
							<div className="p-2 bg-troo-secondary bg-opacity-75 rounded-full">
								<img src={Twitter} alt="twitter" className="w-4 h-4" />
							</div>
							<div className="p-2 bg-troo-secondary bg-opacity-75 rounded-full">
								<img src={LinkedIn} alt="linked in" className="w-4 h-4" />
							</div>
							<div className="p-2 bg-troo-secondary bg-opacity-75 rounded-full">
								<img src={Instagram} alt="instagram" className="w-4 h-4" />
							</div>
						</div>
						<div className="flex items-center flex-wrap gap-2">
							Tags:
							<div className="px-4 py-2 border border-troo-secondary border-opacity-75 bg-transparent bg-opacity-75 rounded-xl">
								Car Rent
							</div>
							<div className="px-4 py-2 border border-troo-secondary border-opacity-75 bg-transparent bg-opacity-75 rounded-xl">
								Car Rental Services
							</div>
						</div>
					</div>
					<div className="w-full flex flex-col items-start gap-6 mt-8">
						<div className="text-3xl font-bold">Write Comments (0)</div>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
							<div className="w-full flex flex-col items-start gap-3">
								<div className="flex w-full flex-col items-start gap-2">
									<p className="text-lg">Full Name</p>
									<input
										placeholder="Full Name"
										className="px-4 py-3 w-full rounded-lg bg-transparent border border-troo-secondary border-opacity-20"
									/>
								</div>
								<div className="flex w-full flex-col items-start gap-2">
									<p className="text-lg">Phone No.</p>
									<input
										placeholder="Phone No."
										className="px-4 py-3 w-full rounded-lg bg-transparent border border-troo-secondary border-opacity-20"
									/>
								</div>
								<div className="flex w-full flex-col items-start gap-2">
									<p className="text-lg">Email Address</p>
									<input
										placeholder="Email Address"
										className="px-4 py-3 w-full rounded-lg bg-transparent border border-troo-secondary border-opacity-20"
									/>
								</div>
							</div>
							<div className="w-full flex flex-col items-start justify-between gap-3">
								<div className="w-full flex flex-col items-start gap-2">
									<p className="text-lg">Write Comment</p>
									<textarea
										rows={5}
										placeholder="Write Comment"
										className="px-4 py-3 w-full rounded-lg bg-transparent border border-troo-secondary border-opacity-20"
									/>
								</div>
								<button className="btn-theme-primary flex">
									<span>Send Message</span>
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
		</div>
	);
};

export default BlogDetailSection;
