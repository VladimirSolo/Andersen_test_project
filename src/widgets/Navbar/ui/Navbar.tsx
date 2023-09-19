import { Link, useLocation } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "app/providers/store/config/hooks";
import { logout } from "features/Auth/model";
import Logo from "shared/assets/icons/logo.svg";
import s from "./Navbar.module.scss";

const Navbar = () => {
  const { uid } = useTypedSelector((state) => state.auth.user);

  const dispatch = useTypedDispatch();
  const location = useLocation();

  const hanldeLogout = async () => {
    try {
      await dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    uid ? (
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
