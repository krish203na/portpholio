import HeroSection from "./HeroSection/HeroSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skill3D from "./HeroSection/Skill3D";
import HomeProjects from "./HeroSection/HomeProjects";
import { CardBody, CardContainer } from "../components/3d-card";
import Footer from "../Footer/Footer";

const Home = () => {

  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 0.4, delay: 7, ease: "easeInOut" }}
        className="w-full h-screen bg-white z-[1000] absolute flex-col flex justify-center items-center"
      >
        <motion.div
          className="w-[50%]"
        >
          <h1 className="text-black sm:text-[10vw] text-[8vh] font-bold logo flex justify-center items-center gap-[10px]  overflow-hidden">
            <motion.span
              className="h-full"
              initial={{ y: "25vh" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 5, duration: 1 }}
            >
              K
            </motion.span>
            <motion.span
              className="h-full"
              initial={{ y: "25vh" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                damping: 5,
                duration: 1,
                delay: 0.8,
              }}
            >
              R
            </motion.span>
            <motion.span
              className="h-full"
              initial={{ y: "25vh" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                damping: 5,
                duration: 1,
                delay: 1.6,
              }}
            >
              I
            </motion.span>
            <motion.span
              className="h-full"
              initial={{ y: "25vh" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                damping: 5,
                duration: 1,
                delay: 2.4,
              }}
            >
              S
            </motion.span>
            <motion.span
              className="h-full"
              initial={{ y: "25vh" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                damping: 5,
                duration: 1,
                delay: 3.2,
              }}
            >
              H
            </motion.span>
          </h1>
        </motion.div>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: 30,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="text-black font-semibold text-xl"
          >
            loading....
          </motion.h1>
        </div>
      </motion.div>
      <div
        id="Home"
        className="w-full text-white h-full overflow-hidden bg-gradient-to-b from-[#2a3637] from-20% via-[#2f4749] via-30% to-[#2a3637] to-70%"
      >
        <div className="fixed mix-blend-difference sm:top-[3vh] top-[6vh] left-[3vw] z-[500]">
          <h1 className="logo md:text-[3vw] text-[5vh] tracking-wider">
            KRISH
          </h1>
        </div>
        <div className="relative top-0">
          <HeroSection />
        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:7}}  className="blow sm:w-[100vw] w-[100vw] sm:h-[100vh] flex justify-start items-center flex-col sm:flex-row overflow-hidden">
          <AnimateText text={"I am  Passionate  Full Stack  Developer"} />
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:7}} >
          <Skill3D />
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:7}} >
          <HomeProjects />
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:7}}  className="relative">
        <Footer/>

        </motion.div>
      </div>
    </>
  );
};

export default Home;

const AnimateText = (props: { text: String }) => {
  const [selected, setSelected] = useState("<-- Hover on it");

  const BlurVerify: string[] = [];
  const selectedDescription: string[] = [
    "I am Krishna Ashok Panchal from Mumbai, India. I am a 24 yrs Developer.",
    '"I put my Heart & Soul into my Work" and always willing to go the extra mile to deliver the best result", a dedicated developer fueled by a passion for innovation and problem-solving',
    `"I'm, a versatile full stack developer adept at building robust and dynamic web applications", From crafting responsive user interfaces to architecting scalable backend systems.`,
    `"I'm, a Enthusiastic developer known for crafting immersive digital experiences", I thrive on turning concepts into impactful solutions."`,
  ];

  const blurAnimate = (target: string, targetNo: number) => {
    setSelected(selectedDescription[targetNo]);
    const set = document.getElementById("selectedWord");
    if (set !== null) {
      set.style.transitionDuration = "0.5s";
    }
    BlurVerify.map((e, i) => {
      console.log(e);
      if (target !== e) {
        const blury = document.getElementById(e);

        if (blury != null && blury.id != "wordanimataBlock0") {
          blury.style.transitionDuration = "0.6s";
          blury.style.filter = "blur(22px)";
          console.log(i);
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
          setSelected("<-- Hover on it");
        }
      }
    });
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className="flex flex-col ml-[3vw] min-h-10vh]">
        {props.text.split("  ").map((e, i) => {
          useEffect(() => {
            gsap.fromTo("#selectedWord", { x: 150 }, { x: 0, duration: 1 });
          });
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
                  start: "top 80%",
                  end: "top 80%",
                  toggleActions: "play none reverse none",
                },
                y: 0,
                duration: 0.6,
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
              className="wordanimataBlock flex overflow-hidden"
            >
              <motion.h1
                id={`wordAnimation` + i}
                key={`animateWord` + i}
                className="wordAnimation sm:text-[10vw] text-7xl sm:leading-none font-bold "
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
      <div className="sm:w-[50%] h-full p-[5vh] flex justify-center items-start  relative">
        <CardContainer className="inter-var" xDeflection={15} yDeflection={200}>
          <CardBody className="bg-transperent relative group/card dark:bg-transperent border-transperent w-auto rounded-xl p-6   ">
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="./images/Krishna.png"
              height="1000px"
              width="1000px"
              className=" sm:h-[60vh] sm:w-auto h-[70vw] w-[70vw] object-cover rounded-xl "
            />
          </CardBody>
        </CardContainer>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          id="selectedWord"
          className="absolute backdrop-blur-sm bottom-[10vh] hidden sm:block w-[70%] text-center text-[1.5vw] translate-x-[100px]"
        >
          {selected}
        </motion.h1>
      </div>
    </>
  );
};
