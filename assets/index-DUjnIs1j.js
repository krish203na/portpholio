function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BFWoffXL.js","assets/index-DawIhpHQ.js","assets/index-BfJekrfw.css","assets/index-B8lfkDqe.js","assets/index-CYQe4ihC.js","assets/index-CmocRIF1.js","assets/index-CzmdzEAU.js","assets/index-DlLOYTfl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DawIhpHQ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BFWoffXL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-B8lfkDqe.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CYQe4ihC.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CmocRIF1.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CzmdzEAU.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DlLOYTfl.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
