function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-DZ5qMTfj.js","assets/index-BLELaIh-.js","assets/index-DS37jDL6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BLELaIh-.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-DZ5qMTfj.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
