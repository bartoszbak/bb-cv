import { useLayoutEffect, useState } from "react";
import styles from "./Background.module.css";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomGradient = () => {
  const colors = Array.from({ length: 3 }, () => 
    `hsl(${random(0, 360)}, ${random(40, 90)}%, ${random(55, 90)}%)`
  );
  return { gradient: `conic-gradient(at 50% 50%, ${colors.join(", ")})`, mainColor: colors[0] };
};

const Background = ({ onUpdate }) => {
  const [{ gradient, mainColor }, setBackground] = useState(generateRandomGradient);

  const updateBackground = () => {
    const newBackground = generateRandomGradient();
    setBackground(newBackground);

    // Update the avatar background color
    const avatarElement = document.querySelector("[data-color]");
    if (avatarElement) {
      avatarElement.style.backgroundColor = newBackground.mainColor;
    }
  };

  useLayoutEffect(() => {
    updateBackground();
    
    if (onUpdate) {
      onUpdate(updateBackground);
    }
  }, []);

  return <div className={styles.background} style={{ background: gradient, filter: "blur(196px)" }}></div>;
};

export default Background;