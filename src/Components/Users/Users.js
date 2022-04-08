import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Users/Users.css";
import User from "./User";
import { fetchUsers } from "../redux/slices/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector((state) => state.user.users.data);

  const [number, setNumber] = useState({});
  const handleClick = (id) => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setNumber(data.data));
  };

  return (
    <div className="container">
      {/* {users?.length === 0 ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {users?.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      )} */}
      {number?.first_name ? (
        <div className="card mb-3 mt-5 container" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={number?.avatar}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {number?.first_name}
                  {number?.last_name}
                </h5>
                <p className="card-text">{number?.email}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Click any button</h1>
      )}
      {/* button according to users */}

      {users?.length === 0 ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="pagination">
          {users?.map((singleUser, index) => (
            <button
              key={singleUser.id}
              //   className={number === page ? "selected" : ""}
              onClick={() => handleClick(singleUser.id)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
