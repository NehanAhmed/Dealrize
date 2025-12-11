'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Background glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg "
        initial={false}
      />

      {/* Icons container */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={false}
      >
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: 20, opacity: 0, rotate: -180 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 180 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="absolute"
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-neutral-700 dark:text-neutral-400" />
          ) : (
            <Sun className="h-5 w-5 text-neutral-700 dark:text-neutral-800" />
          )}
        </motion.div>
      </motion.div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-white dark:bg-neutral-950"
        initial={false}
        animate={{
          opacity: [0.5, 0],
          scale: [1, 1.5],
        }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
        onClick={(e) => {
          e.currentTarget.style.pointerEvents = 'none';
        }}
      />
    </motion.button>
  );
}