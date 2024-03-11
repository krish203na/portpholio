import React, { Suspense } from "react";
// import HeroModel from '../components/models/HeroModel'
const HeroModel = React.lazy(() => import("../components/models/HeroModel"));

const Home = () => {
  return (
    <div className="bg-transparent z-10">
      <div className="relative h-[100vh] w-full top-0 right-0 flex justify-center items-center bg-transparent z-30 transition-all ">
        <Suspense fallback={`this is Loading.....`}>
          <HeroModel />
        </Suspense>
      </div>
      Home
    </div>
  );
};

export default Home;
