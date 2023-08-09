import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAccessToken, setCurrentUser } from "../../redux/slices/auth";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const AuthRouter = () => {
  const { accessToken, currentUser } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  const [validation, setValidation] = useState(false);

  async function resolveToken() {
    if (accessToken) {
      try {
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken.token}`;
        const user = await axiosInstance.get("/test");
        dispatch(setCurrentUser(user.data));
        setValidation(true);
      } catch (error) {
        setValidation(false);
        dispatch(clearAccessToken());
      }
    }
  }

  useEffect(() => {
    resolveToken();
  }, [accessToken, location.pathname, dispatch]);

  if (validation) {
    return <Outlet />;
  } else if (accessToken) {
    return <></>;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default AuthRouter;
