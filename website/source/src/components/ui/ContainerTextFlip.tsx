import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";

export interface ContainerTextFlipProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const ContainerTextFlip: React.FC<ContainerTextFlipProps> = ({
  words,
  duration = 2400,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentWord((prev) => {
        const nextIndex = (words.indexOf(prev) + 1) % words.length;
        return words[nextIndex];
      });
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-0.5 rounded-lg bg-cyan-50/90 border border-cyan-200/80 text-cyan-900 font-semibold shadow-2xs transition-all duration-300",
        className
      )}
    >
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.span
          key={currentWord}
          initial={{
            opacity: 0,
            y: 6,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -6,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="inline-block whitespace-nowrap text-cyan-900 font-semibold"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
