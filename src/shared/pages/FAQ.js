import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";
import Accordian from "../components/Accordian";
import { QNA } from "../constants";

const FAQ = () => {
	return (
		<Layout>
			<SubHeroSection title="Frequently Asked Questions" />
			<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
				<div className="relative main-container">
					<div className="hs-accordion-group flex flex-col gap-4">
						{QNA?.map((data, i) => {
							return <Accordian isActive={i === 0} data={data} />;
						})}
					</div>
				</div>
			</div>
			<DownloadBanner />
		</Layout>
	);
};

export default FAQ;
