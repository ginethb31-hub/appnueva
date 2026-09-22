

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bitacoras/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DlXkcAT4.js","_app/immutable/chunks/EsmAB3Op.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = [];
export const fonts = [];
