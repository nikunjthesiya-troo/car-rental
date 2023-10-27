import React from "react";
import Layout from "../components/Layout";
import TestimonialSection from "../sections/TestimonialSection";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";

const Testimonial = () => {
	return (
		<Layout>
			<SubHeroSection title="What They Say About Us" />
			<TestimonialSection isListingPage />
			<DownloadBanner />
		</Layout>
	);
};

export default Testimonial;
