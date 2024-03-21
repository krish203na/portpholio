function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmojiDrawer-7ex5t_a6.js","assets/index-BLELaIh-.js","assets/index-DS37jDL6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-BLELaIh-.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-7ex5t_a6.js"),__vite__mapDeps([0,1,2]));await e.addShape(i,new t,o)}const n=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{n as i,i as v};
