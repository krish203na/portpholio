// import React from 'react'

import {  motion } from "framer-motion";
// import { CardBody, CardContainer } from "../components/3d-card";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { NavLink } from "react-router-dom";
// import React, { Suspense, useEffect, useState } from "react";
// import FollowerPointer from "../Home/HeroSection/homeproject/FollowerPointer";
// import { FollowMe } from "./ProjectCard";
// const ProjectCard = React.lazy(() => import("./ProjectCard"));
import ProjectCard from "./ProjectCard";

const Projects = () => {
  // ================================================================================================
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
  // ================================================================================================

  useGSAP(() => {
    let mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".horizontalContainer");
    mm.add("(min-width: 1000px)", () => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1.5),
        ease: "linear",
        scrollTrigger: {
          trigger: ".horScroll",
          pin: true,
          scrub: 2,
          start:"top top",
          // markers:true,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=4000",
        },
      });
    });
  });

  return (
    <>
      <div
        // onMouseLeave={handleMouseLeave}
        // onMouseEnter={handleMouseEnter}
        // onMouseMove={handleMouseMove}
        // ref={ref}
        className="horScroll w-full flex lg:gap-[0] gap-[5vh] flex-col justify-evenly h-full min-h-[100vh] bg-gradient-to-b from-[#2a3637] from-15% via-[#2f4749] via-50% to-[#2a3637] to-90% overflow-hidden"
      >
        {/* {isInside && <FollowMe x={x} y={y} />} */}
        <h1 className="lg:text-9xl text-7xl lg:mt-[0] mt-[6vh] text-center lg:text-left font-bold px-[5%]">
          PROJECT
        </h1>
        {/* <div className="overflow-auto  "> */}
        <motion.div
          initial={{ x: "60vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className=" lg:w-[1000%] lg:pl-[25vw] flex lg:flex-row flex-col lg:items-start items-center box-content overscroll-none lg:gap-0 gap-[6vh] lg:pb-[0] pb-[5vh]"
        >
          {[
            {
              projectName: "FASHI. the fasion",
              projectVideo: "./video/Fashi.mp4",
              projectsImage: "",
              projectTech: "Java Full stack",
              projectLink: "fashi",
            },
            {
              projectName: "WEATHERIF!",
              projectVideo: "./video/Weatherify.mp4",
              projectsImage: "",
              projectTech: "React Full stack",
              projectLink: "weathrifi",
            },
            {
              projectName: "Portfolio my new ",
              projectVideo: "./video/PortfolioHomepage.mp4",
              projectsImage: "",
              projectTech: "React Technology",
              projectLink: "portfolio",
            },
            {
              projectName: "Wix Studio clone",
              projectVideo: "",
              projectsImage: "./images/wixStudio.png",
              projectTech: "React",
              projectLink: "wix",
            },
            {
              projectName: "Fintech",
              projectVideo: "",
              projectsImage: "./images/fintech.png",
              projectTech: "React",
              projectLink: "fintech",
            },
          ].map((e, i) => {
            return (
              // <Suspense>
                <ProjectCard
                  projectName={e.projectName}
                  projectVideo={e.projectVideo}
                  projectsImage={e.projectsImage}
                  projectTech={e.projectTech}
                  projectLink={e.projectLink}
                  key={`project${i}`}
                />
              // </Suspense>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
