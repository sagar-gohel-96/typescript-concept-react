import React from "react";
type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};
const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>{props.name.firstName}</h1>
      <h1>{props.name.lastName}</h1>
    </div>
  );
};

export default Person;
