import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { SparklesCore } from "./components/sparkles";
import { AnimatePresence, motion } from "framer-motion";
// import React, { Suspense } from "react";
// const Outlet:{} = React.lazy(() => import("react-router-dom"));

function App() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          // initial={{ width: "60px " }}
          // animate={{ width: "100vw" }}
          // transition={{ duration: 2 }}
          className="w-[100vw] h-full bg-[#f5b9b1] text-[#171717] font-semibold -z-50 dark:bg-[#293f40] dark:text-white shadow-[inset_10px_0px_350px_0px_rgba(0,0,0,0.4)] min-w-[100vw] min-h-[100vh] overflow-hidden"
        >
          <div className="w-full absolute inset-0 h-full z-0">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={1}
              maxSize={.1}
              particleDensity={10}
              className="w-full h-full absolute top-0 z-0"
              particleColor="#fbfbfb"
            />
          </div>
          <Navbar />

          <Outlet />
          <Footer />
        </motion.div>
      </AnimatePresence>
      {/* )}  */}
    </>
  );
}

export default App;
