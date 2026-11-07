"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export interface BackgroundBeamsWithCollisionProps {
  children?: React.ReactNode;
  className?: string;
}

export const BackgroundBeamsWithCollision: React.FC<BackgroundBeamsWithCollisionProps> = ({
  children,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 20,
      translateX: 20,
      duration: 7,
      repeatDelay: 3,
      delay: 1,
    },
    {
      initialX: 180,
      translateX: 180,
      duration: 5,
      repeatDelay: 4,
      delay: 3,
      className: "h-8",
    },
    {
      initialX: 350,
      translateX: 350,
      duration: 4,
      repeatDelay: 6,
      className: "h-14",
    },
    {
      initialX: 520,
      translateX: 520,
      duration: 6,
      repeatDelay: 5,
      delay: 2,
    },
    {
      initialX: 700,
      translateX: 700,
      duration: 3.5,
      repeatDelay: 3,
      delay: 4,
      className: "h-10",
    },
    {
      initialX: 880,
      translateX: 880,
      duration: 8,
      repeatDelay: 2,
      className: "h-16",
    },
    {
      initialX: 1050,
      translateX: 1050,
      duration: 4,
      repeatDelay: 3,
      className: "h-12",
    },
    {
      initialX: 1220,
      translateX: 1220,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-8",
    },
    {
      initialX: 1380,
      translateX: 1380,
      duration: 5,
      repeatDelay: 5,
      delay: 1,
      className: "h-12",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex flex-col items-center w-full justify-center overflow-hidden bg-white",
        className
      )}>
      {beams.map((beam, idx) => (
        <CollisionMechanism
          key={beam.initialX + "-beam-" + idx}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef} />
      ))}
      <div className="relative z-20 w-full">
        {children}
      </div>
      <div
        ref={containerRef}
        className="absolute bottom-0 w-full inset-x-0 pointer-events-none h-1"
        style={{
          boxShadow:
            "0 0 24px rgba(6, 182, 212, 0.2), 0 1px 2px rgba(0, 37, 63, 0.08)",
        }}></div>
    </div>
  );
};

export interface BeamOptions {
  initialX?: number;
  translateX?: number;
  initialY?: string;
  translateY?: string;
  rotate?: number;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
  className?: string;
}

interface CollisionMechanismProps {
  parentRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  beamOptions?: BeamOptions;
}

const CollisionMechanism = React.forwardRef<HTMLDivElement, CollisionMechanismProps>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const timeout1 = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      const timeout2 = setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || 0,
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || 0,
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-0 m-auto h-16 w-0.5 rounded-full bg-gradient-to-t from-cyan-500 via-sky-400 to-transparent pointer-events-none z-10 opacity-70",
          beamOptions.className
        )} />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }} />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const spans = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 90 - 45),
    directionY: Math.floor(Math.random() * -60 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-30 h-2 w-2 pointer-events-none", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1.5 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-[#00253f] shadow-sm shadow-cyan-500/50" />
      ))}
    </div>
  );
};
