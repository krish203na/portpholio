// import Spline from "@splinetool/react-spline";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../Loader";
import Home from "../../Home/Home";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import Navbar from "../../Navbar/Navbar";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function HeroModel() {

  return (
    <>
      <Spline
        scene="https://prod.spline.design/JkMKQiy2ZCd46UmT/scene.splinecode"
      />
    </>
  )
}
