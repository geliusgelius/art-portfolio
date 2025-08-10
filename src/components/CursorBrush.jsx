import { useEffect } from "react";
import "@/assets/scss/components/CursorBrush.scss";

export default function CursorBrush() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-brush");
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="cursor-brush"></div>;
}
