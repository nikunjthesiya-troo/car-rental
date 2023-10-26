import React from "react";
import Layout from "../components/Layout";
import ServiceSection from "../sections/ServiceSection";
import AboutSection from "../sections/AboutSection";
import VideoPlayer from "../sections/VideoPlayer";
import TeamSection from "../sections/TeamSection";
import TestimonialSection from "../sections/TestimonialSection";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";

const About = () => {
	return (
		<Layout>
			<SubHeroSection title="Learn About Us" />
			<ServiceSection />
			<AboutSection />
			<VideoPlayer />
			<TeamSection />
			<TestimonialSection />
			<DownloadBanner />
		</Layout>
	);
};

export default About;
