import React, { useEffect, useState } from "react";

const Index = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const FinalData = await response.json();
    const usersArray = FinalData.data;
    setUsers(usersArray);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {users.map((item) => {
        return (
          <div className="card_item" key={item.id}>
            <div className="card_inner">
              <img src={item.avatar} alt="" />
              <div className="userName">
                {item.first_name} {item.last_name}
              </div>
              <div className="userUrl">{item.email}</div>
              <button className="btn">See More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
