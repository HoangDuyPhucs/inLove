import React, { useEffect, useState } from 'react';
import './App.css';

const startDate = new Date('2024-05-31T09:15:00Z'); // 16:15 giờ Việt Nam

function App() {
  const [duration, setDuration] = useState({});

  useEffect(() => {
    const update = () => {
      const now = new Date();
      let diff = Math.floor((now - startDate) / 1000);

      const years = Math.floor(diff / (365 * 24 * 60 * 60));
      diff %= (365 * 24 * 60 * 60);

      const months = Math.floor(diff / (30 * 24 * 60 * 60));
      diff %= (30 * 24 * 60 * 60);

      const days = Math.floor(diff / (24 * 60 * 60));
      diff %= (24 * 60 * 60);

      const hours = Math.floor(diff / (60 * 60));
      diff %= (60 * 60);

      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;

      setDuration({ years, months, days, hours, minutes, seconds });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1>❤️ Hoàng Phucs - Cao Anh ❤️</h1>
      <h2>💖 In love for 💖</h2>
      <div className="counter">
        {Object.entries(duration).map(([key, value]) => (
          <div key={key}>
            {value} {key}{value !== 1 ? 's' : ''}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
