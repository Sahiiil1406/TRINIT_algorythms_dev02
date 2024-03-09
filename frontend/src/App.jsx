import React from "react";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { AlertDialogDemo } from "./components/AlertDialogDemo";

import { Signup } from "./auth/Signup";
import Profile from "./pages/tutor/Profile";
import Login from "./auth/Login";

function App() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url("https://images.moneycontrol.com/static-mcnews/2023/06/Google-768x435.jpeg?impolicy=website&width=770&height=431")`,
					objectFit: "cover",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundColor: "rgba(255, 255, 255, 0.1)",
				}}
				className="w-full h-[100vh] flex pt-[100px] items-center justify-center "
			>
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
