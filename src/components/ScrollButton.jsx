import { useState, useEffect } from "react";

export default function ScrollButton() {
  const [show, setShow] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
      setAtBottom(
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <div className="scroll-btns">
      {!atBottom ? (
        <button className="scroll-btn" onClick={scrollToBottom} title="Вниз">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M12 19l7-7M12 19l-7-7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <button className="scroll-btn" onClick={scrollToTop} title="Вверх">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5M12 5l7 7M12 5l-7 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
