import { useNavigate } from "react-router";
import { useTypedDispatch } from "app/providers/store/config/hooks";
import { signup } from "features/Auth/model";
import Form from "../Form/Form";

interface Data {
  email: string;
  password: string;
}

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const onSubmit = async (data: Data) => {
    try {
      const response = await dispatch(signup(data)).unwrap();
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
        text="Sign Up"
      />
  );
};
