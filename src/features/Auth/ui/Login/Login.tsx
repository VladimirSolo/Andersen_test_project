import { useNavigate } from "react-router";
import { useTypedDispatch } from "app/providers/store/config/hooks";
import { login } from "features/Auth/model";
import { useState } from "react";
import Form from "../Form/Form";
import { GoogleAuth } from "../GoogleAuth/GoogleAuth";
import s from "./Login.module.scss";

interface Data {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [erorr, setError] = useState("");

  const onSubmit = async (data: Data) => {
    try {
      const response = await dispatch(login(data)).unwrap();
      if (response) {
        navigate("/");
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
      <div className={s.login}>
          {erorr && <span className={s.err}>{erorr}</span>}
          <Form
            onSubmit={onSubmit}
            text="Log in"
          />
          <GoogleAuth text="Log in" />
      </div>
  );
};
