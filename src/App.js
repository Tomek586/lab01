import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3Page from "./pages/Lab3Page";
import NotFound from "./pages/NotFound";

// Menu items
const menuItems = [
	{
		id: 1,
		label: "Home",
		url: "/",
		urlPattern: "/",
		element: <Home />,
	},
	{
		id: 3,
		label: "Laboratorium 1",
		url: "/lab2",
		urlPattern: "/lab2",
		element: <Lab2 />,
	},
	{
		id: 2,
		label: "Laboratorium 2",
		url: "/lab1",
		urlPattern: "/lab1/:id",
		element: <Lab1 />,
	},
	{
		id: 4,
		label: "Lab3",
		url: "/lab3",
		urlPattern: "/lab3",
		element: <Lab3Page />,
	},
];

const App = () => {
	return (
		<RootLayout items={menuItems}>
			{" "}
			{/* RootLayout z nawigacją i stopką */}
			<Routes>
				{menuItems.map((item) => (
					<Route
						path={
							item.urlPattern
						}
						element={
							item.element
						}
						key={item.id}
					/>
				))}
				<Route
					path="*"
					element={<NotFound />}
				/>{" "}
				{/* Obsługa błędu 404 */}
				<Route
					path="/lab3"
					element={<Lab3Page />}
				/>
			</Routes>
		</RootLayout>
	);
};

export default App;
