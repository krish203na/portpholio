function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/react-spline-D8INMfmJ.js","assets/index-CemBAC4w.js","assets/index-Couby_vL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as e,r as s,Y as i,_ as n}from"./index-CemBAC4w.js";const r=i.lazy(()=>n(()=>import("./react-spline-D8INMfmJ.js"),__vite__mapDeps([0,1,2])));function a(){return e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:[e.jsx("h1",{className:"absolute -z-50",children:"3D Model Loading.."}),e.jsx(r,{scene:"https://prod.spline.design/JkMKQiy2ZCd46UmT/scene.splinecode"})]})})}export{a as default};