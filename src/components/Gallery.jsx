import { useState } from "react";
import "@/assets/scss/components/Gallery.scss";

const artworks = [
  { id: 1, image: "/images/art1.jpg", title: "работа 1", year: 2023 },
  { id: 2, image: "/images/art2.jpg", title: "работа 2", year: 2022 },
  { id: 3, image: "/images/art3.jpg", title: "работа 2", year: 2022 },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Галерея работ</h2>
        <div className="gallery-container">
          <div className="artwork-frame">
            <img
              src={artworks[currentIndex].image}
              alt={artworks[currentIndex].title}
              className="artwork"
            />
          </div>
          <div className="gallery-controls">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + artworks.length) % artworks.length
                )
              }
              className="nav-button"
            >
              ←
            </button>
            <div className="artwork-info">
              <h3>{artworks[currentIndex].title}</h3>
              <p>{artworks[currentIndex].year}</p>
            </div>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % artworks.length)
              }
              className="nav-button"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
