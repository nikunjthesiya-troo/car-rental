import { ROUTES } from "./routes";

export const NAV_ROUTES = [
	{
		path: ROUTES.home,
		name: "Home",
	},
	{
		path: ROUTES.aboutUs,
		name: "About Us",
	},
	{
		name: "Our Fleet",
		isMultiple: true,
		subPages: [
			{
				path: ROUTES.ourFleets,
				name: "Our Fleets",
			},
			{
				path: ROUTES.carDetails,
				name: "Car Details",
			},
		],
	},
	{
		name: "Pages",
		isMultiple: true,
		subPages: [
			{
				path: ROUTES.ourTeam,
				name: "Our Team",
			},
			{
				path: ROUTES.clientReview,
				name: "Client Reviews",
			},
			{
				path: ROUTES.pricingPackage,
				name: "Pricing Package",
			},
			{
				path: ROUTES.faqs,
				name: "FAQs",
			},
			{
				path: ROUTES.errorPage,
				name: "404",
			},
			{
				path: ROUTES.bookingForm,
				name: "Booking Form",
			},
		],
	},
	{
		name: "Blogs",
		isMultiple: true,
		subPages: [
			{
				path: ROUTES.ourBlogs,
				name: "Our Blogs",
			},
			{
				path: ROUTES.blogDetails,
				name: "Blog Details",
			},
		],
	},
	{
		path: ROUTES.contactUs,
		name: "Contact Us",
	},
];
