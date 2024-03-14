// import React, { Suspense } from "react";
import HomeAboutSection from "./HeroSection/HomeAboutSection";
import HeroSection from "./HeroSection/HeroSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const { scrollYProgress } = useScroll();
  let scroll = scrollYProgress;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".blow",
        start: "0px bottom",
        end: "100% bottom",
        scrub: 1,
        // pin:true,
        markers: true,
      },
    });

    t2.fromTo(
      ".BlowingSection",
      {
        // opacity:0.5,
        width: "10px",
        height: "10px",
        borderRadius: 200,
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        rotate: "180deg",
        // boxShadow:"0px 0px 50px black"
      },
      {
        // opacity:1,
        width: "100%",
        height: "100%",
        borderRadius: 0,
        padding: 0,
        rotate: 0,
        // backgroundColor: "Yellow",
      }
    );
  });

  return (
    <div id="Home">
      <div className="sticky">
        <HeroSection />
      </div>

      <div className="blow w-[100vw] h-[100vh] flex justify-center">
        <div className="BlowingSection bg-black ">
          <div className="BlowingSection bg-white">
            <div className="BlowingSection bg-black">
              <div className="BlowingSection bg-white">
                <div className="BlowingSection bg-black">
                  <div className="BlowingSection bg-white">
                    <div className="BlowingSection bg-black">
                      <div className="BlowingSection bg-white">
                        <div className="BlowingSection bg-black">
                          <div className="BlowingSection bg-white">
                            <div className="BlowingSection bg-black">
                              {/* 
                              <div className="BlowingSection bg-white">
                                <div className="BlowingSection bg-black"> */}
                              {/* <div className="BlowingSection bg-white"> */}
                              {/* <HomeAboutSection /> */}
                              {/* </div> */}
                              {/* </div>
                              </div>
                            */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
