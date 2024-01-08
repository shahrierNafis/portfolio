import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-dvw h-dvh snap-center">
        <h1 className="text-3xl font-bold">Contact</h1>
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

export default Contact;

const list = [
  {
    title: "github",
    icon: "/github.svg",
    link: "https://github.com/shahrierNafis",
  },
  {
    title: "linkedin",
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/in/shahrier-nafis-b79764219/",
  },
  {
    title: "Gmail",
    icon: "/gmail.svg",
    link: "mailto:shahriernafisog@gmail.com",
  },
  {
    title: "discord",
    icon: "/discord.svg",
    link: "https://www.discordapp.com/users/959436713992794164",
  },
  {
    title: "facebook",
    icon: "/facebook.svg",
    link: "https://www.facebook.com/shahrier.nafis.0/",
  },
  {
    title: "instagram",
    icon: "/instagram.svg",
    link: "https://www.instagram.com/nafis.shahrier/",
  },
  {
    title: "reddit",
    icon: "/reddit.svg",
    link: "https://www.reddit.com/user/Practical_Tadpole_25",
  },
  {
    title: "x",
    icon: "/x.svg",
    link: "https://twitter.com/ShahrierNafis",
  },
];
