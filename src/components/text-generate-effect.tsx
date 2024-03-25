"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger)

    gsap.to("#project2", {
      scrollTrigger: {
        trigger: "#project2",
        start: "top 80%",
        end: "bottom 80%",
        markers: true,
        toggleActions: "play none reverse none",
      },
      display: "block",
    });
  })
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          id="project2"
          className=" dark:text-white hidden text-black text-2xl leading-snug tracking-wide"
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
