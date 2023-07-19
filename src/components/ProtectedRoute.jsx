import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../utils/localstorage";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  console.log(isAuthenticated, user);
  console.log(!getAccessToken());
  if (!getAccessToken()) {
    return <Navigate to="/" />;
  } else if (user?.role) {
    if (user?.role == "ADMIN") {
      return children;
    }
    return <Navigate to="/" />;
  } else <></>;
}
