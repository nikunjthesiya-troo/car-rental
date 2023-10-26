import React from "react";

const Accordian = ({ data, isActive }) => {
	return (
		<div
			className={`hs-accordion border border-troo-primary border-opacity-20 px-4 w-full rounded-lg ${
				isActive ? "active" : ""
			}`}
			id={data?.id}
		>
			<button
				className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500"
				aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
			>
				<div className="flex flex-col items-start md:flex-row md:items-center gap-4 font-bold text-lg md:text-xl">
					<p>Question</p>
					<p>{data?.que}</p>
				</div>
				<svg
					class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
				<svg
					class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</button>
			<div
				id={data?.id}
				className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
					!isActive ? "hidden" : ""
				}`}
				aria-labelledby={data?.id}
			>
				<div className="py-3 text-theme-gray-dark flex flex-col items-start md:flex-row md:items-center gap-4 text-sm md:text-lg">
					<p className="font-bold text-lg md:text-xl">Answer</p>
					<p>{data?.ans}</p>
				</div>
			</div>
		</div>
	);
};

export default Accordian;
