function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/react-spline-CF9wr_AP.js","assets/index-BmIA31I8.js","assets/index-UN07ptOB.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as e,r as s,Y as i,_ as r}from"./index-BmIA31I8.js";const n=i.lazy(()=>r(()=>import("./react-spline-CF9wr_AP.js"),__vite__mapDeps([0,1,2])));function t(){return e.jsx("div",{children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(n,{scene:"https://prod.spline.design/JkMKQiy2ZCd46UmT/scene.splinecode"})})})}export{t as default};
