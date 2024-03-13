function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DQMH9j85.js","assets/index-C3AwjbJj.js","assets/index-UN07ptOB.css","assets/index-CZMIsnJf.js","assets/index-CLgQ8LhN.js","assets/index-3wqPjO1t.js","assets/index-DE1t4qA8.js","assets/index-CNs4vORl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C3AwjbJj.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DQMH9j85.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CZMIsnJf.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CLgQ8LhN.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-3wqPjO1t.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DE1t4qA8.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CNs4vORl.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
