import React, { useState } from "react";
import "./PinEntryScreen.css";

function PinEntryScreen({ onSuccess }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  
  const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  };
  
  const salt = "tinhyeu2024";
  
  const hashWithSalt = (password) => {
    return simpleHash(password + salt);
  };
  
  const correctPasswordHash = (() => {
    const realPassword = String.fromCharCode(51,49,48,53,50,48,50,52);
    return hashWithSalt(realPassword);
  })();
  
  const handlePress = (value) => {
    if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "OK") {
      const inputHash = hashWithSalt(input);
      
      if (inputHash === correctPasswordHash) {
        onSuccess();
      } else {
        setError("Sai mật khẩu rồi 😢");
        setInput("");
      }
    } else {
      if (input.length < 8) {
        setInput((prev) => prev + value);
        setError("");
      }
    }
  };

  const renderDisplay = () => {
    return input.split("").map((_, i) => (
      <span key={i} className="dot">
        ⚫
      </span>
    ));
  };

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "DEL", "0", "OK"];

  return (
    <div className="pin-entry-screen">
      <p className="pin-title">🔒 Nhập mật mã tình yêu</p>
      <span>(gợi ý nhé: ngày mà em tỏ tình anh 🤭)</span>
      <div className="pin-display">{renderDisplay()}</div>
      {error && <div className="pin-error">{error}</div>}

      <div className="pin-keypad">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => handlePress(key)}
            className={`pin-key ${key === "DEL" ? "del" : ""} ${
              key === "OK" ? "ok" : ""
            }`}
          >
            {key === "DEL" ? "⌫" : key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PinEntryScreen;