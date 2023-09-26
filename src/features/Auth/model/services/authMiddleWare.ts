import { Middleware } from "redux";
import { authActions } from "features/Auth/model";
import { login, signup, logout } from "../actions/authThunk";

const authMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === login.pending.type
    || action.type === signup.pending.type
    || action.type === logout.pending.type) {
    store.dispatch(authActions.setUser({ uid: null }));
    store.dispatch(authActions.setUser({ uid: null }));
  } else if (
    action.type === login.fulfilled.type
    || action.type === signup.fulfilled.type
    || action.type === logout.fulfilled.type
  ) {
    store.dispatch(authActions.setUser({ uid: action.payload.uid }));
  } else if (
    action.type === login.rejected.type
    || action.type === signup.rejected.type
    || action.type === logout.rejected.type
  ) {
    console.error("An error occurred during authentication:", action.error);
  }
  console.log("Action dispatched:ACTION", action);

  return next(action);
};

export default authMiddleware;
