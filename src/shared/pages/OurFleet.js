import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";
import CarListSection from "../sections/CarListSection";

const OurFleet = () => {
	return (
		<Layout>
			<SubHeroSection title="We have Many Car For You" />
			<CarListSection isListingPage />
			<DownloadBanner />
		</Layout>
	);
};

export default OurFleet;
