import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Name() {
  const [string, setString] = React.useState<string>("");
  const [color, setColor] = React.useState<string>("");
  useEffect(() => {
    function func() {
      setTimeout(() => {
        setString("ѕĤ𝔞𝐇𝓻𝔦ｅŕ ｎᗩғĮˢ");
        setColor("text-red-500");
      }, 0);
      setTimeout(() => {
        setString("[ꞩħⱥħɍīēɍ ꞥⱥӻīꞩ");
        setColor("text-blue-500");
      }, 200);
      setTimeout(() => {
        setString("Shahrier Nafis");
        setColor("text-white");
      }, 400);
      setTimeout(() => {
        setString("ӻᵾłł-ꞩⱦⱥȼҟ ⱳēƀ đēꝟ");
        setColor("text-gray-500");
      }, 4600);
      setTimeout(() => {
        setString("F̴u̴l̴l̴-̴s̴t̴a̴c̴k̴ ̴w̴e̴b̴ ̴d̴e̴v̴");
        setColor("text-green-500");
      }, 4800);
      setTimeout(() => {
        setString("Full Stack Web Dev");
        setColor("text-white");
      }, 5000);

      return func;
    }
    const interval = setInterval(func(), 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "w-screen h-dvh flex items-center justify-center text-3xl  sm:text-4xl text-center font-bold xl:text-6xl font-Terminus",
          "snap-start",
          color
        )}
      >
        <div className="h-fit overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            {string.split("").map((char, index) => {
              return (
                <motion.span
                  className="inline-block whitespace-pre font-Terminus"
                  initial={{ y: index % 2 ? 100 : -100 }}
                  animate={{ y: 0 }}
                  transition={{}}
                  key={index + char}
                >
                  {char}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default Name;
