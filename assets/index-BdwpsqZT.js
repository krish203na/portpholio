function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Dl2_2UxU.js","assets/index-CemBAC4w.js","assets/index-Couby_vL.css","assets/index-C1mpVp6L.js","assets/index-Cq3uEvvX.js","assets/index-BOihyLNb.js","assets/index-DRu-QPsv.js","assets/index-Byi0Y-FN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CemBAC4w.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Dl2_2UxU.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C1mpVp6L.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cq3uEvvX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BOihyLNb.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DRu-QPsv.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Byi0Y-FN.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
