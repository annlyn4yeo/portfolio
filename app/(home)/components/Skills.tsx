"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiLess,
  SiTailwindcss,
  SiAdobe,
  SiGit,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "Javascript",
      icon: SiJavascript,
    },
    {
      text: "React",
      icon: SiReact,
    },
    {
      text: "Typescript",
      icon: SiTypescript,
    },
    {
      text: "Next.js",
      icon: SiNextdotjs,
    },
    {
      text: "HTML5",
      icon: SiHtml5,
    },
    {
      text: "CSS/Less/Scss",
      icon: SiLess,
    },
    {
      text: "TailWind/Bootstrap",
      icon: SiTailwindcss,
    },
    {
      text: "Git",
      icon: SiGit,
    },
    {
      text: "AEM",
      icon: SiAdobe,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills ⚔️"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
