"use client";
import React, { useState, useEffect, useId, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState<number | "auto">("auto");
  const textRef = useRef<HTMLDivElement>(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add padding to the text width
      const textWidth = textRef.current.scrollWidth + 32;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  const currentWord = words[currentWordIndex] || "";

  return (
    <motion.span
      layout
      layoutId={`words-here-${id}`}
      animate={{ width: width === "auto" ? undefined : width }}
      transition={{ duration: animationDuration / 2000, ease: "easeInOut" }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl border border-cyan-200/90 bg-cyan-50/70 px-4 py-1 text-center font-bold text-[#00253f] shadow-xs backdrop-blur-md align-middle overflow-hidden mx-1.5",
        className
      )}
      key={currentWord}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block whitespace-nowrap", textClassName)}
        ref={textRef}
        layoutId={`word-div-${currentWord}-${id}`}
      >
        <motion.div className="inline-flex items-center justify-center">
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{
                opacity: 0,
                y: 6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.015,
                duration: 0.2,
              }}
              className="inline-block font-sans"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.span>
  );
}