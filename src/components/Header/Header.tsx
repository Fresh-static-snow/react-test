import styles from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";
import MyButton from "../MyButton/MyButton";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="logo"></img>
        <div>
          <MyButton text="Users" style={{ marginRight: "10px" }} />
          <MyButton text="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Header;
