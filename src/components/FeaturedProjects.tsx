import { cn } from "@/lib/utils";
import React from "react";

function FeaturedProjects() {
  return (
    <>
      <div className="max-w-screen-xl p-4 mx-auto">
        <h1 className="m-4 text-3xl font-bold text-center snap-start">
          Featured Projects
        </h1>
        {list.map((projects) => (
          <div
            key={projects.title}
            className="flex flex-col items-center justify-center h-screen shadow border-y md:flex-row snap-start"
          >
            <div className="p-4 m-4 text-center md:w-[55%] flex flex-col items-center justify-center  md:h-full">
              <h1
                className={cn(
                  "font-bold",
                  "text-lg md:text-4xl",
                  projects.titleStyle
                )}
              >
                {projects.title}
              </h1>
              <p
                className={cn(
                  "font-mono",
                  "text-base md:text-2xl",
                  "text-opacity-50",
                  projects.descriptionStyle
                )}
              >
                {projects.description}
                <span className="text-sm">
                  {"<"}
                  <a
                    className="relative text-yellow-400"
                    target="_blank"
                    href={projects.source}
                  >
                    source
                  </a>
                  {"|"}
                  <a
                    className="relative text-yellow-400"
                    target="_blank"
                    href={projects.preview}
                  >
                    preview
                  </a>
                  {">"}
                </span>
              </p>
            </div>
            <div className="flex-shrink md:w-[45%] aspect-video mx-auto rounded ring-white ring pointer-events-none">
              <video autoPlay muted loop src={projects.video} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProjects;

const list = [
  {
    title: "where's vader",
    titleStyle: "text-yellow-400 font-StarJHol",
    description:
      "Based on Where's Waldo (or Where's Wally), this is a photo-tagging game in which you need to search for and tag 3 star wars characters. Players are timed and their score is kept and displayed on the leaderboard",
    descriptionStyle: "",
    source: "https://github.com/shahrierNafis/nextjs-wheres-vader",
    preview: "https://nextjs-wheres-vader.vercel.app/",
    video: "/wheres-vader.mp4",
  },
  {
    title: "Odin book",
    titleStyle: "bg-blue-400 text-white p-2 rounded",
    description:
      "This is a social media website, supposed to mimic Facebook, built with next.js, firebase and Zustand, with it, you can post, comment, add reactions and message with other users.",
    descriptionStyle: "",
    source: "https://github.com/shahrierNafis/social-app",
    preview: "https://social-app-eight-pearl.vercel.app/",
    video: "/odin-book.mp4",
  },
  {
    title: "Memory Game",
    titleStyle: "",
    descriptionStyle: "",
    description:
      "This is a game to test your memory. when you press the start button, a grid of 12 cards will appear, and you need to click all the cards, but the cards will rearrange each time you click them and if you pick the same card twice, you lose.",
    source: "https://github.com/shahrierNafis/memory-game",
    preview: "https://memory-game-five-ecru.vercel.app/",
    video: "/memory-game.mp4",
  },
];
