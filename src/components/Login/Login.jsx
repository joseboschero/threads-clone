import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { color } from "framer-motion";

function Login() {
  return (
    <>
      <div className="max-w-sm h-3/4 flex justify-center">
        <img src="LoginImg.png" alt="Login-Image" className="w-auto h-full" />
      </div>
      <div className="max-w-sm h-1/4 p-6">
        <div className="p-2 rounded-md border-[1px] border-[#454545]">
          <div className="py-1">
            <TextField
              id="outlined-basic"
              label="Username or Mail"
              variant="outlined"
              fullWidth
              size="small"
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
            />
          </div>
          <div className="flex justify-center py-1">
            <Button variant="outlined">Login</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
