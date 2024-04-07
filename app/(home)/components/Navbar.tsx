import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";

export default function Navbar() {
  const mySocials = [
    {
      link: "https://www.linkedin.com/in/annlyn-anto/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/annlyn4yeo",
      label: "GitHub",
      icon: SiGithub,
    },
  ];

  return (
    <nav className="py-10 flex justify-between item-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Annlyn 🧑🏽‍💻</h1>
      <div className="flex items-center gap-5">
        {mySocials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
