import React from "react";
import Main from "./pages/sample/Main";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { AlertDialogDemo } from "./components/AlertDialogDemo";

import { Signup } from "./auth/Signup";
import Profile from "./pages/tutor/Profile";
import Flipcard from "./pages/student/components/Flipcard";
import Login from "./auth/Login";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div
				style={{
					backgroundImage: `url("")`,
					objectFit: "cover",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundColor: "rgba(255, 255, 255, 0.1)",
				}}
				className="w-full h-[100vh] flex py-[100px] items-center justify-center overflow-y-scroll"
			>
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/main" element={<Main />} />
					<Route path="/flip" element={<Flipcard />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
