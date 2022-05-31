import IMAGE from "../../assets/success-image.svg";
import styles from "./UserRegistered.module.scss";

const UserRegistered = () => {
  return (
    <div className={styles.container}>
      <h1>
        User successfully <br /> registered
      </h1>
      <div style={{ height: "50px" }}></div>
      <img src={IMAGE} className={styles.img} alt="User Registerde!" />
    </div>
  );
};

export default UserRegistered;
