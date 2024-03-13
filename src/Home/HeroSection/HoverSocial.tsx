import { AnimatePresence, motion } from "framer-motion";
// import React from "react";

const HoverSocial = () => {
  return (
    <AnimatePresence>
    <motion.div className="w-full h-full rounded-lg bg-slate-300 border-3 border-black" whileHover={{rotateZ:-45}}>
      <motion.div className="main">
        <motion.div className="card"></motion.div>
        <motion.div className="card"></motion.div>
        <motion.div className="card"></motion.div>
        <motion.div className="card"></motion.div>
        <motion.div className="card"></motion.div>
        <motion.div className="card"></motion.div>
        <motion.div className="card"></motion.div>
        <motion.div className="card"></motion.div>
        <motion.div className="card"></motion.div>
        <p className="text">HOVER FOR SOCIAL</p>
        <motion.div className="main_back"></motion.div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
};

export default HoverSocial;
