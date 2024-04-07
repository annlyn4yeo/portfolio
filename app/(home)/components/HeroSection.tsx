import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./ui/moving-border.tsx";
import Title from "./Title.tsx";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-24 lg:gap-0 lg:flex-row justify-between items-center min-h-[60vh]">
      <div className="space-y-10">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hello! 👋🏼 <br />
          <span className="underline underline-offset-8 decoration-green-500">I'm Annlyn</span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Base in Bengaluru, India, I&apos;m a passionate engineer trying to build kickass web
          applications that users love
        </p>
        <Link href={"mailto:annlynanto@gmail.com"} className="inline-block group">
          <Title text="Contact Me 📫" />
        </Link>
      </div>
      <section className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-600"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-600"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-600"></div>
            <div className="w-32 h-32 rounded-full bg-green-600"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>Available over a call 🚀</p>
          </MovingBorderBtn>
        </div>
      </section>
    </div>
  );
}
