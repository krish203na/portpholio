import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const param = useParams();
  const projects = [
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
  ];
  return (
    <>
      {projects.map((e, i) => {
        if (e.projectLink === param.projectCode) {
          return (
            <>
              <div>
                {e.projectVideo.length !== 0 ?
                
                <video src={e.projectVideo}></video>:
              <img src={e.projectsImage} alt="" />
              }
              
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default ProjectDetails;
