import React from "react";
import { TEAM } from "../constants";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const TeamSection = ({ isListingPage }) => {
	return (
		<div
			className={`w-full py-[80px]  text-troo-secondary ${
				isListingPage ? "bg-troo-light" : "bg-troo-primary-light"
			}`}
		>
			<div className="main-container-big flex flex-col gap-8 items-center">
				{!isListingPage && (
					<div className="flex flex-col items-center text-center gap-4">
						<h2 className="text-4xl font-bold text-troo-secondary">
							Let’s Meet with Our Expert
							<br /> Team Member
						</h2>
						<p className="text-troo-secondary">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							<br />
							industry. Lorem Ipsum has been the industry.
						</p>
					</div>
				)}
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-14">
					{isListingPage
						? TEAM?.map((data, i) => {
								return <TeamCard data={data} />;
						  })
						: TEAM?.slice(0, 4)?.map((data, i) => {
								return <TeamCard data={data} />;
						  })}
				</div>
				{!isListingPage && (
					<Link to={ROUTES.ourTeam}>
						<button className="btn-theme-primary-outlined flex mt-16">
							<span>Meet All Members</span>
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
					</Link>
				)}
			</div>
		</div>
	);
};

export default TeamSection;
