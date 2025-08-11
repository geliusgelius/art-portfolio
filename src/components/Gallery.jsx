import { useState } from "react";
import "@/assets/scss/components/Gallery.scss";
import art1 from "@/assets/images/art1.jpg";
import art2 from "@/assets/images/art2.jpg";
import art3 from "@/assets/images/art3.jpg";
import art4 from "@/assets/images/art4.jpg";
import art5 from "@/assets/images/art5.jpg";
import art6 from "@/assets/images/art6.jpg";

const artworks = [
  {
    id: 1,
    image: art1,
    title:
      "Регис (Эмиель Регис Рогеллек Терзиефф-Годфрой) — персонаж литературного цикла «Ведьмак», написанного Анджеем Сапковским",
    year: 2020,
  },
  {
    id: 2,
    image: art2,
    title:
      "Сабрина Виктория Спеллман — персонаж одноименного сериала комиксов Archie Comics «Сабрина — маленькая ведьма».",
    year: 2019,
  },
  {
    id: 3,
    image: art3,
    title:
      "Арья Старк — персонаж, созданный американским писателем Джорджом Р. Р. Мартином (Игра Престолов)",
    year: 2019,
  },
  { id: 4, image: art4, title: "Скетч. Работа карандашом.", year: 2021 },
  {
    id: 5,
    image: art5,
    title: "Digital. Работа цифровой палитры.",
    year: 2024,
  },
  { id: 6, image: art6, title: "Скетч", year: 2020 },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= artworks.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? artworks.length - itemsToShow : prevIndex - 1
    );
  };

  const visibleArtworks = artworks.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Галерея работ</h2>
        <div className="gallery-container">
          <button
            className="nav-button prev-button"
            onClick={prevSlide}
            aria-label="Предыдущие работы"
          >
            &lt;
          </button>

          <div className="gallery-viewport">
            {visibleArtworks.map((art, index) => (
              <div
                className={`artwork-frame ${index === 1 ? "center" : ""}`}
                key={art.id}
              >
                <img className="artwork" src={art.image} alt={art.title} />
                <div className="artwork-info">
                  <h3>{art.title}</h3>
                  <p>{art.year}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="nav-button next-button"
            onClick={nextSlide}
            aria-label="Следующие работы"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
