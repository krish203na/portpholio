import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function HeroModel() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/JkMKQiy2ZCd46UmT/scene.splinecode" />
      </Suspense>
    </div>
  );
}
