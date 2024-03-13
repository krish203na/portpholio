import { motion } from 'framer-motion';
import React, { useState } from 'react'
import AnimatedCharacters from '../Home/HeroSection/AnimatedWords';
// import AnimatedText from "./AnimateFont";


const AnimateFont = () => {

    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
      { type: "heading1", text: "FullStack Developer" },
      {
        type: "heading2",
        text: "Animating responsive text!",
      },
    ];

    const container = {
      visible: {
        transition: {
          staggerChildren: 0.025,
        },
      },
    };

  return (
    <motion.div
    //   className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
      {/* <button onClick={handleReplay}>
        Replay <span>⟲</span>
      </button> */}
    </motion.div>
  );
}

export default AnimateFont
