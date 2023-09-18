import { useNavigate } from "react-router";
import { useTypedDispatch } from "app/providers/store/config/hooks";
import { signup } from "features/Auth/model";
import { useState } from "react";
import Form from "../Form/Form";
import { GoogleAuth } from "../GoogleAuth/GoogleAuth";
import s from "./SignUp.module.scss";

interface Data {
  email: string;
  password: string;
}

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [erorr, setError] = useState("");

  const onSubmit = async (data: Data) => {
    try {
      const response = await dispatch(signup(data)).unwrap();
      if (response) {
        navigate("/");
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
      <div className={s.signup}>
          {erorr && <span className={s.err}>{erorr}</span>}
          <Form
            onSubmit={onSubmit}
            text="Sign Up"
          />
          <GoogleAuth text="Sign Up" />
      </div>
  );
};
