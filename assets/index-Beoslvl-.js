function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index--ud1oNsB.js","assets/index-bDf9vAJA.js","assets/index-UN07ptOB.css","assets/index-DvSqf99k.js","assets/index-ClYx8lL3.js","assets/index-CF_SBYKs.js","assets/index-D5oO9bMJ.js","assets/index-CU4qUvsy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-bDf9vAJA.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index--ud1oNsB.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DvSqf99k.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-ClYx8lL3.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CF_SBYKs.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D5oO9bMJ.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CU4qUvsy.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
