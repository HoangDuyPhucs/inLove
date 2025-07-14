import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Rendering from "./components/RenderingWeb/WeddingLoader";
import LoveDuration from "./components/Counter/LoveDuration";
import MusicPlayer from "./components/Music/MusicPlayer";
import FallingHearts from "./components/Effect/FallingHearts";
import PinEntryScreen from "./components/Password/PinEntryScreen";
import LetterScreen from "./components/Letter/LetterScreen";

function App() {
  const [step, setStep] = useState("intro"); // intro → password → loading → letter → main
  const audioRef = useRef(null);

  useEffect(() => {
    if (step !== "intro" && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((err) => {
        console.warn("⚠️ Trình duyệt chặn phát nhạc:", err);
      });
    }
  }, [step]);

  useEffect(() => {
    if (step === "loading") {
      const timer = setTimeout(() => setStep("letter"), 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/inLove/music/love_song.mp3"
        preload="auto"
        loop
      />

      {step === "intro" && (
        <div
          className="intro-screen"
          onClick={() => setStep("password")}
          style={{
            height: "100vh",
            backgroundColor: "#fff0f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          <p class="text-intro">💖 Sẵn sàng nhận món quá siêu đáng yêu của anh chưaaa. 💖</p>
          <img
            src="/inLove/image/img_dog.png"
            alt="Start Button"
            style={{
              width: "150px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
            title="Click để bắt đầu 🐶"
          />
        </div>
      )}

      {step === "password" && (
        <PinEntryScreen onSuccess={() => setStep("loading")} />
      )}

      {step === "loading" && <Rendering />}

      {step === "letter" && <LetterScreen onNext={() => setStep("main")} />}

      {step === "main" && (
        <div className="App">
          <h1>❤️ Our Love Journey ❤️</h1>
          <LoveDuration />
          <MusicPlayer audioRef={audioRef} />
          <FallingHearts />
        </div>
      )}
    </>
  );
}

export default App;
