import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart, Gift, Sparkles, Music2, Pause, Play, Cake, Stars } from "lucide-react";
import "./styles.css";

const wishes = [
  "May your smile always be brighter than the stars and your heart always be surrounded by people who adore you.",
  "You deserve a day filled with little surprises, beautiful memories, endless laughter and all the happiness in the world.",
  "May this new chapter of your life bring you closer to every dream you secretly wish for.",
];

function App() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpened(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        alert("Tap the music button once more to start the birthday music 🎵");
      }
    }
  };

  return (
    <main className="app">
      <audio ref={audioRef} loop preload="auto">
        <source src="/birthday.mp3" type="audio/mpeg" />
      </audio>

      <div className="floating-hearts" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ "--i": i }}>♥</span>
        ))}
      </div>

      <button className="music-button" onClick={toggleMusic} aria-label="Toggle birthday music">
        {playing ? <Pause size={18} /> : <Play size={18} />}
        <Music2 size={18} />
        <span>{playing ? "Music On" : "Play Music"}</span>
      </button>

      <section className="hero">
        <div className="eyebrow"><Sparkles size={16} /> A little birthday surprise <Sparkles size={16} /></div>
        <div className="cake-orb"><Cake size={54} strokeWidth={1.5} /></div>
        <p className="small-title">TODAY IS ALL ABOUT YOU</p>
        <h1>Happy Birthday,<br /><span>Beautiful! 💕</span></h1>
        <p className="subtitle">
          Wishing the most wonderful woman an incredibly beautiful birthday
          filled with love, laughter, peace and unforgettable moments.
        </p>

        <button className="surprise-btn" onClick={() => setOpened(true)}>
          <Gift size={20} />
          {opened ? "Your Surprise Awaits ↓" : "Open Your Surprise"}
        </button>
      </section>

      <section className={`letter-section ${opened ? "visible" : ""}`}>
        <div className="card">
          <div className="card-top"><Heart fill="currentColor" size={24} /></div>
          <p className="script">A little note for you...</p>
          <h2>Some people make life <span>more beautiful</span> just by being in it.</h2>
          <p className="letter">
            Today is a celebration of <strong>you</strong> — your beautiful heart,
            your lovely smile, and all the warmth you bring to the people around you.
          </p>
          <p className="letter">
            May every sunrise bring you a reason to smile, every dream find its way
            to you, and every ordinary day turn into something worth remembering.
          </p>
          <p className="letter highlight">
            Keep shining, keep smiling, and never forget just how special you are. 💗
          </p>
          <div className="signature">With lots of warm wishes & love <span>♥</span></div>
        </div>
      </section>

      <section className="memories">
        <div className="section-heading">
          <Sparkles size={22} />
          <h2>Beautiful memories ✨</h2>
          <Sparkles size={22} />
        </div>
        <p className="memory-intro">A little collection of beautiful moments — replace these photos with her own whenever you're ready. 💕</p>
        <div className="photo-grid">
          {[
            ["photos/photo1.jpeg", "That beautiful smile 💕"],
            ["photos/photo2.jpeg", "Simply wonderful ✨"],
            ["photos/photo3.jpeg", "A moment worth remembering 🌸"],
            ["photos/photo4.jpeg", "Keep shining 🌷"],
            ["photos/photo1.jpeg", "Beautiful inside & out 💗"],
            ["photos/photo4.jpeg", "Birthday girl energy 🎂"],
          ].map(([image, caption], i) => (
            <div className={`photo-card photo-${i + 1}`} key={i}>
              <img src={image} alt={caption} />
              <div className="photo-caption">{caption}</div>
            </div>
          ))}
        </div>
        <p className="photo-note">📸 Just replace the image URLs in <strong>src/main.jsx</strong> with her photos later.</p>
      </section>

      <section className="wishes">
        <div className="section-heading">
          <Stars size={22} />
          <h2>Birthday wishes, just for you</h2>
          <Stars size={22} />
        </div>
        <div className="wish-grid">
          {wishes.map((wish, i) => (
            <article className="wish" key={wish}>
              <div className="wish-number">0{i + 1}</div>
              <p>{wish}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final">
        <div className="final-glow"><Heart fill="currentColor" size={34} /></div>
        <p className="script">One more thing...</p>
        <h2>May your birthday be as lovely as your <span>smile.</span></h2>
        <p>Here's to another year of beautiful memories, happy moments and dreams coming true.</p>
        <div className="confetti-text">🎂 ✨ 🌸 💕 ✨ 🌸 🎂</div>
      </section>

      <footer>Made with a little extra sparkle, just for your special day ✨</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
