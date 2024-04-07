import React from "react";

export default function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold group-hover:text-green-400 transition-all">{text}</h2>
      <div className="w-40 h-2 bg-green-600 rounded-full"></div>
      <div className="w-40 h-2 bg-indigo-600 translate-x-2 rounded-full"></div>
    </div>
  );
}
