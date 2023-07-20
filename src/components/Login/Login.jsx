import React from "react";
import { TextField, responsiveFontSizes } from "@mui/material";
import { Button } from "@mui/material";
import { color } from "framer-motion";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../redux/slices/auth";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Login() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ message: null, credentials: false });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      setError({ ...error, message: null });
    } catch (error) {
      setError({ ...error, message: error.response.data.error });
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div className="w-full h-3/4 flex justify-center">
        <img src="LoginImg.png" alt="Login-Image" className="w-auto h-full" />
      </div>
      <div className="h-1/4">
        <div className="p-1 rounded-md border-[1px] border-[#454545]">
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
            <FormControl
              fullWidth
              size="small"
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div className="flex justify-center py-1 mb-1">
            <Button variant="outlined" onClick={onSubmit} fullWidth>
              Login
            </Button>
            {error.message !== null ? (
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {error.message}
                </Alert>
              </Snackbar>
            ) : (
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Redirigiendo al Home
                </Alert>
              </Snackbar>
            )}
          </div>
          <div className="flex justify-center">
            <span className="text-white">or</span>
          </div>
          <div className="flex justify-center pt-1">
            <Button variant="outlined" onClick={onSubmit} fullWidth>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
