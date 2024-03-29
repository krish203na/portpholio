import { motion } from "framer-motion";

const FollowerPointer = ({
  x,
  y,
  videoSrc,
}: {
  x: any;
  y: any;
  videoSrc: string;
}) => {

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
