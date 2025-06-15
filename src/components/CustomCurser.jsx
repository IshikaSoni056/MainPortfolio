"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const followerX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const followerY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const down = () => setIsClicked(true);
    const up = () => setIsClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />

      {/* Trailing Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm pointer-events-none z-[9998] mix-blend-difference shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        style={{
          translateX: followerX,
          translateY: followerY,
          scale: isClicked ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;
