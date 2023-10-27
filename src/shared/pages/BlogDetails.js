import React from "react";
import Layout from "../components/Layout";
import SubHeroSection from "../sections/SubHeroSection";
import DownloadBanner from "../sections/DownloadBanner";

const BlogDetails = () => {
	return (
		<Layout>
			<SubHeroSection title="Latest News and Blogs" />

			<DownloadBanner />
		</Layout>
	);
};

export default BlogDetails;
