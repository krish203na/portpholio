import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { SparklesCore } from "./components/sparkles";
import { AnimatePresence, motion } from "framer-motion";
// import { useGSAP } from "@gsap/react";
// import Lenis from "@studio-freight/lenis/types";
// import gsap from "gsap";
// import { useEffect, useRef } from "react";
// import { ReactLenis } from "@studio-freight/react-lenis";
// import Home from "./Home/Home";
// import React, { Suspense } from "react";
// const Outlet:{} = React.lazy(() => import("react-router-dom"));

function App() {

  // const lenisRef :any = useRef();

  // useEffect(() => {
  //   function update(time:any) {
  //     lenisRef.current?.lenis?.raf(time * 10);
  //   }

  //   gsap.ticker.add(update);

  //   return () => {
  //     gsap.ticker.remove(update);
  //   };
  // });

  return (
    <>
      {/* <ReactLenis ref={lenisRef } options={window} root={false} autoRaf={false}> */}
        {/* <AnimatePresence>
          <motion.div
            // initial={{ width: "60px " }}
            // animate={{ width: "100vw" }}
            // transition={{ duration: 2 }}
            className="w-[100vw] h-full bg-[#f5b9b1] border border-red-500 text-[#171717] font-semibold -z-50 dark:bg-gradient-to-b from-[#2a3637] from-20% via-[#2f4749] via-30% to-[#2a3637] to-70% dark:text-white shadow-[inset_10px_0px_350px_0px_rgba(0,0,0,0.4)] min-w-[100vw] min-h-[100vh] overflow-hidden"
          > */}
            <div className="w-full absolute inset-0 h-full z-0">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={1}
                maxSize={0.1}
                particleDensity={10}
                className="w-full h-full absolute top-0 z-0"
                particleColor="#fbfbfb"
              />
            </div>
            <Navbar />

            <Outlet />
            <Footer />
          {/* </motion.div>
        </AnimatePresence> */}
      {/* </ReactLenis> */}
      {/* )}  */}
    </>
  );
}

export default App;
