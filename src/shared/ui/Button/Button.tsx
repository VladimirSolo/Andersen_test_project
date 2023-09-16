import React from "react";
import s from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLElement> {
  className: string
  onClick: () => void;
  text: string
}

const Button = (props: Props) => {
  const {
    className, onClick, text,
  } = props;

  return (
      <button
        type="button"
        className={className || s.button}
        onClick={onClick}
      >
          {text}
      </button>
  );
};

export default Button;
