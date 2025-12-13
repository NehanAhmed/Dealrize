import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import React from "react";

const howItWorksSteps = [
  {
    id: 1,
    name: "Connect & Scan",
    para: "Link inbox. AI scans 90 days instantly.",
    image: "/images/step-connect-scan.png",
  },
  {
    id: 2,
    name: "Discover Hidden Deals",
    para: "AI finds real opportunities. Filters spam automatically.",
    image: "/images/step-discover-deals.png",
  },
  {
    id: 3,
    name: "Close & Earn",
    para: "Respond smart. Track visually. Never miss deals.",
    image: "/images/step-close-earn.png",
  },
];

const HowitWorks = () => {
  return (
    <section
      id="process"
      className="font-hanken mt-20 flex w-full flex-col items-center justify-start gap-10"
    >
      <div className="w-xl text-center">
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto my-5"
          as="button"
          className="mx-auto flex items-center bg-white py-1 text-black dark:bg-black dark:text-white"
        >
          <span>Just Simple as One Click</span>
        </HoverBorderGradient>
        <h1 className="text-5xl font-extrabold">
          Get clear answers in 3 simple steps
        </h1>
        <p className="my-5 text-neutral-700">
          From data to clarity—uncover insights, take action, and grow smarter
          in three simple steps.
        </p>
      </div>
      <div className="w-8xl flex items-center justify-center gap-10">
        {howItWorksSteps.map((i) => (
          <div
            key={i.id}
            className="h-[448px] w-md rounded-xl border border-neutral-400 p-5"
          >
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-2xl font-semibold">{i.name}</h1>
              <p className="text-neutral-700">{i.para}</p>
            </div>
            <div className="mt-5 w-full rounded-xl">
              <Image
                src={i.image}
                alt={i.name}
                width={100}
                height={80}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowitWorks;
