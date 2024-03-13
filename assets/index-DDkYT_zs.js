function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BlZVe14S.js","assets/index-DYBXSdGI.js","assets/index-UN07ptOB.css","assets/index-YQrgbR5q.js","assets/index-Be1yJyQZ.js","assets/index-lZ8KLWjD.js","assets/index-BGk7XgFe.js","assets/index-BPvYi3jS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DYBXSdGI.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BlZVe14S.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-YQrgbR5q.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Be1yJyQZ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-lZ8KLWjD.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BGk7XgFe.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BPvYi3jS.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
