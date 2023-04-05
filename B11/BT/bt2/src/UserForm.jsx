import React from "react";

export default function UserForm({inputValue}) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="Please enter your name" onChange={inputValue}/>
    </div>
  );
}
