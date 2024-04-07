import React from "react";
import { SiReact, SiJavascript, SiGit, SiTailwindcss, SiHtml5, SiLess } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Almost Final",
      techStack: [SiReact, SiJavascript, SiGit],
      link: "https://annlyn4yeo.github.io/almostfinal/",
      cover: "./almostfinal.png",
      bgColor: "bg-black",
    },
    {
      title: "Project Manager",
      techStack: [SiReact, SiTailwindcss, SiGit],
      link: "https://annlyn4yeo.github.io/simpleappmanager/",
      cover: "./appmgr.png",
      bgColor: "bg-black",
    },
    {
      title: "Tick Tack Toe",
      techStack: [SiReact, SiJavascript, SiGit],
      link: "https://annlyn4yeo.github.io/ticktacktoe/",
      cover: "./ticktacktoe.png",
      bgColor: "bg-black",
    },
    {
      title: "Investment Calculator",
      techStack: [SiReact, SiJavascript, SiGit, SiLess],
      link: "https://annlyn4yeo.github.io/investment-calculator/",
      cover: "./investmentcalculator.png",
      bgColor: "bg-black",
    },
    {
      title: "Eshop Search",
      techStack: [SiJavascript, SiGit, SiHtml5, SiLess],
      link: "https://annlyn4yeo.github.io/eshop-search/",
      cover: "./eshop.png",
      bgColor: "bg-black",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🤖"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid sm:grid-cols-2 grid-cols-1 pt-20 gap-6">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p5 h-full rounded-md", project.bgColor)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer h-full"
                >
                  <div className="space-y-5">
                    <h2 className="text-2xl">{project.title}</h2>
                    <div className="flex items-center gap-5">
                      {project.techStack.map((Icon, index) => {
                        return <Icon className="w-6 h-6" key={index}></Icon>;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
