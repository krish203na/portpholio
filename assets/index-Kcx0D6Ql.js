function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CETrQZeQ.js","assets/index-BJ2_aiVC.js","assets/index-Couby_vL.css","assets/index-DqHyLVvL.js","assets/index-DV4qKku0.js","assets/index-B--AL28y.js","assets/index-B1BvRvoC.js","assets/index-BoTfF0nl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BJ2_aiVC.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CETrQZeQ.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DqHyLVvL.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DV4qKku0.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B--AL28y.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B1BvRvoC.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BoTfF0nl.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
