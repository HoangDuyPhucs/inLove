import React from "react";
import "./WeddingLoader.css";

function WeddingLoader() {
  return (
    <div className="wedding-loader">
      <p className="loading-text">Đợi anh một chút nhé...</p>

      <div className="loading-bar">
        <div className="drive-container">
          <img
            src="/inLove/image/img_car.png"
            alt="Wedding Car"
            className="car"
          />
          <div className="heart-trail">💗 💖 💞 💘</div>
        </div>
      </div>
    </div>
  );
}

export default WeddingLoader;
