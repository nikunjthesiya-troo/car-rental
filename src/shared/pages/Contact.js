import React from "react";
import Layout from "../components/Layout";
import DownloadBanner from "../sections/DownloadBanner";
import SubHeroSection from "../sections/SubHeroSection";
import Facebook from "../../shared/assets/images/icons/facebook.svg";
import Twitter from "../../shared/assets/images/icons/x.svg";
import LinkedIn from "../../shared/assets/images/icons/linkedin.svg";
import Instagram from "../../shared/assets/images/icons/instagram.svg";

const Contact = () => {
	return (
		<Layout>
			<SubHeroSection title="Need Any Help?" />
			<div className="w-full py-[80px] bg-troo-light text-troo-secondary">
				<div className="main-container flex gap-6 items-center">
					<div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-20">
						<div className="w-full flex flex-col items-start gap-3">
							<h3 className="font-bold text-troo-secondary text-4xl">
								Don’t Hasitate to Contact Us If You Need More Help
							</h3>
							<p className="text-gray-500">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable.
							</p>
							<div className="flex items-center gap-2 mt-3">
								<div className="p-2 bg-troo-primary rounded-full">
									<img src={Facebook} alt="facebook" className="w-4 h-4" />
								</div>
								<div className="p-2 bg-troo-primary rounded-full">
									<img src={Twitter} alt="twitter" className="w-4 h-4" />
								</div>
								<div className="p-2 bg-troo-primary rounded-full">
									<img src={LinkedIn} alt="linked in" className="w-4 h-4" />
								</div>
								<div className="p-2 bg-troo-primary rounded-full">
									<img src={Instagram} alt="instagram" className="w-4 h-4" />
								</div>
							</div>
						</div>
						<div className="w-full grid sm:grid-cols-2 gap-4">
							<div className="flex flex-col items-start gap-4">
								<p className="text-lg">Call Any Time</p>
								<div className="flex flex-col items-start">
									<h4 className="text-xl lg:text-2xl font-bold">
										+820 123 456 7890
									</h4>
									<h4 className="text-xl lg:text-2xl font-bold">
										+820 123 456 7890
									</h4>
								</div>
							</div>
							<div className="flex flex-col items-start gap-4">
								<p className="text-lg">Send Email Us</p>
								<div className="flex flex-col items-start">
									<h4 className="text-xl lg:text-2xl font-bold">
										Contact@troocarrent.com
									</h4>
									<h4 className="text-xl lg:text-2xl font-bold">
										info@roocarrent.com
									</h4>
								</div>
							</div>
							<div className="flex flex-col items-start gap-4">
								<p className="text-lg">Our Office Location</p>
								<div className="flex flex-col items-start">
									<h4 className="text-xl lg:text-2xl font-bold">
										North Ewingar Road Lionsville,
									</h4>
									<h4 className="text-xl lg:text-2xl font-bold">
										New South Wales, 2460 Aus
									</h4>
								</div>
							</div>
							<div className="flex flex-col items-start gap-4">
								<p className="text-lg">Openig Hours</p>
								<div className="flex flex-col items-start">
									<h4 className="text-xl lg:text-2xl font-bold">
										Mon - Fri: 10 AM to 11 PM
									</h4>
									<h4 className="text-xl lg:text-2xl font-bold">
										Sunay: 10 AM to 02 PM
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full pb-[80px] bg-troo-light text-troo-secondary flex flex-col items-center">
				<div className="main-container w-full flex flex-col gap-6 items-center">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.001524964486!2d72.7848282757887!3d21.19209838049845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d198e284e31%3A0x56c3bab7f1aff804!2sTRooTech%20Business%20Solutions%20Pvt.%20Ltd.%20-%20Surat!5e0!3m2!1sen!2sin!4v1698384520786!5m2!1sen!2sin"
						width="100%"
						height="450"
						style={{ border: 0 }}
						title="trootech"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div className="main-container-big w-full">
					<div className="w-full flex flex-col gap-6 shadow-xl -mt-28 items-center p-6 md:p-12 bg-troo-light border border-troo-primary-light rounded-lg">
						<div className="flex flex-col items-center gap-2">
							<h4 className="font-bold">Send Us Message</h4>
							<div className="w-16 bg-troo-primary h-[2px]" />
						</div>
						<div className="w-full flex flex-col sm:grid grid-cols-2 gap-4">
							<div className="flex flex-col items-start gap-3">
								<p>Full Name</p>
								<input
									type="text"
									placeholder="Full Name"
									className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
								/>
							</div>
							<div className="flex flex-col items-start gap-3">
								<p>Phone No</p>
								<input
									type="text"
									placeholder="Phone No"
									className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
								/>
							</div>
							<div className="flex flex-col items-start gap-3">
								<p>Email Address</p>
								<input
									type="text"
									placeholder="Email Address"
									className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
								/>
							</div>
							<div className="flex flex-col items-start gap-3">
								<p>Subject</p>
								<select className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4">
									<option selected>Select Location</option>
									<option>India</option>
									<option>New York</option>
									<option>Dubai</option>
								</select>
							</div>
							<div className="flex flex-col col-span-2 items-start gap-3">
								<p>Message</p>
								<textarea
									className="py-3 px-4 pr-9 block w-full border border-troo-primary border-opacity-20 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-troo-primary bg-opacity-5 sm:p-4"
									rows={5}
									placeholder="Send Massage"
								></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
			<DownloadBanner />
		</Layout>
	);
};

export default Contact;
