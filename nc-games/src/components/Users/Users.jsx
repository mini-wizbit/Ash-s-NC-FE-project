import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../../utils/api";
import { Loading } from "../Loader/Loader";
import "./Users.css";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUsers().then(({ users }) => {
      console.log(users);
      setLoading(false);
      setUsers(users);
    });
  }, []);

  return loading ? (
    <>
      <Loading></Loading>
      <p>...loading</p>
    </>
  ) : (
    <div className="our-Users">
      <ul>
        {users.map((user) => {
          return (
            <div className="users-box">
              <li>
                <img src={user.avatar_url} alt="Users chosen Image"></img>
                <h2 className="Username">{user.username}</h2>
                <h3 className="realname">{user.name}</h3>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
