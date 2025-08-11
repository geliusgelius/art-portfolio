import { useState, useEffect, useRef } from "react";
import "@/assets/scss/components/SliderPhoto.scss";
import artist1 from "@/assets/images/artist-1.jpg";
import artist2 from "@/assets/images/artist-2.jpg";
import artist3 from "@/assets/images/artist-3.jpg";
import artist4 from "@/assets/images/artist-4.jpg";
import artist5 from "@/assets/images/artist-5.jpg";
import artist6 from "@/assets/images/artist-6.jpg";
import artist7 from "@/assets/images/artist-7.jpg";

const photos = [
  { id: 1, src: artist1, alt: "Работа 1" },
  { id: 2, src: artist2, alt: "Работа 2" },
  { id: 3, src: artist3, alt: "Работа 3" },
  { id: 4, src: artist4, alt: "Работа 4" },
  { id: 5, src: artist5, alt: "Работа 5" },
  { id: 6, src: artist6, alt: "Работа 6" },
  { id: 7, src: artist7, alt: "Работа 7" },
];

export default function SliderPhoto() {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const animationRef = useRef({
    startTime: null,
    progress: 0,
    requestId: null,
  });

  const duplicatedPhotos = [...photos, ...photos, ...photos];
  const slideWidth = 280;
  const gap = 20;
  const totalWidth = (slideWidth + gap) * photos.length;
  const animationDuration = 30000;

  const animate = (timestamp) => {
    if (!animationRef.current.startTime) {
      animationRef.current.startTime =
        timestamp - animationRef.current.progress * animationDuration;
      setIsAnimating(true);
    }

    const elapsed = timestamp - animationRef.current.startTime;
    animationRef.current.progress =
      (elapsed % animationDuration) / animationDuration;

    if (sliderRef.current) {
      const offset = animationRef.current.progress * totalWidth;
      sliderRef.current.style.transform = `translateX(${-offset}px) translateY(-50%)`;
    }

    if (!isHovered) {
      animationRef.current.requestId = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-totalWidth}px) translateY(-50%)`;
    }

    const initTimer = setTimeout(() => {
      setIsAnimating(true);
      animationRef.current.requestId = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(initTimer);
      if (animationRef.current.requestId) {
        cancelAnimationFrame(animationRef.current.requestId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isHovered) {
      animationRef.current.requestId = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      if (animationRef.current.requestId) {
        cancelAnimationFrame(animationRef.current.requestId);
        animationRef.current.requestId = null;
      }
    }
  }, [isHovered]);

  return (
    <div className="photo-slider">
      <div className="slider-container">
        <div
          className={`slider-track ${isAnimating ? "animating" : ""}`}
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {duplicatedPhotos.map((photo, index) => (
            <div key={`${photo.id}-${index}`} className="slide">
              <img
                src={photo.src}
                alt={photo.alt}
                className="slide-image"
                loading="lazy"
              />
              <div className="slide-caption">
                <span className="photo-number">
                  {(index % photos.length) + 1}/{photos.length}
                </span>
                <p>{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
