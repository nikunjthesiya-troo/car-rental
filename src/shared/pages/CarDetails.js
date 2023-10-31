import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";
import CarDetailSection from "../sections/CarDetailSection";

const CarDetails = () => {
	return (
		<Layout>
			<SubHeroSection title="Know Car Features" />
			<CarDetailSection />
			<DownloadBanner />
		</Layout>
	);
};

export default CarDetails;
