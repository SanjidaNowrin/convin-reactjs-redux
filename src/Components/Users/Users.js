import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Users/Users.css";
import { fetchUsers } from "../redux/slices/userSlice";

const Users = () => {
  // get all users from redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.user.users.data);

  // get single users
  const [number, setNumber] = useState([]);
  const handleClick = (id) => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setNumber(data.data));
  };

  return (
    <div className="container">
      {/* single user card */}
      {number?.first_name ? (
        <div className="container mt-3" style={{ width: "22rem" }}>
          <div className="p-3 mb-5 border-0  rounded shadow card w-100 cardHover ">
            <img
              src={number?.avatar}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center ">
              <h2 className="card-title fw-bold">
                {number?.first_name} {number?.last_name}
              </h2>
              <h5 className=" card-title text-secondary">{number?.email}</h5>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="fw-bold text-center mt-4 mb-4">Click on any button</h2>
      )}
      {/* button according to users */}
      {users?.length ? (
        <div className="pagination container">
          {users?.map((singleUser, index) => (
            <button
              key={singleUser.id}
              onClick={() => handleClick(singleUser.id)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
