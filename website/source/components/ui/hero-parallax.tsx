"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";

export interface ProductItem {
  title: string;
  link: string;
  thumbnail: string;
}

export interface HeroParallaxProps {
  products: ProductItem[];
  headerTitle?: React.ReactNode;
  headerDescription?: React.ReactNode;
}

export const HeroParallax: React.FC<HeroParallaxProps> = ({
  products,
  headerTitle,
  headerDescription
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[280vh] py-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-white">
      <Header title={headerTitle} description={headerDescription} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 sm:space-x-20 mb-12 sm:mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 sm:mb-20 space-x-12 sm:space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 sm:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header: React.FC<{
  title?: React.ReactNode;
  description?: React.ReactNode;
}> = ({
  title,
  description
}) => {
  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-32 px-4 w-full left-0 top-0 text-center md:text-left">
      {title || (
        <h2 className="text-3xl md:text-6xl font-extrabold text-[#00253f] tracking-tight">
          Visual Gallery <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00253f] via-[#004e7c] to-cyan-500">
            Every photo tells a hidden story.
          </span>
        </h2>
      )}
      {description || (
        <p className="max-w-2xl text-base md:text-lg mt-6 text-slate-600 font-medium">
          From mountain peaks with exact coordinates to indoor portraits containing camera serials — explore the files sanitized by NoTraceFiles.
        </p>
      )}
    </div>
  );
};

export const ProductCard: React.FC<{
  product: ProductItem;
  translate: MotionValue<number>;
}> = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -16,
      }}
      key={product.title}
      className="group/product h-80 sm:h-96 w-[22rem] sm:w-[30rem] relative shrink-0 rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg bg-white">
      <a href={product.link} className="block w-full h-full group-hover/product:shadow-2xl transition-shadow">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-105"
          alt={product.title} />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-[#00253f] via-[#00253f]/60 to-transparent pointer-events-none transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
          Scrubbed & Protected
        </span>
        <h3 className="text-white font-bold text-base">
          {product.title}
        </h3>
      </div>
    </motion.div>
  );
};
