import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import NewPrize from "./Pages/Prize/NewPrize";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
	},
	{
		path: "/trial",
		element: <NewPrize />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
