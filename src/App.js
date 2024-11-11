import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3Page from "./pages/Lab3Page";
import AddForm from "./pages/AddForm";
import EditForm from "./pages/EditForm";
import NotFound from "./pages/NotFound";
import AppReducer from "./data/AppReducer";
import AppContext from "./data/AppContext";
import { data } from "./module-data";
import Lab5Page from "./pages/Lab5Page";
import UserProfile from "./components/UserProfile";
import PostComments from "./components/PostComments";

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
		id: 2,
		label: "Laboratorium 1",
		url: "/lab1",
		urlPattern: "/lab1/:id",
		element: <Lab1 />,
	},
	{
		id: 3,
		label: "Laboratorium 2",
		url: "/lab2",
		urlPattern: "/lab2",
		element: <Lab2 />,
	},
	{
		id: 4,
		label: "Lab 3",
		url: "/lab3",
		urlPattern: "/lab3",
		element: <Lab3Page />,
	},
	{
		id: 5,
		label: "Lab 4 ADD",
		url: "/lab4/add",
		urlPattern: "/lab4/add",
		element: <AddForm />,
	},
	{
		id: 6,
		label: "Lab 4 EDIT",
		url: "/lab4/edit/:id",
		urlPattern: "/lab4/edit/:id",
		element: <EditForm />,
	},
	{
		id: 7,
		label: "Lab 5",
		url: "/lab5",
		urlPattern: "/lab5",
		element: <Lab5Page />,
	},
];

const App = () => {
	const [state, appDispatch] = useReducer(AppReducer, data);

	return (
		<AppContext.Provider
			value={{ items: state, dispatch: appDispatch }}
		>
			<RootLayout items={menuItems}>
				<Routes>
					{menuItems.map((item) => (
						<Route
							path={
								item.urlPattern
							}
							element={
								item.element
							}
							key={
								item.id
							}
						/>
					))}
					<Route
						path="*"
						element={
							<NotFound />
						}
					/>
					<Route
						path="/lab5/posts/:id/comments"
						element={
							<PostComments />
						}
					/>
					<Route
						path="/lab5/users/:id"
						element={
							<UserProfile />
						}
					/>
				</Routes>
			</RootLayout>
		</AppContext.Provider>
	);
};

export default App;
