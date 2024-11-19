"use client";
import Image from "next/image";
import React, { PropsWithChildren, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.scss";

import pic5 from "@/assets/images/avata.jpg";
import pic1 from "@/assets/images/burg_eltz.jpg";
import pic6 from "@/assets/images/fly_through.jpg";
import pic3 from "@/assets/images/from_above.jpg";
import pic7 from "@/assets/images/goggles.jpg";
import pic4 from "@/assets/images/mavick.jpg";
import pic2 from "@/assets/images/winter_town.jpg";

function ZoomParallax() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 0.5], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  // Standard: 4,9,8,8,8,8,8

  const pictures = [
    {
      src: pic1,
      scale: scale4,
    },
    {
      src: pic2,
      scale: scale6,
    },
    {
      src: pic3,
      scale: scale8,
    },
    {
      src: pic4,
      scale: scale9,
    },
    {
      src: pic5,
      scale: scale8,
    },
    {
      src: pic6,
      scale: scale6,
    },
    {
      src: pic7,
      scale: scale8,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ZoomParallax;
