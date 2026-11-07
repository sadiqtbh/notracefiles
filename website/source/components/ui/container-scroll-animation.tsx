"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className={`min-h-[50rem] md:min-h-[65rem] flex items-center justify-center relative p-2 md:p-10 ${className || ''}`}
      ref={containerRef}>
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header: React.FC<{
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}> = ({
  translate,
  titleComponent
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-8">
      {titleComponent}
    </motion.div>
  );
};

export const Card: React.FC<{
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate?: MotionValue<number>;
  children: React.ReactNode;
}> = ({
  rotate,
  scale,
  children
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #00000010, 0 12px 30px rgba(0, 37, 63, 0.08), 0 30px 60px rgba(6, 182, 212, 0.08), 0 60px 100px rgba(0, 0, 0, 0.06)",
      }}
      className="max-w-6xl -mt-6 mx-auto w-full border border-slate-200/90 p-2 md:p-4 bg-white/90 backdrop-blur-xl rounded-[32px] shadow-2xl">
      <div
        className="w-full overflow-hidden rounded-2xl bg-white md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
