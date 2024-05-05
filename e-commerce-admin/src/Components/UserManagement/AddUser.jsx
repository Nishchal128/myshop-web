import React, { useState } from "react";
import './AddUser.css';

const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const addUser = async () => {
    let dataObj;

    // Prepare user data
    let user = userDetails;

    await fetch("https://project-flipr-task.onrender.com/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dataObj = data;
      });

    if (dataObj.success) {
      alert("User Added");
    } else {
      alert("Failed to add user");
    }
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-user-container">
      <h2 className="add-user-title">Add New User</h2>
      <div className="add-user-form">
        <div className="add-user-field">
          <label className="add-user-label">Username</label>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="add-user-input"
          />
        </div>
        <div className="add-user-field">
          <label className="add-user-label">Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="add-user-input"
          />
        </div>
        <div className="add-user-field">
          <label className="add-user-label">Password</label>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="add-user-input"
          />
        </div>
        <button className="add-user-btn" onClick={addUser}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
