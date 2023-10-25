import React from "react";
import logo from "../../shared/assets/images/Logo.svg";
import { NAV_ROUTES } from "../constants/navRoutes";
import { Link } from "react-router-dom";
import PrimarySidebar from "./PrimarySidebar";
import { PhoneCall } from "react-feather";

const Navbar = () => {
	return (
		<div className="w-full bg-troo-light text-troo-secondary">
			<div className="main-container-r-0 flex gap-8 items-center justify-between text-sm md:text-base">
				<Link to="/">
					<img src={logo} alt="brand logo" className="py-4 w-64 xl:w-[300px]" />
				</Link>
				<div className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-10 text-sm lg:text-lg">
					{NAV_ROUTES.map((route, i) => {
						if (route.isMultiple) {
							return (
								<div class="hs-dropdown relative inline-flex">
									<div className="flex items-center gap-3 hs-dropdown-toggle">
										<p className="text-sm lg:text-base">{route.name} +</p>
									</div>
									<div
										class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] shadow-md rounded-lg p-2 "
										aria-labelledby="hs-dropdown-default"
									>
										<div className="flex flex-col items-start gap-3 w-full bg-troo-primary text-troo-secondary py-4 px-6 rounded-lg">
											{route.subPages?.map((nav, i) => {
												return <Link to={nav.path}>{nav.name}</Link>;
											})}
										</div>
									</div>
								</div>
							);
						} else {
							return (
								<Link className="text-sm lg:text-base" to={route.path}>
									{route.name}
								</Link>
							);
						}
					})}
					<button className="btn-theme-primary xl:flex hidden">
						<span>GET A QUOTE</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
							/>
						</svg>
					</button>
					<div className="relative px-12 py-4 whitespace-nowrap ml-5 h-full bg-troo-yellow text-troo-secondary hidden 2xl:flex flex-col items-start gap-1">
						<div className="absolute top-1/2 -translate-y-1/2 bg-troo-primary border-[3px] rounded-full text-troo-light border-troo-light p-4 -left-8">
							<PhoneCall />
						</div>
						<p className="text-2xl font-bold">+820 123 456 7890</p>
						<p>Call Us today!</p>
					</div>
				</div>
				<div className="text-troo-primary cursor-pointer lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-8 h-8"
						data-hs-overlay="#hs-overlay-example"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
				<PrimarySidebar />
			</div>
		</div>
	);
};

export default Navbar;
