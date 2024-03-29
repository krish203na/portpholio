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
          <div className="flex w-full justify-center items-start flex-wrap">
            {bubbleSkill(SkillArray1, referense, 1, bubblesArray)}
          </div>
          <div className="flex sm:w-full w-[80%] m-auto justify-center items-start flex-wrap">
            {bubbleSkill(SkillArray2, referense, 2, bubblesArray)}
          </div>
          <div className="flex sm:w-full justify-center items-start flex-wrap">
            {bubbleSkill(SkillArray3, referense, 3, bubblesArray)}
          </div>
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

  return props.map((e, i) => {

    bubblesArray.push(`bubble${i + "" + t}`);
    
    useGSAP(() => {
      gsap.to(`.bubble${i + "" + t}`, {
        scrollTrigger: {
          trigger: ".skill3D",
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none reverse none",
        },
        bottom: "90vh",
        duration: 3,
        ease: "bounce.out",
        delay: Math.random() * 2,

      });


    });

    
    return (
      <>
        <motion.div
          key={`bubble${i + "" + t}`}
          drag
          whileHover={{
            cursor: "grab",
            scale: 1.3,
            transformStyle: "preserve-3d",
          }}
          whileDrag={{ scale: 1.5, cursor: "grabbing"}}
          dragConstraints={referense}
          
          className={`bubble z-[50] inline-block bubble${i + "" + t} mx-[1.5vw] sm:h-[8vw] sm:w-[8vw] h-[8vh] w-[8vh] relative flex justify-center flex-col items-center bottom-0`}
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
          <p className="sm:text-[0.8vw] text-[2vw] ">{e.name}</p>
        </motion.div>
      </>
    );
  });
  
  
};