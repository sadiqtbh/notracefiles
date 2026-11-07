"use client";
import React from "react";
import { motion } from "motion/react";

export interface ColourfulTextProps {
  text: string;
  colors?: string[];
  className?: string;
}

export function ColourfulText({
  text,
  colors: customColors,
  className
}: ColourfulTextProps) {
  const defaultColors = [
    "rgb(6, 182, 212)",   // Electric Cyan (Logo)
    "rgb(0, 37, 63)",     // Midnight Navy (Logo)
    "rgb(14, 165, 233)",  // Sky Blue
    "rgb(2, 132, 199)",   // Sapphire Blue
    "rgb(20, 184, 166)",  // Bright Teal
    "rgb(56, 189, 248)",  // Light Cyan
    "rgb(30, 58, 138)",   // Deep Navy
    "rgb(8, 145, 178)",   // Dark Cyan
    "rgb(45, 212, 191)",  // Aqua
    "rgb(12, 74, 110)",   // Deep Ocean
  ];

  const colors = customColors || defaultColors;

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [colors]);

  // Split into words, then characters, preserving whitespace-nowrap per word so punctuation never orphans alone
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wordIndex) => {
        const chars = word.split("");
        const isLastWord = wordIndex === words.length - 1;
        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {chars.map((char) => {
              const charIndex = globalCharIndex++;
              return (
                <motion.span
                  key={`${char}-${count}-${charIndex}`}
                  initial={{
                    y: 0,
                  }}
                  animate={{
                    color: currentColors[charIndex % currentColors.length],
                    y: [0, -2, 0],
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 0.4,
                    delay: charIndex * 0.04,
                  }}
                  className="inline-block font-display tracking-tight font-extrabold"
                >
                  {char}
                </motion.span>
              );
            })}
            {!isLastWord && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
}
