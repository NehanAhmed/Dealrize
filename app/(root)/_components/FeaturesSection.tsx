import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import React from "react";
import { BentoFeatures } from "./BentoFeatures";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="flex w-full flex-col items-center justify-start gap-14"
    >
      <div className="max-w-xl text-center">
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto my-5"
          as="button"
          className="mx-auto flex items-center bg-white py-1 text-black dark:bg-black dark:text-white"
        >
          <span>Unique Features</span>
        </HoverBorderGradient>
        <h1 className="font-montserrat text-5xl font-extrabold">
          Everything You Need to Close More Deals
        </h1>
        <p className="text-md font-hanken mx-auto my-5 max-w-lg text-neutral-800 dark:text-neutral-600">
          AI detects opportunities, organizes visually, suggests
          responses—turning inbox chaos into closed partnerships instantly.
        </p>
      </div>
      <div>
        <BentoFeatures />
      </div>
    </section>
  );
};

export default FeaturesSection;
