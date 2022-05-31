import React from "react";
import Mybutton from "../MyButton/MyButton";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.intro__title}>
          Test assignment for front-end developer
        </h1>
        <div className={styles.intro__description}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </div>
        <Mybutton text="Sign up" style={{ marginTop: "36px" }} />
      </div>
    </div>
  );
};

export default Intro;
