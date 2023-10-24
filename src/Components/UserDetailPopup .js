import React from "react";

const UserDetailPopup = ({ user, onClose }) => {
  return (
    <div className="user-popup">
      <div className="popup-content">

        <img src={user.avatar} alt="avatar" />
        <div className="userName"> 
          {user.first_name} {user.last_name}
        </div>
        <div className="userEmail">{user.email}</div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetailPopup;
