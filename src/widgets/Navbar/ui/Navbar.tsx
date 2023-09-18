import { Link, useLocation } from "react-router-dom";
import { useTypedDispatch } from "app/providers/store/config/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { logout } from "features/Auth/model";
import Logo from "shared/assets/icons/logo.svg";
import { auth } from "../../../firebase";
import s from "./Navbar.module.scss";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const dispatch = useTypedDispatch();
  const location = useLocation();

  const hanldeLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    user ? (
        <div data-testid="navbar" className={s.navbar}>
            <Link to="/" className={s.logo}>
                <Logo />
                <span className={s.text}>ovies</span>
            </Link>
            <div className={s.links}>
                <Link
                  to="/favorites"
                  className={`${s.link} ${location.pathname === "/favorites" && s.active}`}
                >
                    Favorites
                </Link>
                <Link
                  to="/history"
                  className={`${s.link} ${location.pathname === "/history" && s.active}`}
                >
                    History
                </Link>
                <Link
                  to="/"
                  onClick={hanldeLogout}
                  className={s.link}
                >
                    Logout
                </Link>
            </div>
        </div>
    ) : (
        <div data-testid="navbar" className={s.navbar}>
            <Link to="/" className={s.logo}>
                <Logo />
                <span className={s.text}>ovies</span>
            </Link>
            <div className={s.links}>
                <Link
                  to="/login"
                  className={`${s.link} ${location.pathname === "/login" && s.active}`}
                >
                    Login
                </Link>
                <Link
                  to="/signup"
                  className={`${s.link} ${location.pathname === "/signup" && s.active}`}
                >
                    Sign Up
                </Link>
            </div>
        </div>
    )
  );
};

export default Navbar;
