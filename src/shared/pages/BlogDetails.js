import React from "react";
import Layout from "../components/Layout";
import SubHeroSection from "../sections/SubHeroSection";
import DownloadBanner from "../sections/DownloadBanner";
import BlogDetailSection from "../sections/BlogDetailSection";

const BlogDetails = () => {
	return (
		<Layout>
			<SubHeroSection title="Latest News and Blogs" />
			<BlogDetailSection />
			<DownloadBanner />
		</Layout>
	);
};

export default BlogDetails;
