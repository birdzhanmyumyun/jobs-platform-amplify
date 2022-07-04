
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import { NavBar } from "../components/navbar/NavBar";
import { HomePage } from "../pages/Home/HomePage";
import { SignInPage } from "../pages/SignIn/SignInPage";
import { SignOutPage } from "../pages/SignOut/SignOutPage";
import { SignUpPage } from "../pages/SignUp/SignUpPage";
import { UserPage } from "../pages/User/UserPage";

export function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}