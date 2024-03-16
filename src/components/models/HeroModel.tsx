import React, { Suspense } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import { rotate } from "three/examples/jsm/nodes/Nodes.js";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function HeroModel() {
  return (
    <div className="flex justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="absolute -z-50">3D Model Loading..</h1>
        <Spline
          scene="https://prod.spline.design/JkMKQiy2ZCd46UmT/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}
