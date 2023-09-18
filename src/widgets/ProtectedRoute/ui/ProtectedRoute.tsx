import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

interface Props {
  isAuthenticated: boolean;
}

export const ProtectedRoute = (props: Props) => {
  const { isAuthenticated } = props;
  const [user] = useAuthState(auth);

  if (isAuthenticated && !user) {
    return <Navigate to="/login" />;
  }

  if (!isAuthenticated && user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
