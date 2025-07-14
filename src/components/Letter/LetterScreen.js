import React from "react";
import "./LetterScreen.css";

function LetterScreen({ onNext }) {
  return (
    <div className="letter-screen">
      <div className="letter-box">
        <h2>💌 Gửi đến người yêu tui 💌</h2>
        <p>
          Hôm nay là ngày 15 tháng 7, chúc mừng sinh nhật em yêuuu nhé. Chúc em tuổi mới luôn thật nhiều sức khỏe, luôn mỉm cười rạng rỡ mỗi ngày, và giữ mãi sự hồn nhiên, đáng yêu của em.
        </p>
        <p>🎁 Cái này là món quà nhỏ a dành tặng cho e. a mới có ý tưởng và làm gần đây nên chắc chắn sẽ còn nhiều thiếu sót… Em thông cảm cho anh nhaaa!<br/> a sẽ cố gắng làm nó hoàn thiện. Ừm... chắc là deadline sẽ là đến lúc mình cưới nhé😆😆😆 .</p>
        <p>Cảm ơn em đã ở bên anh khoảng 1 năm 1 tháng 15 ngày... anh đã rất vui, vì được đồng hành cùng e, cùng nhau lắng nghe, thấu hiểu nhau. Thời gian được ở canh e tuy không nhiều nhưng anh đều rất vui, yêu xa nhiều thiệt thòi nhỉ... nhưng cũng là thử thách để a trân trọng tình cảm của chúng mình hơn </p>
        <p>Có lẽ, là 1 người hơi overlinhtinh, hay lo xa và nghĩ nhiều. Anh mong rằng, vào một ngày không xa,
          Em sẽ cho anh một “cái gật đầu” cho tương lai phía trước – nơi có anh, có em, và có cả chúng ta.</p>
        <p>
          A hy vọng mình sẽ có thể đồng hành với nhau trong tương lai gần. Rất mong đến ngày mà mình có thể ở bên cạnh nhau... everyday🥰
        </p>
        <p>Yêu em rất rất rất nhiều. Hehe❤️</p>
        <div className="sign-block">
          <img
            src="/inLove/image/img_couple_chibi.png"
            alt="Love illustration"
            className="love-image-aligned"
          />
          <p className="sign">💖 Đồ Chó yêu emmm 💖</p>
        </div>

        <button className="btn-next" onClick={onNext}>
          👉 Không xàm xí nữa... Đi thui
        </button>
      </div>
    </div>
  );
}

export default LetterScreen;
