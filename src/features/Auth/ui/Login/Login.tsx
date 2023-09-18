import { useNavigate } from "react-router";
import { useTypedDispatch } from "app/providers/store/config/hooks";
import { login } from "features/Auth/model";
import Form from "../Form/Form";

interface Data {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const onSubmit = async (data: Data) => {
    try {
      const response = await dispatch(login(data)).unwrap();
      if (response) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <Form
        onSubmit={onSubmit}
        text="Log in"
      />
  );
};
