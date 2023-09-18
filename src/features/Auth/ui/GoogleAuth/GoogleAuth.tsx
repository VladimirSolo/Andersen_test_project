import { Link, useNavigate } from "react-router-dom";
import {
  getAuth, signInWithRedirect, GoogleAuthProvider,
} from "firebase/auth";
import GoogleIcon from "shared/assets/icons/google.svg";
import s from "./GoogleAuth.module.scss";

export interface Props {
  text: string;
}

export const GoogleAuth = (props: Props) => {
  const { text } = props;
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithRedirect(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // const { user } = result;
      if (token) {
        navigate("/");
      }
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);

      const { email } = error.customData;
      console.log(email);

      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    }
  };

  return (
      <div className={s.link}>
          <p className={s.title}>Or</p>
          <button className={s.google} type="button" onClick={signInWithGoogle}>
              <GoogleIcon className={s.icon} />
              {text === "Log in" ? "Sign Up " : "Login In "}
              in with Google
          </button>
          <span>
              No account?
              <Link
                className={s.text}
                to={text === "Log in" ? "/signup" : "/login"}
              >
                  {text === "Log in" ? "Sign Up" : "Login In"}
              </Link>
          </span>
      </div>
  );
};
