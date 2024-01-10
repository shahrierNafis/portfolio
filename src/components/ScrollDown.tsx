import { AnimatePresence, motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import React, { useEffect } from "react";

function ScrollDown() {
  const [show, setShow] = React.useState<boolean>(true);
  useEffect(() => {
    const interval = setInterval(() => {
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight;
      if (isAtBottom) {
        return setShow(false);
      }
      setShow((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className="w-8 h-8 fixed bottom-4 left-1/2  ml-[-1rem] text-white"
      onClick={() => scrollBy({ top: innerHeight, behavior: "smooth" })}
    >
      <AnimatePresence mode="wait" initial={false}>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 1.5 }}
          >
            <ChevronsDown className="w-8 h-8" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ScrollDown;
