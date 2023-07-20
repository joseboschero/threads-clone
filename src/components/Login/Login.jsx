import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { color } from "framer-motion";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const onSubmit = async () => {
    if (!user || !password) {
      setError(true);
      return;
    }
    const response = await axios.post("http://localhost:3001/login", {
      user,
      password,
    });
    console.log(response.data);
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
            />
          </div>
          <div className="flex justify-center py-1">
            <Button variant="outlined" onClick={onSubmit}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
