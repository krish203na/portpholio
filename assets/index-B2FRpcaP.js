function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-CS7R8d01.js","assets/index-BLELaIh-.js","assets/index-DS37jDL6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BLELaIh-.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-CS7R8d01.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};
