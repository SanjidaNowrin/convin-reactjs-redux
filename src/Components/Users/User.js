import React from "react";

const User = ({ user }) => {
  const { first_name, last_name, avatar, email } = user;
  console.log(first_name);
  return (
    <div className="mt-5 text-center col-lg-4 col-sm-6 gx-5">
      <div
        className="p-3 mb-5 border-0 rounded shadow card w-100 cardHover "
        style={{ background: "#e6f4ed" }}
      >
        <img src={avatar} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h3 className=" card-title fw-bold" style={{ color: "#157347" }}>
            {first_name} {last_name}
          </h3>
          <h5 className=" card-title text-secondary">
            <q>{email}</q>
          </h5>

          {/* <Link to={`/movie/${id}`}>
            <button className="container btn btn-success">View Details</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default User;
