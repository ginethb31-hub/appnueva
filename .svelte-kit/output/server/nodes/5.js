

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/egresados/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DOhVsyBm.js","_app/immutable/chunks/EsmAB3Op.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = [];
export const fonts = [];
