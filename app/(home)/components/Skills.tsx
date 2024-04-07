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
      title: "Javascript",
      Icon: SiJavascript,
    },
    {
      title: "React",
      Icon: SiReact,
    },
    {
      title: "Typescript",
      Icon: SiTypescript,
    },
    {
      title: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      title: "HTML5",
      Icon: SiHtml5,
    },
    {
      title: "CSS/Less/Scss",
      Icon: SiLess,
    },
    {
      title: "TailWind/Bootstrap",
      Icon: SiTailwindcss,
    },
    {
      title: "Git",
      Icon: SiGit,
    },
    {
      title: "AEM",
      Icon: SiAdobe,
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
