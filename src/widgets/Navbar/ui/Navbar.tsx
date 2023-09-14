
import { Link } from "react-router-dom";
import Logo from 'shared/assets/icons/logo.svg'
import s from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={s.navbar}>
        <Link to={'./'} className={s.logo}>
          <Logo/>
          <span className={s.text}>ovies</span>
        </Link>
        <div className={s.links}>
          <Link to={'./favorites'} className={s.link}>Favorites</Link>
          <Link to={'./history'} className={s.link}>History</Link>
          <Link to={'./logout'} className={s.link}>Logout</Link>
          <Link to={'./login'}className={s.link}>Login</Link>
          <Link to={'./signup'}className={s.active}>Sign Up</Link>
        </div>
    </div>
  );
};
