function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DTr0OI1N.js","assets/index-BLELaIh-.js","assets/index-DS37jDL6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BLELaIh-.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DTr0OI1N.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
