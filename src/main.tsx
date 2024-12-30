import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./MainLayout";
import Faq from "./Pages/FAQ/Faq";
import TwinklingBackground from "./TwinklingBackground";

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
		element: (
			<TwinklingBackground>
				<MainLayout />
			</TwinklingBackground>
		),
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
