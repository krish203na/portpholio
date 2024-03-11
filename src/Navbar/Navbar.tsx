import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  easeOut,
} from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems: object[] = [
    {
      name: "Home",
      link: "/",
      Ikon: <i className="fa-regular fa-house"></i>,
    },
    {
      name: "Projects",
      link: "/project",
      Ikon: <i className="fa-regular fa-rectangle-vertical-history"></i>,
    },
    {
      name: "About",
      link: "/about",
      Ikon: <i className="fa-regular fa-address-card"></i>,
    },
    {
      name: "Github",
      link: "/github",
      Ikon: <i className="fa-brands fa-github"></i>,
    },
  ];

  const { scrollYProgress } = useScroll();

  const [visible, setVisible]: [boolean, Function] = useState(true);

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
      <motion.div
        className={` z-[500] fixed top-[5vh] left-[3vw] h-[60px] bg-white/0 rounded-full flex justify-evenly items-center text-lg border border-transparent dark:border-white/[0.2] dark:bg-black/50 backdrop-blur-[5px] shadow-lg dark:shadow-black overflow-hidden`}
        initial={{ width: "60px" }}
        animate={{ width: visible ? "60vw" : "60px" }}
        transition={{ ease: easeOut, duration: 0.8 }}
        whileHover={{ width: "60vw" }}
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
            animate={{ opacity: visible ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: .8 }}
            whileHover={{ opacity: 1 }}
            className="hover:underline"
          >
            <NavLink
              className={({ isActive }) => [
                isActive
                  ? "dark:text-[#facc15] text-[#7c3aed] underline"
                  : "dark:text-[white] text-[#171717]",
              ]}
              key={itemId.toString()}
              to={item.link}
            >
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
