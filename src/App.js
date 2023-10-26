import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./shared/constants/routes";
import Home from "./shared/pages/Home";
import About from "./shared/pages/About";
import OurFleet from "./shared/pages/OurFleet";
import OurTeam from "./shared/pages/OurTeam";
import Testimonial from "./shared/pages/Testimonial";
import FAQ from "./shared/pages/FAQ";
import Blogs from "./shared/pages/Blogs";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.home} element={<Home />} />
				<Route path={ROUTES.aboutUs} element={<About />} />
				<Route path={ROUTES.ourFleets} element={<OurFleet />} />
				<Route path={ROUTES.ourTeam} element={<OurTeam />} />
				<Route path={ROUTES.clientReview} element={<Testimonial />} />
				<Route path={ROUTES.faqs} element={<FAQ />} />
				<Route path={ROUTES.ourBlogs} element={<Blogs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
