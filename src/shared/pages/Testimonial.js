import React from "react";
import Layout from "../components/Layout";
import ServiceSection from "../sections/ServiceSection";
import AboutSection from "../sections/AboutSection";
import VideoPlayer from "../sections/VideoPlayer";
import TeamSection from "../sections/TeamSection";
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
