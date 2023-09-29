import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "app/providers/store/config/hooks";
import PropTypes from "prop-types";
import { getUser } from "features/Auth/model/selector/getUser";

interface Props {
  isAuthenticated: boolean;
}

export const ProtectedRoute = (props: Props) => {
  const { isAuthenticated } = props;
  const isUser = useTypedSelector(getUser);

  if (isAuthenticated && !isUser) {
    return <Navigate to="/login" />;
  }

  if (!isAuthenticated && isUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
