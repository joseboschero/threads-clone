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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ThreadsLogo from "../ThreadsLogo/ThreadsLogo";

function Signup() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ message: null, credentials: false });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      if (!user || !password || !mail) {
        setError({ ...error, credentials: true });
        return;
      }
      const response = await axios.post("http://localhost:3001/register", {
        username: user,
        password,
        email: mail,
      });
      dispatch(setAccessToken(response.data));
      navigate("/login");
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
      <div className="w-full mt-10 flex justify-center">
        <Link to={"/login"}>
          <ThreadsLogo />
        </Link>
      </div>
      <div className="w-full">
        <div className="p-1 rounded-md border-[1px] border-[#454545]">
          <div className="py-1">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              fullWidth
              size="small"
              onChange={(event) => setUser(event.target.value)}
              error={error.credentials}
            />
          </div>
          <div className="py-1">
            <TextField
              id="outlined-basic"
              label="Mail"
              variant="outlined"
              fullWidth
              size="small"
              onChange={(event) => setMail(event.target.value)}
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
              <InputLabel
                htmlFor="outlined-adornment-password"
                error={error.credentials}
              >
                Password
              </InputLabel>
              <OutlinedInput
                error={error.credentials}
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
          <div className="flex justify-center py-1"></div>
          <div className="flex justify-center">
            <Button variant="outlined" fullWidth onClick={onSubmit}>
              Sign Up
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
        </div>
      </div>
    </>
  );
}

export default Signup;
