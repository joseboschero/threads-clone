import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import React from "react";
import AuthRouter from "./components/Auth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<AuthRouter />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
