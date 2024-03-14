import React, { Suspense } from "react";
import HomeAboutSection from "./HeroSection/HomeAboutSection";
import HeroSection from "./HeroSection/HeroSection";
// const HeroSection = React.lazy(() => import("./HeroSection/HeroSection"));

const Home = () => {
  return (
    <>
      {/* <Suspense fallback={null}> */}
        <HeroSection />
        
      {/* </Suspense> */}
<HomeAboutSection/>
    </>
  );
};

export default Home;
