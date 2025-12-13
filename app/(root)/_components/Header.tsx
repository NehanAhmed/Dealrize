"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FlipLink } from "./FlipLink";
import Link from "next/link";
import ScrollLink from "@/components/ScrollLink";
import { useAuth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  const [StarCount, setStarCount] = useState("");
  useEffect(() => {
    const fetchStarCount = async () => {
      const response = await fetch(
        "https://api.github.com/repos/NehanAhmed/dealrize",
      );

      const data = await response.json();
      setStarCount(data.stargazers_count);
    };
    fetchStarCount();
  }, []);

  const navItems = [
    { id: 1, name: "Process", url: "#process" },
    { id: 2, name: "Features", url: "#features" },
    { id: 3, name: "Pricing", url: "#pricing" },
  ];

  const { isSignedIn } = useAuth();
  return (
    <header className="flex w-full items-center justify-around px-20 py-10">
      <div>
        <Link href="/">
          <h1 className="font-hanken text-2xl font-extrabold">Dealrize</h1>
        </Link>
      </div>
      <div className="font-hanken flex w-lg items-center justify-center gap-4 text-lg">
        {navItems.map((i) => (
          <span key={i.id}>
            <FlipLink className="" href={i.url}>
              {i.name}
            </FlipLink>
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        {isSignedIn ? (
          <Button className="flex">
            <FlipLink
              href="/dashboard"
              className="flex items-center justify-center gap-2"
            >
              <div className="flex items-center justify-center gap-2">
                Dashboard <ArrowRight />
              </div>
            </FlipLink>
          </Button>
        ) : (
          <>
            <Button variant={"outline"}>
              <FlipLink href="/login">Login</FlipLink>
            </Button>
            <Button>
              <FlipLink href="/get-started">Get Started</FlipLink>
            </Button>
          </>
        )}

        <Link href="https://github.com/NehanAhmed" target="_blank">
          <Button variant={"outline"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>

            {StarCount ? StarCount : "0"}
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
