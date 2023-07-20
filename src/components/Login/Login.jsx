import React from "react";
import { TextField, responsiveFontSizes } from "@mui/material";
import { Button } from "@mui/material";
import { color } from "framer-motion";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../redux/slices/auth";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ message: null, credentials: false });

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      if (!user || !password) {
        setError({ ...error, credentials: true });
        return;
      }
      const response = await axios.post("http://localhost:3001/login", {
        username: user,
        password,
      });
      dispatch(setAccessToken(response.data));
    } catch (error) {
      setError({ ...error, message: error.response.data.error });
    }
  };

  return (
    <>
      <div className="w-full h-3/4 flex justify-center">
        <img src="LoginImg.png" alt="Login-Image" className="w-auto h-full" />
      </div>
      <div className="h-1/4 p-6">
        <div className="p-2 rounded-md border-[1px] border-[#454545]">
          <div className="py-1">
            <TextField
              id="outlined-basic"
              label="Username or Mail"
              variant="outlined"
              fullWidth
              size="small"
              onChange={(event) => setUser(event.target.value)}
              error={error.credentials}
            />
          </div>
          <div className="py-1">
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              size="small"
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
              error={error.credentials}
            />
          </div>
          <div className="flex justify-center py-1">
            <Button variant="outlined" onClick={onSubmit}>
              Login
            </Button>
          </div>
          <div>
            <span>{error.message}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
