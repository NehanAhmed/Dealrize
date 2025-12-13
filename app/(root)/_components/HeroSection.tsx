"use client";
import { IconBrandYcombinator } from "@tabler/icons-react";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import React from "react";
import { CreditCard } from "lucide-react";
import { FlipLink } from "./FlipLink";
import { HeroImage } from "./HeroImage";

const Hero = () => {
  return (
    <section className="font-hanken mt-20 flex min-h-screen w-full flex-col items-center justify-start">
      <div className="w-1/2 text-center">
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto my-5"
          as="button"
          className="mx-auto flex items-center bg-white py-1 text-black dark:bg-black dark:text-white"
        >
          <span>Not Backed by</span>
          <IconBrandYcombinator className="mx-1 text-orange-500" stroke={2} />
          <span>Combinator</span>
        </HoverBorderGradient>
        <h1 className="font-montserrat my-5 text-7xl font-extrabold">
          Turn Inbox Chaos Into Closed Deals
        </h1>
        <p className="mx-auto w-120 text-lg text-neutral-700 dark:text-neutral-700">
          AI-powered detection that turns inbox chaos into organized
          opportunities—automatically.
        </p>
        <Button className="mt-8 py-5">
          <FlipLink
            className="font-hanken text-lg shadow-lg"
            href="/get-started"
          >
            Get Started for Free
          </FlipLink>
        </Button>
        <p className="mx-auto mt-5 flex items-center justify-center gap-2">
          <CreditCard className="" /> No credit card Required{" "}
        </p>
      </div>
      <div className="mx-auto flex w-full items-start justify-center">
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
