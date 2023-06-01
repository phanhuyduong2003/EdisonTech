import React, { useState } from "react";

const MAX_TEXT_LENGTH = 15;

function CheckInput() {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.charCode === 13) {
      let newMessage = "";
      if (content.length > 0 && content.length <= MAX_TEXT_LENGTH) {
        newMessage = "Nội dung hợp lệ.";
      } else if (content.length > MAX_TEXT_LENGTH) {
        newMessage =
          "Nội dung quá dài, vui lòng đảm bảo nội dung nhỏ hơn hoặc bằng 15 ký tự";
      }
      setMessage(newMessage);
    }
  };

  return (
    <div>
      <h3>Nội dung</h3>
      <input
        value={content}
        onChange={handleInputChange}
        onKeyPress={handleOnKeyPress}
        name="name"
        placeholder="Nhập nội dung"
        data-testid="input_name"
      />
      {message && (
        <div className="error_message">
          <h3 data-testid="error_message">{message}</h3>
        </div>
      )}
    </div>
  );
}

export default CheckInput;
