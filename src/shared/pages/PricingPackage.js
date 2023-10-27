import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";
import PricingCard from "../components/PricingCard";

const PricingPackage = () => {
	return (
		<Layout>
			<SubHeroSection title="A High Variety Of Options" />
			<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
				<div className="relative main-container-big flex flex-col gap-6 items-center">
					<PricingCard price="399.00" pkg="Premium Package" />
					<PricingCard price="425.00" pkg="Luxuory Package" />
					<PricingCard price="480.00" pkg="Superb  Package" />
					<PricingCard price="537.00" pkg="Diamond Package" />
					<PricingCard price="560.00" pkg="Golden Package" />
				</div>
			</div>
			<DownloadBanner />
		</Layout>
	);
};

export default PricingPackage;
