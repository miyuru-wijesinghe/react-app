import React, { useEffect, useState } from "react";
import UserDetailPopup from "./UserDetailPopup ";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const FinalData = await response.json();
    const usersArray = FinalData.data;
    setUsers(usersArray);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const openUserDetailPopup = (user) => {
    setSelectedUser(user);
  };

  const closeUserDetailPopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container">
      {users.map((item) => {
        return (
          <div className="card_item" key={item.id}>
            <div className="card_inner">
              <img src={item.avatar} alt="avatar" />
              <div className="userName">
                {item.first_name} 
              </div>
              <div className="userUrl">{item.email}</div>
              <button className="btn" onClick={() => openUserDetailPopup(item)}>
                See More
              </button>
            </div>
          </div>
        );
      })}
      {selectedUser && (
        <UserDetailPopup user={selectedUser} onClose={closeUserDetailPopup} />
      )}
    </div>
  );
};

export default Index;
