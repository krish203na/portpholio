function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DH1vZyt6.js","assets/index-DSLzyuSB.js","assets/index-DzNy5rO3.css","assets/index-D0IIUlGr.js","assets/index-D0CF1lZc.js","assets/index-CUNlpHJO.js","assets/index-BAylivzz.js","assets/index-C3Hg7x4L.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DSLzyuSB.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DH1vZyt6.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D0IIUlGr.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D0CF1lZc.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CUNlpHJO.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BAylivzz.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C3Hg7x4L.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
