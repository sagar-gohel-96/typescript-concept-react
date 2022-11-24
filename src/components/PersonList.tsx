import React from "react";
type personListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};
const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map((user) => {
        return <h2>{`${user.firstName}  ${user.lastName}`}</h2>;
      })}
    </div>
  );
};
export default PersonList;
