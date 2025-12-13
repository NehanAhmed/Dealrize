import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import React from "react";
import { FlipLink } from "./FlipLink";
import Image from "next/image";

const Integrations = () => {
  return (
    <section className="mt-40 flex w-full items-center justify-center">
      <div className="flex max-w-6xl items-center justify-center gap-5 rounded-xl border border-neutral-400 p-10 py-10 shadow-lg">
        <div className="flex w-1/2 flex-col items-start justify-start gap-5">
          <HoverBorderGradient
            containerClassName="rounded-full "
            as="button"
            className="mx-auto flex items-center bg-white py-1 text-black dark:bg-black dark:text-white"
          >
            <span>Integration</span>
          </HoverBorderGradient>
          <div>
            <h1 className="text-5xl font-extrabold">Seamless Integrations</h1>
            <p className="my-2 text-neutral-700 dark:text-neutral-600">
              Connect the platforms you already use. One-click authentication
              syncs your Gmail and YouTube—so DealFlow AI can start finding
              opportunities in seconds, not hours.
            </p>
          </div>
          <Button className="py-5">
            <FlipLink
              className="font-hanken text-lg shadow-lg"
              href="/get-started"
            >
              Get Started for Free
            </FlipLink>
          </Button>
        </div>
        <div className="w-1/2 rounded-xl">
          <Image
            src="/dashboard.webp"
            width={100}
            height={100}
            alt="Image"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
