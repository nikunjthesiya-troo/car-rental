import React from "react";
import img from "../assets/images/blog-detail.png";
import img2 from "../assets/images/blog-detail-image-2.png";

const BlogDetailSection = () => {
	return (
		<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
			<div className="main-container-big w-full flex flex-col gap-6 items-start">
				<h3 className="font-bold">
					Renting A Car With A Debit Card Is Not A Dream!
				</h3>
				<div className="w-full relative rounded-xl overflow-hidden">
					<img src={img} alt="car" className="w-full" />
					<div className="absolute bottom-4 right-4 p-6 rounded-xl flex flex-col items-start gap-4 bg-troo-primary text-troo-light">
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
				<div className="w-[90%] flex flex-col items-start gap-3 self-center">
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
					<div className="w-full grid grid-cols-2 gap-5 items-center">
						<div className="w-full h-full overflow-hidden rounded-md">
							<img
								src={img2}
								alt="car"
								className="w-full h-full object-contain object-center"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetailSection;
