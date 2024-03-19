import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
// import { MotionPathHelper } from "gsap/MotionPathHelper";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/all";
import React from "react";
// import "./index.css";

const Skill3D = () => {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     ScrollTrigger: {
  //       trigger: "#skill-1",
  //     },
  //   });
  //   tl.fromTo(
  //     "#skill-1",
  //     {
  //       translateX: -500,
  //       // translateY: 0,
  //       translateZ: -1000,
  //       rotateY: 180,
  //       rotateX: -60,
  //       // transform:"preserve-3d
  //     },
  //     {
  //       translateX: 850,
  //       // translateY: -160,
  //       translateZ: -500,
  //       rotateY: 60,
  //       rotateX: -10,
  //       duration: 2,
  //       ease: "none",
  //       // repe
  //     }
  //   );
  //   tl.fromTo(
  //     "#skill-1",
  //     { translateY: 0 },
  //     { translateY: -200, ease: "power1.in", duration: 2 },
  //     0
  //   );
  //   tl.fromTo(
  //     "#skill-1",
  //     {
  //       translateX: 850,
  //       // translateY: -160,
  //       translateZ: -500,
  //       rotateY: 60,
  //       rotateX: -10,
  //       duration: 2,
  //       // ease: "none",
  //     },
  //     {
  //       translateX: 0,
  //       // translateY: -235
  //       translateZ: 80,
  //       rotateY: 0,
  //       rotateX: 0,
  //       duration: 2,
  //       ease: "none",
  //       // repeat:In
  //     }
  //   );
  //   tl.fromTo(
  //     "#skill-1",
  //     { translateY: -200 },
  //     { translateY: -235, ease: "power3.in", duration: 2 },
  //     2
  //   );
  //   tl.fromTo(
  //     "#skill-1",
  //     {
  //       translateX: 0,
  //       // translateY: -235
  //       translateZ: 80,
  //       rotateY: 0,
  //       rotateX: 0,
  //       duration: 2,
  //       ease: "none",
  //       // ease: "none",
  //     },
  //     {
  //       translateX: -850,
  //       // translateY: -235
  //       translateZ: -500,
  //       rotateY: -90,
  //       rotateX: 0,
  //       duration: 2,
  //       ease: "none",
  //       // rep
  //     }
  //   );
  //   tl.fromTo(
  //     "#skill-1",
  //     { translateY: -200 },
  //     { translateY: -235 - 250, ease: "power3.in", duration: 2 },
  //     4
  //   );
  // });

  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger)

    // gsap.from("#Skill3D", { scrollTrigger: { trigger: "#Skill3D", start:"top top", end:"bottom start", markers:false, pin:true } });

    gsap.fromTo(
      "#SkillImg",
      {
        scrollTrigger: {
          trigger: "#Skill3D",
          start: "top top",
          end: "bottom top",
          markers: true,
          pin:true
          // toggleActions: "play reverse reverse reverse",
          // scrub: 1,
        },
        y: 0,
      },
      {
        // scrollTrigger: {
        //   trigger: "#Home",
        //   start: "top top",
        //   end: "bottom top",
        //   markers: true,
        //   // toggleActions: "play reverse reverse reverse",
        //   // scrub: 1,
        // },
        y: 500,
        duration: 2,
      }
    );
  })

  return (
    <div
    id="Skill3D"
      style={{ perspective: "" }}
      className="w-full h-[100vh] flex flex-col justify-center items-center relative"
    >
      <h1 className="text-[10rem]">SKILLS</h1>
      <div id="SkillImg" className="absolute flex justify-center w-[50vw] z-10"><img className="w-full" src="./images/half.png" alt="" /></div>
      {/* <motion.div
        className="absolute bottom-0"
        style={{ perspective: 1000, perspectiveOrigin: 1 }}
      >
        <motion.img
          // initial={{}}
          // animate={{
          //   translateX: 0,
          //   translateY: 0,
          //   translateZ: 0,
          //   rotateY: 0,
          //   rotateX: 0,
          // }}
          // transition={{ ease: "linear" }}
          id="skill-1"
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div> */}
      {/* 
      <motion.div className="absolute " style={{ perspective: 1000 }}>
        <motion.img
          initial={{}}
          animate={{
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateY: 0,
            rotateX: 0,
          }}
          transition={{ ease: "linear" }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div>
      <motion.div className="absolute " style={{ perspective: 1000 }}>
        <motion.img
          initial={{}}
          animate={{
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateY: 0,
            rotateX: 0,
          }}
          transition={{ ease: "linear" }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div>
      <motion.div className="absolute" style={{ perspective: 1000 }}>
        <motion.img
          initial={{}}
          animate={{
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateY: 0,
            rotateX: 0,
          }}
          transition={{ ease: "linear" }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div>
      <motion.div className="absolute" style={{ perspective: 1000 }}>
        <motion.img
          initial={{}}
          animate={{
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateY: 0,
            rotateX: 0,
          }}
          transition={{ ease: "linear" }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div>
      <motion.div className="absolute" style={{ perspective: 1000 }}>
        <motion.img
          initial={{}}
          animate={{
            translateX: -250 + 250,
            translateY: -200,
            translateZ: 0,
            rotateY: 0,
            rotateX: 0,
          }}
          transition={{ ease: "linear" }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div>
      <motion.div className="absolute " style={{ perspective: 1000 }}>
        <motion.img
          initial={{}}
          animate={{
            translateX: -250 + 125,
            translateY: -160,
            translateZ: -100,
            rotateY: 135,
            rotateX: 10,
          }}
          transition={{ ease: "linear" }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div>
      <motion.div className="absolute" style={{ perspective: 1000 }}>
        <motion.img
          initial={{}}
          animate={{
            translateX: -250,
            translateY: -80,
            translateZ: -60,
            rotateY: -90,
            rotateX: 0,
          }}
          transition={{ ease: "linear" }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div>
      <motion.div className="absolute" style={{ perspective: 1000 }}>
        <motion.img
          initial={{
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateY: 0,
            rotateX: 0,
          }}
          animate={{
            translateX: -125,
            translateY: -20,
            translateZ: -20,
            rotateY: -45,
            rotateX: 0,
          }}
          transition={{ ease: "linear", duration: 2 }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div>
      <motion.div className="absolute" style={{ perspective: 1000 }}>
        <motion.img
          initial={{}}
          animate={{
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateY: 0,
            rotateX: -30,
          }}
          transition={{ ease: "linear" }}
          className="w-[10vw]"
          src="./images/quote.jpg"
          alt=""
        />
      </motion.div> */}
    </div>
  );
};

export default Skill3D;
