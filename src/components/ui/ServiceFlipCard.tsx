"use client";

import { Service } from "@/data/services";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FlipCardProps {
  service: Service;
}

export default function FlipCard({ service }: FlipCardProps) {
  // Flip-State steuert, ob Rückseite (true) oder Vorderseite (false) sichtbar ist
  const [isFlipped, setIsFlipped] = useState(false);

  // Ref, um die Card-Position im Scroll-Listener zu bestimmen
  const cardRef = useRef<HTMLDivElement>(null);

  // Framer Motion-Varianten
  const parentVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // HOVER-LOGIK (nur Desktop)
  function handleHoverStart() {
    if (window.innerWidth >= 768) {
      setIsFlipped(true);
    }
  }
  function handleHoverEnd() {
    if (window.innerWidth >= 768) {
      setIsFlipped(false);
    }
  }
  function handleOnClick() {
    setIsFlipped(!isFlipped);
  }

  // SCROLL-LOGIK (nur Mobile)
  useEffect(() => {
    // Wenn wir auf Desktop sind, brauchen wir keinen Scroll-Listener
    if (window.innerWidth >= 768) return;

    function handleScroll() {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();

      // Wenn das Top der Karte im oberen Drittel des Bildschirms ist => flip
      if (rect.top <= window.innerHeight * 0.3) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    // Beim ersten Render gleich prüfen, ob die Karte schon im oberen Bereich steht
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      // Ref für die Scroll-Position
      ref={cardRef}
      // 3D-Perspektive
      className="relative w-full h-80"
      style={{ perspective: 1000 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleOnClick}
    >
      <motion.div
        // Hover-Events => nur auf Desktop relevant
        // Zustand -> isFlipped? "back" : "front"
        animate={isFlipped ? "back" : "front"}
        variants={parentVariants}
        initial="front"
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative w-full h-full shadow-lg shadow-gray-300"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* VORDERSEITE */}
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateY(0deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {service.image ? (
            <div className="relative w-full h-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ) : (
            <div className="w-full h-full bg-primary" />
          )}

          {/* Titel */}
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <h2 className="text-xl font-bold text-white">{service.title}</h2>
          </div>
        </div>

        {/* RÜCKSEITE */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-primary"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <service.icon className="size-8 text-white mb-4" />
          <p className="text-sm text-center font-semibold">{service.alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
