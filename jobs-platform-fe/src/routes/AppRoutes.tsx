
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { SignUpPage } from "../pages/SignUp/SignUpPage";

export function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}