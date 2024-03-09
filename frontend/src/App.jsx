import React from "react";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { AlertDialogDemo } from "./components/AlertDialogDemo";

import { Signup } from "./auth/Signup";
import Profile from "./pages/tutor/Profile";

function App() {
	return <Profile />;
}

export default App;
