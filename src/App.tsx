import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { SparklesCore } from "./components/sparkles";
import Loader from "./components/Loader";
// const Outlet = React.lazy(() => import("react-router-dom"));


function App() {
  return (
    <>
    <div className="w-[100vw] h-full bg-[#f5b9b1] text-[#171717] font-semibold -z-50 dark:bg-black dark:text-white min-w-[100vw] min-h-[100vh]">
       <div className="w-full absolute inset-0 h-full z-0">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1}
        maxSize={1.4}
        particleDensity={60}
        className="w-full h-full absolute top-0 z-0"
        particleColor="#fbfbfb"
      />
      </div>
      <Navbar />
      {/* <Suspense fallback={<p>this is loading</p>}> */}

      <Outlet />
      {/* </Suspense> */}
      <Footer />
    </div>
      {/* )}  */}
    </>
  );
}

export default App;
