import { h as clsx, t as attr_class } from "../../chunks/server.js";
import { t as page } from "../../chunks/state.js";
//#region src/lib/components/Header.svelte
function Header($$renderer) {
	$$renderer.push(`<header class="bg-primary text-white py-2 px-4 d-flex justify-content-between align-items-center shadow-sm"><div class="d-flex align-items-center gap-2"><i class="bi bi-briefcase-fill fs-3"></i> <h1 class="h4 mb-0 fw-bold">Sistema de Prácticas Profesionales</h1></div> <div class="d-flex align-items-center gap-3"><span class="badge bg-light text-primary fw-semibold p-2">Tutor / Administrador</span> <div class="dropdown"><button class="btn btn-outline-light dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown"><i class="bi bi-person-circle me-1"></i> Usuario Demo</button> <ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="/"><i class="bi bi-box-arrow-right me-2"></i>Cerrar Sesión</a></li></ul></div></div></header>`);
}
//#endregion
//#region src/lib/components/Navbar.svelte
function Navbar($$renderer) {
	$$renderer.push(`<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-0 shadow-sm"><div class="container-fluid"><a class="navbar-brand fw-bold" href="/dashboard"><i class="bi bi-mortarboard-fill text-primary me-2"></i>Sistema Prácticas</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacion" aria-controls="menuNavegacion" aria-expanded="false" aria-label="Alternar navegación"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="menuNavegacion"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link" href="/dashboard">Dashboard</a></li> <li class="nav-item"><a class="nav-link" href="/usuarios">Usuarios</a></li> <li class="nav-item"><a class="nav-link" href="/empresas">Empresas</a></li> <li class="nav-item"><a class="nav-link" href="/practicas">Prácticas</a></li> <li class="nav-item"><a class="nav-link" href="/postulaciones">Postulaciones</a></li> <li class="nav-item"><a class="nav-link" href="/bitacoras">Bitácoras</a></li> <li class="nav-item"><a class="nav-link" href="/evaluaciones">Evaluaciones</a></li> <li class="nav-item"><a class="nav-link" href="/egresados">Egresados</a></li></ul></div></div></nav>`);
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer class="bg-light border-top py-3 mt-auto"><div class="container text-center text-muted fs-7"><small>© 2026 Sistema de Gestión de Prácticas Profesionales — Todos los derechos reservados.</small></div></footer>`);
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		$$renderer.push(`<div${attr_class(clsx(page.url.pathname === "/login" ? "d-flex flex-column min-vh-100" : "d-flex flex-column min-vh-100 bg-light"))}>`);
		if (page.url.pathname !== "/login") {
			$$renderer.push("<!--[0-->");
			Header($$renderer, {});
			$$renderer.push(`<!----> `);
			Navbar($$renderer, {});
			$$renderer.push(`<!---->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <main class="flex-grow-1 d-flex flex-column">`);
		children($$renderer);
		$$renderer.push(`<!----></main> `);
		if (page.url.pathname !== "/login") {
			$$renderer.push("<!--[0-->");
			Footer($$renderer, {});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { _layout as default };
