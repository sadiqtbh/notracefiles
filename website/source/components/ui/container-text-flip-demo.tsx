"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export function ContainerTextFlipDemo() {
  const words = ["better", "modern", "beautiful", "awesome"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-[#00253f] md:text-7xl"
      )}
      layout>
      <div className="inline-block">
        Make your websites look 10x <ContainerTextFlip words={words} />
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
