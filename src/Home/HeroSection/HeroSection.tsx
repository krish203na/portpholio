import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, useRef } from "react";
import Marquee from "react-fast-marquee";
const HeroModel = React.lazy(() => import("../../components/models/HeroModel"));

const HeroSection = () => {
  const scroll: any = useRef();


  //   gsap.to("#Home", {
  //     scrollTrigger: {
  //       trigger: "#HomeHero",
  //       start: "start start",
  //       end: "100% start",
  //       markers: true,
  //       pin: true,
  //       // pinS: true,
  //     },
  //   });
  // });
  return (
    <>
      <div
        id="HomeHero"
        className="h-[100vh] w-full top-0 right-0 flex justify-center items-center bg-transparent z-40 transition-all overflow-hidden"
      >
        <Suspense fallback={`this is Loading.....`}>
          <AnimatePresence>
            <motion.div
              className="md:w-full sm:w-[130vw] w-[200vw] absolute z-50"
            >
              <HeroModel />

            </motion.div>

          </AnimatePresence>
        </Suspense>
        
        <div
          ref={scroll}
          className="w-[100%] absolute sm:bottom-[0px] bottom-[-10vh] fontScroll"
        >
          <Marquee className="p-0 m-0 static" autoFill={true} speed={180}>
            <div className="text-[30vh] font-bold text-[#1d2d2ecb] ">
              <h1 className="p-[-10px] m-0 myFont w-full">
                Krishna Ashok Panchal{" "}
                <span className="text-transparent">.</span>
              </h1>
            </div>
          </Marquee>
        </div>
        <div className="z-20 border-3 md:top-[16vh] top-[15vh] md:left-[15vw] left-[5vw]  border-[10px] border-black absolute md:h-[30vh] sm:h-[30vw] h-[12vh] shadow-lg shadow-black w-auto flex items-center text-8xl">
          <img
            className="w-full h-full border border-black shadow-[inset_10px_10px_350px_15px_rgba(0,0,0,0.4)]"
            src="./images/quote.jpg"
            alt=""
          />
        </div>
        <div className="z-[0] md:top-[18vh] top-[18vh] text md:right-[20vw] right-[20vw] absolute h-[10vw] w-[10vw] flex items-center text-3 font-thin">
          <h1 className="textshadow font-semibold text-[6vw] md:text-[4vw] leading-none text-center text-pink-300">
            <span>Full Stack </span>
            Developer
          </h1>
          <h1 className="textshadow2 absolute font-thin text-center text-[6vw] md:text-[4vw] leading-none text-pink-100">
            <span>Full Stack </span>
            Developer
          </h1>
        </div>
        <div className="z-40  right-0 bottom-[15vh] absolute flex items-center animate-pulse text-lg rotate-90 font-thin">
          <h1>Scroll Down Slowly -{">"}</h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
