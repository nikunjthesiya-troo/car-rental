import React from "react";

const BlogCard = ({ data }) => {
	return (
		<div className="w-full flex flex-col gap-6">
			<div className="relative w-full aspect-video rounded-lg overflow-hidden">
				<img
					src={data?.img}
					alt="blog"
					className="w-full h-full object-cover object-center"
				/>
				<div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end p-5 bg-troo-primary bg-opacity-50">
					<div className="flex items-center flex-wrap gap-4">
						{data?.category?.map((item, i) => {
							return (
								<div className="px-4 rounded-lg py-3 bg-troo-light text-troo-secondary">
									{item}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col items-start gap-4">
				<h3 className="font-bold text-2xl lg:text-3xl">{data?.title}</h3>
				<p className="text-lg">{data?.description}</p>
				<div className="w-full py-3 border-y border-troo-primary border-opacity-20 flex items-center gap-4 justify-between">
					<div className="flex items-center gap-3">
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
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>
						</div>
						<p>{data?.authorName}</p>
					</div>
					<div className="flex items-center gap-3">
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
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
								/>
							</svg>
						</div>
						<p>{data?.date}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
