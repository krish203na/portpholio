function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-Ckv8fJbB.js","assets/index-BJ2_aiVC.js","assets/index-Couby_vL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BJ2_aiVC.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-Ckv8fJbB.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
