import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";

import { Signup } from "./auth/Signup";
import Profile from "./pages/tutor/Profile";
import Flipcard from "./pages/student/components/Flipcard";
import Login from "./auth/Login";
import Navbar from "./components/Navbar";
import StudentDashboard from "./pages/student/StudentDashboard";
import LobbyScreen from "../screens/Lobby";
import RoomPage from "../screens/Room";
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
        className="w-full h-[100vh] flex py-[100px] justify-center overflow-y-scroll mt-[40px]"
      >
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/flip" element={<Flipcard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/lobby/:id" element={<LobbyScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
