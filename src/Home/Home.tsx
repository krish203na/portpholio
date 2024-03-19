// import React, { Suspense } from "react";
// import HomeAboutSection from "./HeroSection/HomeAboutSection";
import HeroSection from "./HeroSection/HeroSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skill3D from "./HeroSection/Skill3D"
// import { useScroll } from "framer-motion";
// import { useEffect } from "react";

const Home = () => {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let t2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".blow",
  //       start: "0px bottom",
  //       end: "100% bottom",
  //       scrub: 1,
  //       // pin:true,
  //       markers: true,
  //     },
  //   });

  //   t2.fromTo(
  //     ".BlowingSection",
  //     {
  //       // opacity:0.5,
  //       width: "10px",
  //       height: "10px",
  //       borderRadius: 200,
  //       padding: "10px",
  //       display: "flex",
  //       justifyContent: "center",
  //       rotate: "180deg",
  //       // boxShadow:"0px 0px 50px black"
  //     },
  //     {
  //       // opacity:1,
  //       width: "100%",
  //       height: "100%",
  //       borderRadius: 0,
  //       padding: 0,
  //       rotate: 0,
  //       // backgroundColor: "Yellow",
  //     }
  //   );
  // });

  return (
    <>
      <div id="Home"
      className="w-[100vw] h-full overflow-hidden">
        <div className="">
          <HeroSection />
        </div>

        <div className="blow sm:w-[100vw] w-[100vw] border border-black sm:h-[100vh] flex justify-start items-center overflow-hidden">
          <AnimateText text={"I am  Passionate  Full Stack  Developer"} />
        </div>

        <div>
          <Skill3D/>
        </div>
      </div>
    </>
  );
};

export default Home;

const AnimateText = (props: { text: String }) => {

  const [selected,setSelected] = useState("<-- Hover on it")

  const BlurVerify: string[] = [];
  const selectedDescription: string[] = [
    "",
    '"I put my Heart & Soul into my Work" and always willing to go the extra mile to deliver the best result", a dedicated developer fueled by a passion for innovation and problem-solving',
    `"I'm, a versatile full stack developer adept at building robust and dynamic web applications", From crafting responsive user interfaces to architecting scalable backend systems.`,
    `"I'm, a Enthusiastic developer known for crafting immersive digital experiences", I thrive on turning concepts into impactful solutions."`,
  ];



  const blurAnimate = (target: string, targetNo:number) => {
    setSelected(selectedDescription[targetNo])
    const set = document.getElementById("selectedWord")
  if(set !== null){
    set.style.transitionDuration="0.5s"
  }
    BlurVerify.map((e, i) => {
      console.log(e);
      if (target !== e) {
        const blury = document.getElementById(e);

        if (blury != null && blury.id != "wordanimataBlock0") {
          blury.style.transitionDuration = "0.6s";
          blury.style.filter = "blur(22px)";
          console.log(i)
        }
      }
    });
  };

  const reverseBlurAnimate = (target: string) => {
    BlurVerify.map((e) => {
      console.log(e);
      if (target !== e) {
        const blury = document.getElementById(e);

        if (blury != null && blury.id != "wordAnimation0") {
          blury.style.filter = "blur(0px)";
          setSelected("<-- Hover on it")
        }
      }
    });
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className="flex flex-col ml-[3vw]">
        {props.text.split("  ").map((e, i) => {

          useEffect(()=>{

            gsap.fromTo("#selectedWord",{x:150},{x:0 , duration:1});
          })
          useGSAP(() => {
            gsap.registerPlugin(ScrollTrigger);


            gsap.fromTo(
              `#wordAnimation${+i}`,
              {
                y: 150,
                opacity: isHover ? 0.2 : 1,
              },
              {
                scrollTrigger: {
                  trigger: `#wordanimataBlock${i}`,
                  // markers: true,
                  start: "top 80%",
                  end: "top 80%",
                  toggleActions: "play none reverse none",
                },
                y: 0,
                duration: 0.6,
                ease: "circ",
                // opacity:1
              }
            );
          });
          {
            BlurVerify.push(`wordanimataBlock` + i);
          }
          return (
            <div
              id={`wordanimataBlock` + i}
              key={`animatediv` + i}
              className="wordanimataBlock inline-block overflow-hidden"
            >
              <motion.h1
                id={`wordAnimation` + i}
                key={`animateWord` + i}
                className="wordAnimation sm:text-[10vw] text-7xl sm:leading-none font-bold w-full"
                whileHover={{}}
                onHoverStart={() => {
                  blurAnimate(`wordanimataBlock` + i, i);
                  setIsHover(true);
                  console.log("hovered");
                }}
                onHoverEnd={() => {
                  reverseBlurAnimate(`wordAnimation` + i);
                  setIsHover(false);
                  console.log("hoverout");
                }}
              >
                {e}
              </motion.h1>
            </div>
          );
        })}
      </div>
      <div className="w-[50%] h-full relative">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          id="selectedWord"
          className="absolute bottom-[15vh] w-[70%] text-center right-[2vw] text-[1.5vw] translate-x-[100px]"
        >
          {selected}
        </motion.h1>
      </div>
    </>
  );
};
