import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import React from "react";
import AuthRouter from "./components/Auth";

function App() {
  return (
    <div className="max-w-xs md:max-w-2xl p-5  h-auto border-x-[1px] border-neutral-100/10">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AuthRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
