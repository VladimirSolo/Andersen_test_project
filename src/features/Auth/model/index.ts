import authSlice from "./slice/authSlice";
import {
  login,
  signup,
  logout,
} from "./actions/authThunk";

export {
  authSlice,
  login,
  signup,
  logout,
};

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
