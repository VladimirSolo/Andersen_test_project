import { SignUp } from "features/Auth";
import { Link } from "react-router-dom";

const SignUpPage = () => (
    <div>
        <SignUp />
        <p>
            Or
            <Link to="/login">login</Link>
        </p>
    </div>
);

export default SignUpPage;
