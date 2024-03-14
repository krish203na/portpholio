function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C-LhFCt-.js","assets/index-D5hHaGaK.js","assets/index-BBkPxrPK.css","assets/index-C512BJii.js","assets/index-XnoCYfNd.js","assets/index-7pLbC-Um.js","assets/index-nH7Muz-u.js","assets/index-r1Vf4GHD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D5hHaGaK.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C-LhFCt-.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C512BJii.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-XnoCYfNd.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-7pLbC-Um.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-nH7Muz-u.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-r1Vf4GHD.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
