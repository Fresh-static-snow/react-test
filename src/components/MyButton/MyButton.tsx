import React from "react";
import styles from "./MyButton.module.scss";

interface IMyButtonProps {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  ref?: React.LegacyRef<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const MyButton: React.FC<IMyButtonProps> = ({
  text,
  onClick,
  style,
  ref,
  type,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      ref={ref}
      onClick={onClick}
      className={ disabled ?  `${styles.btn__disabled} ${styles.btn}` : styles.btn }
      style={{ ...style }}
    >
      {text}
    </button>
  );
};

export default MyButton;

