import { useEffect, useState } from "react";
import "@/assets/scss/components/BackgroundTransition.scss";

export default function BackgroundTransition() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = ["home", "about", "gallery", "process", "contacts"];
    const observers = [];

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
              document.documentElement.style.setProperty(
                "--section-gradient",
                getGradientForSection(section)
              );
            }
          });
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(section);
      if (element) observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const getGradientForSection = (section) => {
    switch (section) {
      case "home":
        return "$gradient-1";
      case "about":
        return "$gradient-2";
      case "gallery":
        return "$gradient-3";
      case "process":
        return "$gradient-4";
      case "contacts":
        return "$gradient-1";
      default:
        return "$gradient-1";
    }
  };

  return null;
}
