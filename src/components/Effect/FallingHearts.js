import React, { useEffect } from 'react';
import './FallingHearts.css';

function FallingHearts() {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'falling-heart';
      heart.innerText = '💖';

      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 2 + Math.random() * 3 + 's';
      heart.style.fontSize = 16 + Math.random() * 24 + 'px';

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default FallingHearts;
