import React from "react";
export default function HelloWorld() {
  let name = "Cee";
  const user = {
    firstName: "Alex",
    lastName: "John",
  };
  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };
  return (
    <div>
      <div>
        Xin chao {name} and {formatName(user)}
      </div>
      <div>
        {name === "Cee" ? "Xin chao Cee" : `Xin chao ${formatName(name)}`}
      </div>
    </div>
  );
}