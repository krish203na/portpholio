function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CMs8H0jL.js","assets/index-BazLtN_r.js","assets/index-UN07ptOB.css","assets/index-DCPPNF1h.js","assets/index-DCGSchKu.js","assets/index-DL17f6eE.js","assets/index-DuWlXmEl.js","assets/index-jEai2o1C.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BazLtN_r.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CMs8H0jL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DCPPNF1h.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DCGSchKu.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DL17f6eE.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DuWlXmEl.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-jEai2o1C.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
