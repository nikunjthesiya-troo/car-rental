import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";
import BlogSection from "../sections/BlogSection";

const Blogs = () => {
	return (
		<Layout>
			<SubHeroSection title="Latest News and Blogs" />
			<BlogSection isListingPage />
			<DownloadBanner />
		</Layout>
	);
};

export default Blogs;
