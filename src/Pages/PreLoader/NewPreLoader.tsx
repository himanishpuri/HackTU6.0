"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "./preloader";
import TwinklingBackground from "../../TwinklingBackground";

export default function NewPreLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[99999] flex items-center justify-center"
        >
          <TwinklingBackground>
            <PreLoader />
          </TwinklingBackground>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
