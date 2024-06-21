import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";
// import { AnimatePresence } from "framer-motion";
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

function App() {
  
  // const targetRef = useRef<HTMLDivElement>(null);

  // useGSAP(()=>{

  //   gsap.registerPlugin(ScrollToPlugin);


  //  if (targetRef.current) {
  //    gsap.to(window, {
  //      duration: 2, 
  //      scrollTo: {
  //        y: targetRef.current.offsetTop,
  //        autoKill: false,
  //      },
  //      ease: "power4.out", 
  //    });
  //  }
  // })

  return (
    <>
        {/* <AnimatePresence> */}
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
         {/* </AnimatePresence> */}
    </>
  );
}

export default App;
