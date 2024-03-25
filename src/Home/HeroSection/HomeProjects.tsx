import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, } from "framer-motion";
// import { CardBody, CardContainer, CardItem } from "../../components/3d-card";
// import { TextGenerateEffect } from "../../components/text-generate-effect";
// import { NavLink } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import ProjectTile from "./homeproject/ProjectTile";

const HomeProjects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#projectDiv", {
      scrollTrigger: {
        trigger: "#projectDiv",
        start: "30% top",
        end: "300% top",
        pin: true,
        pinSpacing: false,
      },
    });

    // gsap.to("#projectDetail", { scrollTrigger: { trigger: "#projectDetail", start:"top 80%", end:"bottom 80%", markers:true, toggleActions:"play none reverse none" }, display:"block" });
  });

  const projects: { projectName: string; projectVideo: string }[] = [
    { projectName: "FASHI. the fasion", projectVideo: "./video/Fashi.mp4" },
    { projectName: "WEATHERIF!", projectVideo: "./video/Weatherify.mp4" },
    { projectName: "WEATHERIF!", projectVideo: "./video/Weatherify.mp4" },
    { projectName: "WEATHERIF!", projectVideo: "./video/Weatherify.mp4" },
    { projectName: "WEATHERIF!", projectVideo: "./video/Weatherify.mp4" },
    { projectName: "WEATHERIF!", projectVideo: "./video/Weatherify.mp4" },
    { projectName: "WEATHERIF!", projectVideo: "./video/Weatherify.mp4" },
  ];

  // const newer = () => {};

  return (
    <>
      <div className="relative">
        <div
          id="projectDiv"
          className="w-[80%] m-auto right-0 h-full flex flex-col justify-between py-[5vh] items-center z-20"
        >
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
              className="m-auto flex text-lg "
            >
              Utilized this Skills in
            </motion.div>
          </div>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
            className="z-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                lineHeight: "normal",
              }}
              className="m-auto flex text-9xl font-bold w-[60%] z-20"
            >
              Projects
            </motion.div>
          </div>
        </div>
      </div>
      <div className="top-0 w-full p-[3vw] z-10">
        <ul className="">
          {
            projects.map((e,i)=>{
              return <ProjectTile key={i.toString()} projectName={e.projectName} projectVideo={e.projectVideo}/>;
            })
          }
        </ul>
        {/* <div className=" w-full flex justify-around items-center">
            <motion.div
              id="projectVideo"
              initial={{ x: "-30vw", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className=""
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-transperent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transperent dark:border-transperent border-transperent w-auto sm:w-[30vw] h-auto rounded-xl p-6   ">
                  <CardItem translateZ="50" className="w-full ">
                    <video
                      src="./video/Weatherify.mp4"
                      autoPlay
                      muted
                      loop
                      height="1000px"
                      width="1000px"
                      className="h-[20] w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
            <div className=" w-[65%] h-full flex flex-col gap-[1.5vh]">
              <div className=" overflow-hidden">
                <motion.h1
                  initial={{ x: -600 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-4xl p-[1vw] font-semibold"
                >
                 Weatherify
                </motion.h1>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2.5, delay: .6, ease: "easeOut" }}
                className="border-2 border-orange-100 rounded-full"
              ></motion.div>
              <div id="projectDetail" className=" overflow-hidden">
                <motion.p
                  initial={{ x: -800, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: .8 }}
                  className="text-lg h-[100%] p-[1.5vw]"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  veniam, maxime consequuntur placeat libero atque! Amet numquam
                  porro corrupti autem molestias ad odit obcaecati molestiae ut
                  perferendis omnis minima quasi pariatur eos quidem soluta
                  fugit vel aliquid iure beatae, placeat laborum ab. Culpa a
                  laborum optio quidem doloremque sapiente voluptas.
                </motion.p>
              </div>
            </div>
          </div> */}
      </div>
    </>
  );
};

export default HomeProjects;
