import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./MainLayout";
import Faq from "./Pages/FAQ/Faq";
import PrizeCard from "./trial";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
	},
	{
		path: "/new",
		element: <Faq />,
	},
	{
		path: "/trial",
		element: <PrizeCard />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
