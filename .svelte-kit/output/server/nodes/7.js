

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/evaluaciones/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.agQF9rd9.js","_app/immutable/chunks/EsmAB3Op.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = [];
export const fonts = [];
