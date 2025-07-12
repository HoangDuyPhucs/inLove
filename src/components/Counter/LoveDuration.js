import React, { useEffect, useState } from "react";
import "./LoveDuration.css";

const startDate = new Date("2024-05-31T09:15:00Z");

function LoveDuration() {
  const [duration, setDuration] = useState({});

  useEffect(() => {
    const update = () => {
      const now = new Date();
      let diff = Math.floor((now - startDate) / 1000);

      const year = Math.floor(diff / (365 * 24 * 60 * 60));
      diff %= 365 * 24 * 60 * 60;

      const month = Math.floor(diff / (30 * 24 * 60 * 60));
      diff %= 30 * 24 * 60 * 60;

      const day = Math.floor(diff / (24 * 60 * 60));
      diff %= 24 * 60 * 60;

      const hour = Math.floor(diff / (60 * 60));
      diff %= 60 * 60;

      const minute = Math.floor(diff / 60);
      const second = diff % 60;

      setDuration({ year, month, day, hour, minute, second });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const labels = {
    year: "year",
    month: "month",
    day: "day",
    hour: "hour",
    minute: "minute",
    second: "second",
  };

  return (
    <div className="main-content">
      <div className="person">
        <img src="/inLove/image/img_Phucs.jpg" alt="image_Hoàng Phúc" />
        <p>Hoàng Phucs</p>
      </div>
      <div className="counter-box">
        <h2>💖 We have been in love for 💖</h2>
        <div className="counter">
          {Object.entries(duration).map(([key, value]) => (
            <div key={key}>
              {value} {key}
              {value !== 1 ? "s" : ""}
            </div>
          ))}
        </div>
      </div>
      <div className="person">
        <img src="/inLove/image/img_CA.jpg" alt="image_Cao Anh" />
        <p>Cao Anh</p>
      </div>
    </div>
  );
}

export default LoveDuration;
