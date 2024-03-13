function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BW_CwGfm.js","assets/index-BmIA31I8.js","assets/index-UN07ptOB.css","assets/index-DtsuBtCE.js","assets/index-6kDP4XG5.js","assets/index-C476ZVWA.js","assets/index-TtJm6Rl7.js","assets/index-CdM_yz1r.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BmIA31I8.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BW_CwGfm.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DtsuBtCE.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-6kDP4XG5.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C476ZVWA.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-TtJm6Rl7.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CdM_yz1r.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
