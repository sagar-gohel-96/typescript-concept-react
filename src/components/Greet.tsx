import React from "react";
type GeetProps = {
  name: string;
  messageCount?: number;
  isLoggedin: boolean;
};
const Greet = (props: GeetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedin
          ? ` Welcome ${props.name} you have ${props.messageCount} unread messages}`
          : "Login First"}
      </h2>
    </div>
  );
};

export default Greet;
