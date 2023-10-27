import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";

const CarDetails = () => {
	return (
		<Layout>
			<SubHeroSection title="Know Car Features" />

			<DownloadBanner />
		</Layout>
	);
};

export default CarDetails;
