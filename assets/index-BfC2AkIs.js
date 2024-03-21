function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-DvrTmD6_.js","assets/index-BJ2_aiVC.js","assets/index-Couby_vL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BJ2_aiVC.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-DvrTmD6_.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
