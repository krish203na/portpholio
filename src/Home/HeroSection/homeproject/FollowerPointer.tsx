import { motion } from "framer-motion";
import { useEffect } from "react";

const FollowerPointer = ({
  x,
  y,
  videoSrc,
}: {
  x: any;
  y: any;
  videoSrc: string;
}) => {
  useEffect(() => {
    console.log(y);
  });
  return (
    <>
      <motion.video
        style={{
          top: y,
          left: x,
          pointerEvents: "none",
        }}
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          ease:"easeInOut"
        }}
        className="w-[25vw] z-[100] h-auto bg-black rounded-lg overflow-hidden absolute"
        autoPlay
        muted
        loop
        src={videoSrc}
      ></motion.video>
    </>
  );
};

export default FollowerPointer;
