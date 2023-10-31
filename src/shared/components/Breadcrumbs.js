import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ROUTES } from "../constants/routes";

const Breadcrumbs = () => {
	const location = useLocation();
	let nav = location.pathname
		?.replace(/\?.+/, "")
		?.split("/")
		?.filter((x) => x);

	return (
		<motion.div
			initial={{ y: 30, scale: 0.9, opacity: 0 }}
			whileInView={{ y: 1, scale: 1, opacity: 1 }}
			transition={{
				type: "spring",
				stiffness: 100,
			}}
			className="text-sm bg-troo-primary py-3 px-6 rounded-lg border-4 shadow-lg border-troo-primary-light"
		>
			<ol
				class="flex items-center whitespace-nowrap min-w-0"
				aria-label="Breadcrumb"
			>
				<li class="text-sm">
					<Link
						to={ROUTES.home}
						class="flex items-center text-troo-light hover:text-troo-secondary"
					>
						Home
						<svg
							class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-troo-light"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</Link>
				</li>
				{nav.map((x, i) => (
					<li class="text-sm" key={x}>
						<Link
							to={`/${x}`}
							className={`capitalize flex items-center text-troo-light hover:text-troo-primary ${
								i === nav.length - 1 && "text-troo-light pointer-events-none"
							}`}
						>
							{x?.replace(/-/gi, " ")}
							{i !== nav.length - 1 && (
								<svg
									class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
									/>
								</svg>
							)}
						</Link>
					</li>
				))}
			</ol>
		</motion.div>
	);
};

export default Breadcrumbs;
