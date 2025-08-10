import { useState, useEffect } from "react";
import "@styles/components/Palette.scss";

const colors = [
  "#3a2c2a", // coffee-dark
  "#6f4e37", // coffee-medium
  "#a38b6a", // coffee-light
  "#f5e8d0", // cream
  "#c8a173", // accent
];

export default function Palette() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeColor, setActiveColor] = useState(colors[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const progress = (scrollY / (docHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      const colorIndex = Math.floor(progress / 25) % colors.length;
      setActiveColor(colors[colorIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="palette" style={{ "--active-color": activeColor }}>
      <div className="palette-track" style={{ height: `${scrollProgress}%` }} />

      <div className="color-blobs">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-blob ${activeColor === color ? "active" : ""}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
