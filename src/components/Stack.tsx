import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cards: React.ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
}

const Stack: React.FC<StackProps> = ({
  randomRotation = false,
  sensitivity = 200,
  sendToBackOnClick = false,
  cards,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
}) => {
  const [items, setItems] = useState(
    cards.map((c, i) => ({ id: i, content: c, rot: randomRotation ? Math.random() * 10 - 5 : 0 }))
  );
  const [isHovered, setIsHovered] = useState(false);

  const moveToEnd = () => {
    setItems((prev) => {
      const newItems = [...prev];
      const top = newItems.pop();
      if (top) {
        top.rot = randomRotation ? Math.random() * 10 - 5 : 0;
        newItems.unshift(top);
      }
      return newItems;
    });
  };

  useEffect(() => {
    if (!autoplay) return;
    if (pauseOnHover && isHovered) return;

    const interval = setInterval(() => {
      moveToEnd();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, pauseOnHover, isHovered, randomRotation]);

  const handleDragEnd = (_: any, info: any) => {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      moveToEnd();
    }
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center perspective-[1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {items.map((item, index) => {
        const isTop = index === items.length - 1;
        const depth = items.length - 1 - index;
        return (
          <motion.div
            key={item.id}
            className="absolute w-full h-full rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing"
            style={{
              zIndex: index,
            }}
            initial={{ scale: 1, y: 0, rotate: item.rot }}
            animate={{
              scale: 1 - depth * 0.05,
              y: -depth * 25,
              rotate: depth === 0 ? item.rot : item.rot * 0.5,
              opacity: 1 - depth * 0.2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            drag={isTop ? true : false}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={isTop ? handleDragEnd : undefined}
            onClick={isTop && sendToBackOnClick ? moveToEnd : undefined}
            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
          >
            {item.content}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Stack;
