import { Login } from "features/Auth";
import { Link } from "react-router-dom";

const LoginPage = () => (
    <div>
        <Login />
        <p>
            Or
            <Link to="/signup">Sign up</Link>
        </p>
    </div>
);

export default LoginPage;
