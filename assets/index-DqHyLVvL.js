function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-LxAqAvSQ.js","assets/index-BJ2_aiVC.js","assets/index-Couby_vL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BJ2_aiVC.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-LxAqAvSQ.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
