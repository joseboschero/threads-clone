import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import React from 'react';
import AuthRouter from './components/Auth';
import FixedBottomNavigation from './components/BottomBar/BottomBar';

function App() {
  return (
    <div className="relative min-h-screen md:max-w-2xl h-auto border-x-[1px] border-neutral-100/10">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AuthRouter />}>
          <Route
            path="/"
            element={
              <div className="pb-12">
                <Home />
              </div>
            }
          />
        </Route>
      </Routes>
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
