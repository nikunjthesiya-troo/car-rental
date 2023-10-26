import React from "react";
import { BLOGS } from "../constants";
import BlogCard from "../components/BlogCard";

const BlogSection = () => {
	return (
		<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
			<div className="main-container flex flex-col gap-10 items-center">
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
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
					{BLOGS.map((data, i) => {
						return <BlogCard data={data} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
