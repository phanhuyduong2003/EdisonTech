import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const interValid = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interValid);
  }, [timer]);
  const navigate = useNavigate();
  const check = localStorage.getItem("isLoggedIn");
  if (!check) {
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate("/");
      localStorage.setItem("isLoggedIn", true);
    };
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        }}
      >
        <Link to='/' style={{backgroundColor: 'blueviolet', color: 'white', textDecoration: 'none', margin: 10}}>Home</Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #33CCFF",
            borderRadius: 5,
            width: 300,
            padding: 20,
          }}
        >
          <h1>Login</h1>
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 10,
            }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="" style={{ padding: "10px 0", display: "flex" }}>
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              style={{
                width: 274,
                height: 25,
                border: "none",
                borderBottom: "1px solid #33CCFF",
                outline: "none",
              }}
              required
            />
            <label htmlFor="" style={{ padding: "10px 0", display: "flex" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              style={{
                width: 274,
                height: 25,
                border: "none",
                borderBottom: "1px solid #33CCFF",
                outline: "none",
              }}
              required
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#33CCFF",
                  width: 50,
                  height: 10,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "30px 0",
                  margin: 10,
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    return (
      <div>
        Bạn đã đăng nhập, bạn sẽ được chuyển hướng về trang chủ sau {timer} giây
      </div>
    );
  }
}
