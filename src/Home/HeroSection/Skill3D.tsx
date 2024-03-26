// import { useGSAP } from "@gsap/react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// // import { MotionPathHelper } from "gsap/MotionPathHelper";
// import MotionPathPlugin from "gsap/MotionPathPlugin";
// import { ScrollTrigger } from "gsap/all";
// import React from "react";
// // import "./index.css";

// const Skill3D = () => {
//   // useGSAP(() => {
//   //   gsap.registerPlugin(ScrollTrigger);

//   //   const tl = gsap.timeline({
//   //     ScrollTrigger: {
//   //       trigger: "#skill-1",
//   //     },
//   //   });
//   //   tl.fromTo(
//   //     "#skill-1",
//   //     {
//   //       translateX: -500,
//   //       // translateY: 0,
//   //       translateZ: -1000,
//   //       rotateY: 180,
//   //       rotateX: -60,
//   //       // transform:"preserve-3d
//   //     },
//   //     {
//   //       translateX: 850,
//   //       // translateY: -160,
//   //       translateZ: -500,
//   //       rotateY: 60,
//   //       rotateX: -10,
//   //       duration: 2,
//   //       ease: "none",
//   //       // repe
//   //     }
//   //   );
//   //   tl.fromTo(
//   //     "#skill-1",
//   //     { translateY: 0 },
//   //     { translateY: -200, ease: "power1.in", duration: 2 },
//   //     0
//   //   );
//   //   tl.fromTo(
//   //     "#skill-1",
//   //     {
//   //       translateX: 850,
//   //       // translateY: -160,
//   //       translateZ: -500,
//   //       rotateY: 60,
//   //       rotateX: -10,
//   //       duration: 2,
//   //       // ease: "none",
//   //     },
//   //     {
//   //       translateX: 0,
//   //       // translateY: -235
//   //       translateZ: 80,
//   //       rotateY: 0,
//   //       rotateX: 0,
//   //       duration: 2,
//   //       ease: "none",
//   //       // repeat:In
//   //     }
//   //   );
//   //   tl.fromTo(
//   //     "#skill-1",
//   //     { translateY: -200 },
//   //     { translateY: -235, ease: "power3.in", duration: 2 },
//   //     2
//   //   );
//   //   tl.fromTo(
//   //     "#skill-1",
//   //     {
//   //       translateX: 0,
//   //       // translateY: -235
//   //       translateZ: 80,
//   //       rotateY: 0,
//   //       rotateX: 0,
//   //       duration: 2,
//   //       ease: "none",
//   //       // ease: "none",
//   //     },
//   //     {
//   //       translateX: -850,
//   //       // translateY: -235
//   //       translateZ: -500,
//   //       rotateY: -90,
//   //       rotateX: 0,
//   //       duration: 2,
//   //       ease: "none",
//   //       // rep
//   //     }
//   //   );
//   //   tl.fromTo(
//   //     "#skill-1",
//   //     { translateY: -200 },
//   //     { translateY: -235 - 250, ease: "power3.in", duration: 2 },
//   //     4
//   //   );
//   // });


//   return (
//     <div
//     id="Skill3D"
//       style={{ perspective: "" }}
//       className="w-full h-[100vh] flex flex-col justify-center items-center relative border"
//     >
//       <h1 className="text-[10rem]">SKILLS</h1>
//       <div id="SkillImg" className=" flex justify-center w-[50vw] z-10"><img className="w-full" src="./images/half.png" alt="" /></div>
//       {/* <motion.div
//         className="absolute bottom-0"
//         style={{ perspective: 1000, perspectiveOrigin: 1 }}
//       >
//         <motion.img
//           // initial={{}}
//           // animate={{
//           //   translateX: 0,
//           //   translateY: 0,
//           //   translateZ: 0,
//           //   rotateY: 0,
//           //   rotateX: 0,
//           // }}
//           // transition={{ ease: "linear" }}
//           id="skill-1"
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div> */}
//       {/* 
//       <motion.div className="absolute " style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{}}
//           animate={{
//             translateX: 0,
//             translateY: 0,
//             translateZ: 0,
//             rotateY: 0,
//             rotateX: 0,
//           }}
//           transition={{ ease: "linear" }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div>
//       <motion.div className="absolute " style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{}}
//           animate={{
//             translateX: 0,
//             translateY: 0,
//             translateZ: 0,
//             rotateY: 0,
//             rotateX: 0,
//           }}
//           transition={{ ease: "linear" }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div>
//       <motion.div className="absolute" style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{}}
//           animate={{
//             translateX: 0,
//             translateY: 0,
//             translateZ: 0,
//             rotateY: 0,
//             rotateX: 0,
//           }}
//           transition={{ ease: "linear" }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div>
//       <motion.div className="absolute" style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{}}
//           animate={{
//             translateX: 0,
//             translateY: 0,
//             translateZ: 0,
//             rotateY: 0,
//             rotateX: 0,
//           }}
//           transition={{ ease: "linear" }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div>
//       <motion.div className="absolute" style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{}}
//           animate={{
//             translateX: -250 + 250,
//             translateY: -200,
//             translateZ: 0,
//             rotateY: 0,
//             rotateX: 0,
//           }}
//           transition={{ ease: "linear" }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div>
//       <motion.div className="absolute " style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{}}
//           animate={{
//             translateX: -250 + 125,
//             translateY: -160,
//             translateZ: -100,
//             rotateY: 135,
//             rotateX: 10,
//           }}
//           transition={{ ease: "linear" }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div>
//       <motion.div className="absolute" style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{}}
//           animate={{
//             translateX: -250,
//             translateY: -80,
//             translateZ: -60,
//             rotateY: -90,
//             rotateX: 0,
//           }}
//           transition={{ ease: "linear" }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div>
//       <motion.div className="absolute" style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{
//             translateX: 0,
//             translateY: 0,
//             translateZ: 0,
//             rotateY: 0,
//             rotateX: 0,
//           }}
//           animate={{
//             translateX: -125,
//             translateY: -20,
//             translateZ: -20,
//             rotateY: -45,
//             rotateX: 0,
//           }}
//           transition={{ ease: "linear", duration: 2 }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div>
//       <motion.div className="absolute" style={{ perspective: 1000 }}>
//         <motion.img
//           initial={{}}
//           fvffrfrfrfr
//           animate={{
//             translateX: 0,
//             translateY: 0,
//             translateZ: 0,
//             rotateY: 0,
//             rotateX: -30,
//           }}
//           transition={{ ease: "linear" }}
//           className="w-[10vw]"
//           src="./images/quote.jpg"
//           alt=""
//         />
//       </motion.div> */}
//     </div>
//   );
// };

// export default Skill3D;



import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef, } from 'react'

const Skill3D = () => {
  
  let bubblesArray:string[]= []

  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".skill3D", { scrollTrigger: { trigger: ".skill3D",start:"top top", end:"90% top", markers:false, pin:true} });

    gsap.from(
      "#SkillWord",
      {
        scrollTrigger: {
          trigger: "#SkillWord",
          start: "top 80%",
          end: "550% 80%",
          markers: false,
          toggleActions:"play none reverse none",
          scrub:.5
        },
        marginTop:0,
        y: -250,
      }
    );

console.log(bubblesArray)



    // gsap.to(".bubble1", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: "100vh",
    //   duration: 3,
    //   ease:"bounce",
    //   // position:"relative"
    // });
    // gsap.to(".bubble2", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble3", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative
    // });
    // gsap.to(".bubble4", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble5", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble6", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble7", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble8", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble9", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble10", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble11", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble12", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble13", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble14", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble15", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble16", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble17", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble18", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble19", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative"
    // });
    // gsap.to(".bubble20", {
    //   scrollTrigger: {
    //     trigger: ".skill3D",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none reverse none ",
    //     // markers: true,
    //     // scrub: 1,
      
    //   },
    //   bottom: 650,
    //   duration: 3,
    //   ease:"bounce",
    //   delay:(Math.random()* 3)
    //   // position:"relative
    // });
  })

  const SkillArray1: { name: string; img: string }[] = [
    { name: "Java", img: "./images/java.png" },
    { name: "HTML", img: "./images/html.png" },
    { name: "CSS", img: "./images/css.png" },
    { name: "JavaScript", img: "./images/javascript.png" },
    { name: "TypeScript", img: "./images/typescript.png" },
    { name: "Hibernate", img: "./images/hibernate.png" },
    { name: "Spring", img: "./images/spring.png" },
  ];
  const SkillArray2 : { name: string; img: string }[] = [
    { name: "Node JS", img: "./images/nodejs.png" },
    { name: "React", img: "./images/react.png" },
    { name: "Tailwind", img: "./images/tailwind.png" },
    { name: "Bootstrap", img: "./images/bootstrap.png" },
    { name: "GSAP", img: "./images/gsap.png" },
    { name: "Three Js", img: "./images/threejs.png" },
    
  ];
  const SkillArray3 : { name: string; img: string }[] = [
    { name: "Framer Motion", img: "./images/framermotion.png" },
    { name: "Spline", img: "./images/spline.png" },
    { name: "MySql", img: "./images/mysql.png" },
    { name: "Git", img: "./images/git.png" },
    { name: "GitHub", img: "./images/github.png" },
    
  ];



  const referense = useRef(null)
  return (
    <motion.div className="skill3D w-full h-screen flex justify-center items-center flex-col relative">
      <div
        id="SkillWord"
        className="translate-y-[30vh] flex justify-center items-center overflow-hidden flex-col"
      >
        <motion.h1 initial={{x:"90%",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="text-9xl font-bold">Skills</motion.h1>
        <p>I acquired</p>
      </div>
      <motion.div
        ref={referense}
        className="bubblebox flex gap-[2vw] flex-wrap absolute justify-start items-start h-screen w-[95%] bottom-[-100vh]"
      >
        <div className="flex w-full justify-center items-start h-[50%] flex-col">
          <div className="flex w-full justify-center items-start ">
            {bubbleSkill(SkillArray1, referense, 1, bubblesArray)}
          </div>
          <div className="flex w-full justify-center items-start ">
            {bubbleSkill(SkillArray2, referense, 2, bubblesArray)}
          </div>
          <div className="flex w-full justify-center items-start ">
            {bubbleSkill(SkillArray3, referense, 3, bubblesArray)}
          </div>
          {/* <motion.div
            drag
            dragPropagation={true}
            dragConstraints={referense
            // dragSnapToOrigin={true}
            className=" bubble bubble1 h-[8vw]w-[8vw] relative flex justify-center flex-col items-center bottom-0"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className="w-[60%] -z-10" src="./images/css.png" alt="" />
            <p>CSS</p>
          </motion.div>
          <motion.div
            onMouseEnter={()=>{x:100}}
            drag
            // dragSnapToOrigin={true}
            dragConstraints={referense}
            dragPropagation={true}
            dragElastic={1}
            dragMomentum={true}
            // typeof='bounce'
            // dragSnapToOrigin={true}
            // drag
            className=" bubble bubble2 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <motion.img
            drag
              className="w-[80%] rounded-full"
              src="./images/framermotion.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble3 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble4 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble5 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble6 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble7 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble8 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble9 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble10 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble11 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble12 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble13 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble14 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble15 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div>
          <motion.div className=" bubble bubble16 h-[10vw] w-[10vw] relative flex justify-center items-center bottom-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img
              className="w-[80%] rounded-full"
              src="./images/Krishna.png"
              alt=""
            />
          </motion.div> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skill3D


const bubbleSkill = (
  props: { name: string; img: string }[],
  referense: React.MutableRefObject<null>,
  t:number,
  bubblesArray:string[]
) => {

  // setCount((count)=>count +1)
  return props.map((e, i) => {

    bubblesArray.push(`bubble${i + "" + t}`);
    
    useGSAP(() => {
      gsap.to(`.bubble${i + "" + t}`, {
        scrollTrigger: {
          trigger: ".skill3D",
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none reverse none",
          // markers: true,
          // scrub: 1
        },
        bottom: "90vh",
        duration: 3,
        ease: "bounce.out",
        delay: Math.random() * 2,

        // position:"relative"
      });

// bubblesArray.map((e, i) => {
//    bubbleX = document.getElementsByClassName(e)[0].getBoundingClientRect().x;
//    bubbleY = document.getElementsByClassName(e)[0].getBoundingClientRect().y;

//   // console.log("X: " + bubbleX + " y: " + bubbleY);
// });

// const updateBubbleCoordinates = ()=>{

// }

    });

    
    return (
      <>
        <motion.div
          key={`bubble${i + "" + t}`}
          drag
          whileHover={{
            cursor: "grab",
            scale: 1.3,
            // width: 200,
            transformStyle: "preserve-3d",
          }}
          whileDrag={{ scale: 1.5, cursor: "grabbing"}}
          dragConstraints={referense}
          
          className={`bubble z-[50] inline-block bubble${i + "" + t} mx-[1.5vw] h-[8vw] w-[8vw] relative flex justify-center flex-col items-center bottom-0`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img
            className="w-[60%] -z-10"
            src={e.img}
            alt="image is loading...."
          />
          <p className="text-[0.8vw] ">{e.name}</p>
        </motion.div>
        {/* {count == 3? <br></br>: <h1>ok</h1>} */}
      </>
    );
  });
  


    // for(let i:number = 6; i>=4; i--)
    //     {
    //         for(let k:number = 1 ; k <= i ; k++ )
    //         {
                
                
    //         }
    //         document.getElementById("#getit").innerHTML(<br/>)
    //     }
  
};