import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./routes/Home";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			errorElement={<ErrorPage />}
			path='/'
			element={<Layout />}>
			<Route
				index
				element={<Home />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
