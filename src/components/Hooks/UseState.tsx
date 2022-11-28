import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

const UseState = () => {
  const [user, setUser] = useState<AuthUser | null>();
  const handleLogin = () => {
    setUser({
      name: "John Doe",
      email: "johndoe@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      {user && (
        <h1>
          Name : {user.name}
          <br />
          Email :{user.email}
        </h1>
      )}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UseState;
