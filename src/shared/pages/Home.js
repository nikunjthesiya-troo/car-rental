import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../sections/HeroSection";
import ServiceSection from "../sections/ServiceSection";
import CarListSection from "../sections/CarListSection";
import AboutSection from "../sections/AboutSection";
import VideoPlayer from "../sections/VideoPlayer";
import TeamSection from "../sections/TeamSection";
import TestimonialSection from "../sections/TestimonialSection";
import DownloadBanner from "../sections/DownloadBanner";
import BlogSection from "../sections/BlogSection";

const Home = () => {
	return (
		<Layout>
			<HeroSection />
			<ServiceSection />
			<CarListSection />
			<AboutSection />
			<VideoPlayer />
			<TeamSection />
			<TestimonialSection />
			<DownloadBanner />
			<BlogSection />
		</Layout>
	);
};

export default Home;
