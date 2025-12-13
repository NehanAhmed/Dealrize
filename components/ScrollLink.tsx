// components/ScrollLink.tsx
"use client";

import Link from "next/link";
import { FC } from "react";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink: FC<ScrollLinkProps> = ({ href, children, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80; // 80px offset for fixed header

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ScrollLink;
