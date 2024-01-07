import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
function ToolsNSkills() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-dvw h-dvh snap-center">
        <h1 className="text-3xl font-bold">Tools & Skills</h1>
        <div className="grid grid-cols-4 gap-4 p-4 m-4 rounded-sm shadow bg-zinc-900 w-fit h-fit xl:gap-8 xl:p-8">
          {list.map((item) => (
            <>
              <TooltipProvider key={item.title}>
                <Tooltip>
                  <TooltipTrigger>
                    <a href={item.link} target="_blank">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative w-16 h-16 rounded xl:w-24 xl:h-24"
                      >
                        <Image fill src={item.icon} alt={item.title} />
                      </motion.div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{item.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToolsNSkills;

const list = [
  {
    title: "typescript",
    icon: "/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  { title: "next.js", icon: "/next-js.svg", link: "https://nextjs.org/" },
  { title: "React", icon: "/react.svg", link: "https://react.dev/" },
  {
    title: "zustand",
    icon: "/zustand.png",
    link: "https://github.com/pmndrs/zustand",
  },
  {
    title: "tailwind css",
    icon: "/tailwind-css.svg",
    link: "https://tailwindcss.com/",
  },
  {
    title: "firebase",
    icon: "/firebase.svg",
    link: "https://firebase.google.com",
  },
  { title: "MongoDB", icon: "/mongodb.svg", link: "https://www.mongodb.com/" },
  {
    title: "framer motion",
    icon: "/framer-motion.svg",
    link: "https://www.framer.com/motion/",
  },
  { title: "shadcn/ui", icon: "/shadcn.png", link: "https://ui.shadcn.com" },
  { title: "node.js", icon: "/node-js.svg", link: "https://nodejs.org/en/" },
  { title: "linux", icon: "/linux.svg", link: "https://manjaro.org/" },
  {
    title: "git",
    icon: "/git.svg",
    link: "https://git-scm.com/",
  },
];
