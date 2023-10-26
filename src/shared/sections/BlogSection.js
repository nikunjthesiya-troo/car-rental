import React from "react";
import { BLOGS } from "../constants";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const BlogSection = ({ isListingPage }) => {
	return (
		<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
			<div className="main-container flex flex-col gap-10 items-center">
				{!isListingPage && (
					<div className="flex flex-col items-center text-center gap-4">
						<h2 className="text-4xl font-bold text-troo-secondary">
							Read The News and Blogs
						</h2>
						<p className="text-troo-secondary">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							<br />
							industry. Lorem Ipsum has been the industry.
						</p>
					</div>
				)}
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
					{isListingPage
						? BLOGS.map((data, i) => {
								return <BlogCard data={data} />;
						  })
						: BLOGS.slice(0, 3).map((data, i) => {
								return <BlogCard data={data} />;
						  })}
				</div>
				{!isListingPage && (
					<Link to={ROUTES.ourBlogs}>
						<button className="btn-theme-primary-outlined flex mt-16">
							<span>Meet All Blogs</span>
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

export default BlogSection;
