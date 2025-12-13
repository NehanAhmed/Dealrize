"use client";
import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion(Link);

export const FlipLink = ({
  children,
  href,
  className,
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  return (
    <MotionLink
      initial="initial"
      whileHover="hovered"
      href={href ? href : ""}
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </MotionLink>
  );
};
