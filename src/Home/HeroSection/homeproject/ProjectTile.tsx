import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import FollowerPointer from './FollowerPointer';

const ProjectTile = ({
  projectName,
  projectVideo,
}: {
  projectName: string;
  projectVideo:string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <>
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        ref={ref}
        className={"relative"}
      >
        <NavLink to={""}>
          <motion.li
            initial={{ x: "90vw" }}
            whileInView={{ x: "0vw" }}
            transition={{ ease: "easeOut", duration: .8 }}
            className="border-b ease-out sm:text-5xl text-3xl font-bold hover:border-b-[orange] font-[] sm:h-[9vw] h-[10vh] duration-500 before:duration-500 hover:text-[black] before:-z-[1] z-10 flex justify-start items-center  before:content-[''] before:bg-[#facc15] before:absolute relative before:w-full before:h-[0%] hover:before:h-[100%]"
          >
            <h1 className="px-[1vw] cursor-pointer">{projectName}</h1>
          </motion.li>
        </NavLink>
        <AnimatePresence>
          {isInside && <FollowerPointer x={x} y={y} videoSrc={projectVideo} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectTile
