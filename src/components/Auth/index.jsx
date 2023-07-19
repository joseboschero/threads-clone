import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAccessToken, setCurrentUser } from "../../redux/slices/auth";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const AuthRouter = () => {
  const { accessToken, currentUser } = useSelector((state) => state.auth);
  const location = useLocation();

  useEffect(() => {
    if (accessToken) {
      try {
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

        // const user =  get user data
      } catch (error) {}
    }
  }, []);
};

export default AuthRouter;
