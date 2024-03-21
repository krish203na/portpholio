function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer--0N4owKX.js","assets/index-BJ2_aiVC.js","assets/index-Couby_vL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BJ2_aiVC.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer--0N4owKX.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
