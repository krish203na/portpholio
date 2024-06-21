// import { useGSAP } from '@gsap/react';
// import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
// import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const ProjectCard = (props: {
  projectName: string;
  projectVideo: string;
  projectsImage: string;
  projectTech: string;
  projectLink: string;
}) => {
  let projectCode = props.projectLink;
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const ref = React.useRef<HTMLDivElement>(null);
  // const [rect, setRect] = useState<DOMRect | null>(null);
  // const [isInside, setIsInside] = useState<boolean>(false);

  // useEffect(() => {
  //   if (ref.current) {
  //     setRect(ref.current.getBoundingClientRect());
  //   }
  // }, []);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (rect) {
  //     const scrollX = window.scrollX;
  //     const scrollY = window.scrollY;
  //     x.set(e.clientX - rect.left + scrollX);
  //     y.set(e.clientY - rect.top + scrollY);
  //   }
  // };
  // const handleMouseLeave = () => {
  //   setIsInside(false);
  // };

  // const handleMouseEnter = () => {
  //   setIsInside(true);
  // };
  return (
    <NavLink to={`/portpholio/project/${projectCode}`}>
      <div className="horizontalContainer border-gray-600 hover:border duration-700 flex flex-col lg:w-[42vw] w-[90vw] lg:px-[2vw] lg:pt-[2vw] lg:pb-[1vw] p-[4vw] rounded-xl items-center lg:border-0 border">
        {props.projectVideo.length !== 0 ? (
          <div
            // onMouseLeave={handleMouseLeave}
            // onMouseEnter={handleMouseEnter}
            // onMouseMove={handleMouseMove}
            // ref={ref}
            className=""
          >
            <video
              className="w-[100%] rounded-xl hover:scale-105 duration-700"
              src={props.projectVideo}
              autoPlay
              muted
              loop
            ></video>
          </div>
        ) : (
          <div
          // onMouseLeave={handleMouseLeave}
          // onMouseEnter={handleMouseEnter}
          // onMouseMove={handleMouseMove}
          // ref={ref}
          >
            <img
              src={props.projectsImage}
              alt="loading..."
              className="w-[100%] rounded-xl"
            />
          </div>
        )}
        <h1 className="text-3xl mt-[3vh]">{props.projectName}</h1>
        <p className="mt-[1.5vh]">{props.projectTech}</p>
        {/* {isInside && <FollowMe x={x} y={y} />} */}
      </div>
    </NavLink>
  );
};

export default ProjectCard


// export const FollowMe = ({x, y}:{x:any, y:any}) => {

//     // useGSAP(() => {
//     //   gsap.registerPlugin(ScrollTrigger);

//     //   let sections = gsap.utils.toArray(".horizontalContainer");

//     //   gsap.to(sections, {
//     //     xPercent: -100 * (sections.length - 1.5),
//     //     // ease: "easeInOut",
//     //     scrollTrigger: {
//     //       trigger: ".followHorScroll",
//     //       pin: true,
//     //       scrub: 2,
//     //       // start:"top top",
//     //       // markers:true,
//     //       snap: 1 / (sections.length - 1),
//     //       // base vertical scrolling on how wide the container is so it feels more natural.
//     //       end: "+=5000",
//     //     },
//     //   });
//     // });

//     console.log(x,y)
//   return (
//     <AnimatePresence>
//       <motion.div
//         style={{
//           top: y,
//           left: x,
//           pointerEvents: "none",
//         }}
//         initial={{
//           scale: 0,
//           opacity: 0,
//         }}
//         animate={{
//           scale: 1,
//           opacity: 1,
//         }}
//         exit={{
//           scale: 0,
//           opacity: 0,
//         }}
//         transition={{
//           duration: 0.5,
//           ease: "easeInOut",
//           type: "spring",
//           damping: 5,
//         }}
//         className="absolute z-[100] flex items-center justify-center w-[6vw] h-[3vw] rounded-full bg-white text-black"
//       >
//         <h1>click me </h1>
//       </motion.div>
//     </AnimatePresence>
//   );
// };