import { useGSAP } from "@gsap/react";
import BackgroundGradientAnimation from "../components/Background-gradient-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ExamplePdf from "../../public/Resume.pdf";
import { motion } from "framer-motion";

const Footer = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#HomeConnectDiv", {
      scrollTrigger: {
        trigger: "#HomeConnectDiv",
        start: "top top",
        end: "bottom top",
        pin: true,
      },
    });
    gsap.to("#HomeConnectBackground", {
      scrollTrigger: {
        trigger: "#HomeConnectBackground",
        start: "50% top",
        end: "bottom top",
        scrub: true,
        toggleActions: "play none reverse none",
      },
      width: "98%",
      height: "95%",
    });

    gsap.to("#letConnectDiv", {
      scrollTrigger: {
        trigger: "#HomeConnectBackground",
        start: "top top",
        end: "80% top",
        scrub: 1,
        toggleActions: "play none reverse none",
      },
      scale: 1,
      rotate: 0,
      y: 0,
    });

    gsap.to("#callMailDiv", {
      scrollTrigger: {
        trigger: "#callMailDiv",
        start: "start 80%",
        end: "bottom 80%",
      },
      opacity: 1,
    });

  });

  return (
    <>
    <div
      id="HomeConnectDiv"
      className="w-100% h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-[#2a3637] from-20% to-[#202526] to-70%"
    >
      <div
        id="HomeConnectBackground"
        className="relative w-full h-screen -z-10"
      >
        <BackgroundGradientAnimation>
          <div className="absolute z-[1]  inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <div className="w-full h-full flex justify-center items-center">
              <div className="absolute sm:bottom-[1vh] bottom-[8vh] flex gap-2 justify-center items-center">
                <div className="bg-green-500 rounded-full w-3 h-3 animate-pulse"></div>
                <h1 className="sm:text-lg text-xl font-light">
                  Open for new Projects
                </h1>
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>
        <div
          id="SocialLinksDiv"
          className="absolute bottom-[1vw] px-[2vw] w-full gap-[2vw] text-xl flex m-auto justify-between items-center"
        >
          <div className="text-lg">© Krishna, 2024</div>
          <div className="flex gap-[2vw]">
            <a
              className="hover:underline"
              target="blank"
              href="https://www.instagram.com/krish_na203/"
            >
              Instagram
            </a>
            <a
              className="hover:underline"
              target="blank"
              href="https://www.linkedin.com/in/krishna-panchal-5426aa271"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div
          id="letConnectDiv"
          className="flex flex-col gap-[3vw] absolute w-full justify-center items-center sm:top-[40%] top-[25%] scale-[2] rotate-[35deg] translate-y-[100vh]"
        >
          <h1 className=" bg-white sm:px-[2vw] px-[6vw] min-w-[70px] hover:bg-transparent hover:border hover:text-white min-h-[70px] flex justify-center items-center rounded-full text-2xl text-black font-normal">
            Let's get Connected{" "}
            <motion.i className="fa-thin ml-[1vw] text-3xl font-light hover:font-bold fa-arrow-right" />
          </h1>

          <div
            id="callMailDiv"
            className="opacity-0 z-[20] top-[65%] mt-[3vh] w-full flex justify-center sm:flex-nowrap flex-wrap items-center sm:gap-[2vw] gap-[3vh]"
          >
            <a
              className="border hover:bg-white hover:text-black duration-500 gap-[1vw] flex sm:min-w-[70px] min-w-[70%] min-h-[70px] sm:px-[2vw] px-[4vw] justify-center text-2xl rounded-full items-center"
              href="tel:+917038256913"
            >
              <i className="fa-duotone fa-phone"></i>
              7038256913
            </a>
            <a
              href={ExamplePdf}
              download="Krishna_CV"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border hover:bg-white gap-[1vw] hover:text-black duration-500 flex sm:min-w-[70px] min-h-[70px] sm:px-[2vw] px-[16vw] justify-center text-2xl rounded-full items-center">
                <i className="text-3xl fa-duotone fa-file-user"></i>
                Download CV
              </button>
            </a>
            <a
              href="mailto:krishnapan91@gmail.com"
              className="border flex hover:bg-white hover:text-black gap-[1vw] duration-200 sm:min-w-[70px] min-w-[70%] min-h-[70px] sm:px-[2vw] px-[6vw] justify-center text-2xl rounded-full items-center"
            >
              <i className="fa-duotone text-3xl fa-envelope hover:fa-beat-fade"></i>
              Drop a mail
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
