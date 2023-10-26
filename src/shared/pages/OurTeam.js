import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";
import TeamSection from "../sections/TeamSection";

const OurTeam = () => {
	return (
		<Layout>
			<SubHeroSection title="Meet Our Awesome Team" />
			<TeamSection isListingPage />
			<DownloadBanner />
		</Layout>
	);
};

export default OurTeam;
