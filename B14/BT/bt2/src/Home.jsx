import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const interValid = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interValid);
  }, [timer]);
  useEffect(() => {
    if (!isLoggedIn && timer === 0) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate, timer]);
  if (!isLoggedIn) {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
    return (
      <div>
        Bạn chưa đăng nhập, bạn sẽ được chuyển đến trang đăng nhập sau {timer}{" "}
        giây
      </div>
    );
  } else {
    localStorage.setItem("isLoggedIn", true);
    const handleLogout = () => {
      localStorage.removeItem("isLoggedIn");
      setTimer(5);
    };
    return (
      <div>
        <p>Welcome to home page</p>
        <button onClick={handleLogout}>Logout</button>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
