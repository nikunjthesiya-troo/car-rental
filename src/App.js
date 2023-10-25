import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./shared/constants/routes";
import Home from "./shared/pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.home} element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
