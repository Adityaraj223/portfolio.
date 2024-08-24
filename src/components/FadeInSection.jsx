import React, { useEffect, useState } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const rect = document
      .getElementById("fade-in-section")
      .getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="fade-in-section"
      className={`fade-in ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
