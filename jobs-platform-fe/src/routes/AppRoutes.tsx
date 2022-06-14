
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { SignInPage } from "../pages/SignIn/SignInPage";
import { SignUpPage } from "../pages/SignUp/SignUpPage";

export function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}