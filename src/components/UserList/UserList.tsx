import { useCallback, useEffect, useRef, useState } from "react";
import { IUser } from "../../models/user.types";
import UserCard from "../UserCard/UserCard";
import styles from "./UserList.module.scss";
import Mybutton from "../MyButton/MyButton";
import { userAPI } from "../../services/UserService";
import CircularProgress from "@mui/material/CircularProgress";

const UserList = () => {
  const [page, setPage] = useState<number>(1);
  const [renderedUsers, setRenderedUsers] = useState<number>(6);
  const [count, setCount] = useState<number>(100);
  const { data, isLoading, error } = userAPI.useGetAllUsersQuery({
    page,
    count,
  });
  let limit: any = useRef(null);

  const getTitle = (status: any) => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        limit.current = status;
        resolve(status);
      }, 1000);
    });
  };

  useEffect(() => {
    (async () => {
      limit.current = await getTitle(data?.total_users);
    })();
  }, []);

  const filteredUsers = [...(data?.users ?? [])].sort(
    (a: IUser, b: IUser) => b.registration_timestamp - a.registration_timestamp
  );

  const showMore = () => {
    setRenderedUsers((prev: number) => (prev += 6));
  };

  const showLess = () => {
    setRenderedUsers(6);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Working with <br /> GET request
      </h1>
      <div style={{ height: "50px" }}></div>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <CircularProgress size="3rem" color={"secondary"} />
        </div>
      )}
      {error && (
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
            marginBottom: "50px",
          }}
        >
          Server error...
        </h2>
      )}
      {data && (
        <>
          <div className={styles.list}>
            {filteredUsers.slice(0, renderedUsers).map((user: IUser) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
          <div style={{ height: "50px" }}></div>
          <Mybutton
            onClick={renderedUsers >= data.users.length ? showLess : showMore}
            text={
              renderedUsers >= data.users.length ? "Show less" : `Show more`
            }
            style={{
              display: "flex",
              justifyContent: "center",
              width: "120px",
            }}
          />
        </>
      )}
    </div>
  );
};

export default UserList;
