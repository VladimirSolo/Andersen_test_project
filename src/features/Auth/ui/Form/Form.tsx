import { useForm } from "react-hook-form";
import { useState } from "react";
import UserIcon from "shared/assets/icons/user.svg";
import EyeIcon from "shared/assets/icons/eye.svg";
import { useAutoFocus } from "features/Auth/lib";
import s from "./Form.module.scss";

export interface Data {
  email: string;
  password: string;
}
export interface Props {
  text: string;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: Data) => void;
}

const Form = (props: Props) => {
  const { text, onSubmit } = props;

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const emailInput = useAutoFocus();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
      <div className={s.wrapper}>
          <p className={s.title}>{text}</p>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={s.field}>
                  <input
                    className={s.input}
                    ref={emailInput}
                    id="email"
                    aria-invalid={!errors.email}
                // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("email", {
                      required: "required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                    type="email"
                    placeholder="example@mail.com"
                  />
                  <UserIcon className={s.icon} />
                  {errors.email && <span className={s.error} role="alert">{errors.email.message}</span>}
              </div>
              <div className={s.field}>
                  <input
                    className={s.input}
                    id="password"
                    aria-invalid={!errors.password}
                // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("password", {
                      required: "required",
                      minLength: {
                        value: 5,
                        message: "min length is 5",
                      },
                    })}
                    type={passwordShown ? "text" : "password"}
                    placeholder="password"
                  />
                  <button onClick={togglePasswordVisiblity} type="button">
                      <EyeIcon className={s.icon} />
                  </button>
                  {errors.password && <span className={s.error} role="alert">{errors.password.message}</span>}
              </div>
              <button className={s.butn} type="submit">{text}</button>
          </form>
      </div>
  );
};

export default Form;
