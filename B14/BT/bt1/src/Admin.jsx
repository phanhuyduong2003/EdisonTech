import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = ({ isAdmin, children }) => {
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const interValid = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interValid);
  }, [timer]);
  useEffect(() => {
    const navigate = useNavigate();
    if (!isAdmin && timer === 0) {
      navigate("/");
    }
  }, [isAdmin, navigate, timer]);
  const handleRedirectUser = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  if (!isAdmin) {
    handleRedirectUser();
    return (
      <div>
        Bạn không phải là admin để truy cập trang này. Bạn sẽ được chuyển hướng
        về trang chủ sau {timer} giây
      </div>
    );
  }
  return <div>{children}</div>;
};
export default Admin;
