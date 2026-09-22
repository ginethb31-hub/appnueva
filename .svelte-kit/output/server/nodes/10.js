

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/practicas/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Cb5ec_Ya.js","_app/immutable/chunks/EsmAB3Op.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = [];
export const fonts = [];
