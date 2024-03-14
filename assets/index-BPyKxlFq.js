function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-DDEb1g1g.js","assets/index-D5hHaGaK.js","assets/index-BBkPxrPK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D5hHaGaK.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-DDEb1g1g.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
