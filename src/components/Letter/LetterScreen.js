import React from "react";
import "./LetterScreen.css";

function LetterScreen({ onNext }) {
  return (
    <div className="letter-screen">
      <div className="letter-box">
        <h2>💌 Gửi đến người anh yêu 💌</h2>
        <p>
          Từ khoảnh khắc chúng ta gặp nhau, anh đã biết rằng cuộc sống sẽ thật
          đặc biệt. Cảm ơn em vì đã luôn bên anh, cùng cười, cùng chia sẻ, và
          cùng yêu thương. ❤️
        </p>
        <p>
          Từng giây từng phút bên em là một hành trình tuyệt vời. Anh hy vọng
          chặng đường phía trước sẽ mãi có em, tay trong tay. 🥰
        </p>
        <p>Yêu em thật nhiều!</p>
        <div className="sign-block">
          <img
            src="/inLove/image/img_couple_chibi.png"
            alt="Love illustration"
            className="love-image-aligned"
          />
          <p className="sign">— Hoàng Phúc 💖</p>
        </div>

        <button className="btn-next" onClick={onNext}>
          👉 Tiếp tục
        </button>
      </div>
    </div>
  );
}

export default LetterScreen;
