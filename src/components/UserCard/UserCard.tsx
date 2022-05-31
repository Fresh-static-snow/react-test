import React, { FC } from "react";
import { IUser } from "../../models/user.types";
import styles from "./UserCard.module.scss";
import User from "../../assets/photo-cover.svg";

interface IUserCardProps {
  user: IUser;
}

const UserCard: FC<IUserCardProps> = ({ user }) => {
  return (
    <div className={styles.container}>
      <img
        src={user.photo}
        width="70px"
        height="70px"
        alt="user"
        className={styles.image}
        onError={(e: any) => {
          e.target.src = User;
          e.onerror = null;
        }}
      />
      <div className={styles.name}>{user.name}</div>
      <>
        <div className={styles.info}>{user.position}</div>
        <div className={styles.info}>{user.email}</div>
        <div className={styles.info}>{user.phone}</div>
      </>
    </div>
  );
};

export default UserCard;
