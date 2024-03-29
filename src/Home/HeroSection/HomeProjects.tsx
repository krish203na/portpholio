import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, } from "framer-motion";
import ProjectTile from "./homeproject/ProjectTile";

const HomeProjects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#projectDiv", {
      scrollTrigger: {
        trigger: "#projectDiv",
        start: "30% top",
        end: "200% top",
        pin: true,
        pinSpacing: false,
      },
    });

  });

  const projects: { projectName: string; projectVideo: string }[] = [
    { projectName: "FASHI. the fasion", projectVideo: "./video/Fashi.mp4" },
    { projectName: "WEATHERIF!", projectVideo: "./video/Weatherify.mp4" },
    { projectName: "Portfolio", projectVideo: "./video/PortfolioHomepage.mp4" },
    { projectName: "Wix Studio clone", projectVideo: "./video/Wetherify.mp4" },
    { projectName: "Fintech", projectVideo: "./video/Wetherify.mp4" }
  ];


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
              className="m-auto flex sm:text-9xl text-8xl font-bold w-[60%] z-20"
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
      </div>
    </>
  );
};

export default HomeProjects;
