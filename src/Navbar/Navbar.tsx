import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  easeOut,
} from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems: object[] = [
    {
      name: "Home",
      link: "/portpholio/",
      Ikon: <i className="fa-regular fa-house"></i>,
    },
    {
      name: "Projects",
      link: "/portpholio/project",
      Ikon: <i className="fa-regular fa-rectangle-vertical-history"></i>,
    },
    {
      name: "About",
      link: "/portpholio/about",
      Ikon: <i className="fa-regular fa-address-card"></i>,
    },
    {
      name: "Github",
      link: "/portpholio/github",
      Ikon: <i className="fa-brands fa-github"></i>,
    },
  ];

  const { scrollYProgress } = useScroll();

  const [visible, setVisible]: [boolean, Function] = useState(false);

  const [viewportWidth,setViewportWidth] = useState(window.innerWidth);

  useEffect(()=>{
    setViewportWidth(window.innerWidth)
  })

  

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      setVisible(false);
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence>
      <div className="fixed flex justify-center lg:top-[3vh] top-[1vh] w-full z-[500] bg-transparent">
        <motion.div
          className={` lg:h-[50px] h-[40px] bg-white/0 rounded-full flex justify-evenly items-center text-lg border border-transparent dark:border-white/[0.2] dark:bg-black/50 backdrop-blur-[5px] shadow-lg dark:shadow-black overflow-hidden`}
          initial={{ width: "60px" }}
          animate={{ width: visible ? viewportWidth>1024 ? "35%" : viewportWidth > 786 ? "50%" : "100%" : "60px" }}
          transition={{ ease: easeOut, duration: 0.8 }}
          whileHover={{ width: viewportWidth>1024 ? "35%" : viewportWidth > 786 ? "60%" : "100%" }}
          onHoverStart={() => {
            setVisible(true);
          }}
          onHoverEnd={() => {
            setVisible(false);
          }}
        >
          <motion.i
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="fa-solid fa-bars absolute font-black left-[21px]"
          ></motion.i>
          {/* {navItems.map((item:any,itemNo:Number)=>)} */}
          {navItems.map((item: any, itemId: Number) => (
            <motion.div
              key={itemId.toString()}
              animate={{
                display: visible ? "block" : "none",
                opacity: visible ? 1 : 0,
              }}
              initial={{ display: "none",opacity:0 }}
              transition={{ duration: 1 }}
              whileHover={{ display: "block", opacity:1 }}
              className="hover:underline"
            >
              <NavLink
                className={`${({ isActive }: { isActive: boolean }) => [
                  isActive
                  ? "dark:text-[white] text-[#171717]"
                    : "dark:text-[#facc15]  underline"
                ]}`}
                key={itemId.toString()}
                to={item.link}
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
