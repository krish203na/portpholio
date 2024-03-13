// import { Block } from "@react-three/fiber/dist/declarations/src/core/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, useRef } from "react";
// import HeroModel from '../components/models/HeroModel'
const HeroModel = React.lazy(() => import("../components/models/HeroModel"));
import Marquee from "react-fast-marquee";
// import AnimateFont from "../components/AnimateFont";
// import TryWordAnimate from "../components/TryWordAnimate";
// import HoverSocial from "./HeroSection/HoverSocial";

const Home = () => {
  const scroll:any = useRef();
  return (
    <>
      <div
        className="bg-transparent z-10
     h-[100vh] overflow-hidden w-[100vw]
      relative"
      >
        <motion.div>
          <motion.div
            initial={{ display: "block" }}
            animate={{ display: "none" }}
            transition={{ duration: 0.2, delay: 15 }}
          >
            {/* <AnimateFont/> */}
            <h1>Hii I am Krishna</h1>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 15 }}
          className="relative md:h-[100vh] h-[70vh] w-full top-0 right-0 flex justify-center items-center bg-transparent z-40 transition-all"
        >
          <motion.div
            className="relative md:h-[100vh] h-[70vh] w-full top-0 right-0 flex justify-center items-center bg-transparent z-40 transition-all"
          >
            <Suspense fallback={`this is Loading.....`}>
              <AnimatePresence>
                <motion.div className="w-full h-full absolute md:top-0 top-[3vh] right-0">
                  <HeroModel />
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </motion.div>
          <div className="absolute top-[3vh] left-[3vw]">
            <h1 className="logo text-[2rem] tracking-wider">KRISH</h1>
          </div>
          <div
            ref={scroll}
            className="w-full absolute bottom-[-30px] fontScroll "
          >
            <Marquee className="p-0" autoFill={true} speed={180}>
              <div className="text-[30vh] font-bold text-[#1d2d2ecb] ">
                <h1 className="p-[-10px] m-0 myFont">
                  Krishna Ashok Panchal{" "}
                  <span className="text-transparent">.</span>
                </h1>
              </div>
            </Marquee>
          </div>
          <div className="z-20 border-3 md:top-[5vh] top-[10vh] md:left-[15vw] left-[5vw] border-[10px] border-black absolute md:h-[30vh] h-[12vh] shadow-lg shadow-black md:w-[12vw] w-[23vw] flex items-center text-8xl">
            {/* <AnimateFont/> */}
            {/* <TryWordAnimate Word={"Full Stack Developer"} /> */}
            <img
              className="w-full h-full border border-black shadow-[inset_10px_10px_350px_15px_rgba(0,0,0,0.4)]"
              src="./images/quote.jpg"
              alt=""
            />
          </div>
          <div className="z-[0] md:top-[20vh] top-[15vh] text md:right-[20vw] right-[20vw] absolute h-[10vw] w-[10vw] flex items-center text-3 font-thin">
            {/* <HoverSocial /> */}
            <h1 className="textshadow font-semibold text-[6vw] md:text-[4vw] leading-none text-center text-pink-300">
              <span>Full Stack </span>
              Developer
            </h1>
            <h1 className="textshadow2 absolute font-thin text-center text-[6vw] md:text-[4vw] leading-none text-pink-100">
              <span>Full Stack </span>
              Developer
            </h1>
          </div>
          <div className="z-[100] rotate-90 right-2 bottom-2 absolute h-[10vw] w-[10vw] flex items-center text-3 font-thin">
            <h1>Scroll Down -{">"}</h1>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
