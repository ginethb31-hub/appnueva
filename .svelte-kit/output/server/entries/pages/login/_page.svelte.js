import "../../../chunks/server.js";
import "../../../chunks/navigation.js";
//#region src/routes/login/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<div class="login-bg d-flex align-items-center justify-content-center p-3 svelte-1x05zx6"><div class="card shadow-lg border-0 rounded-4 login-card w-100 svelte-1x05zx6" style="max-width: 420px;"><div class="card-body p-4 p-sm-5"><div class="text-center mb-4"><div class="bg-primary bg-opacity-10 d-inline-block p-3 rounded-circle mb-2"><i class="bi bi-mortarboard-fill text-primary fs-1"></i></div> <h3 class="fw-bold text-dark">Iniciar Sesión</h3> <p class="text-muted small">Sistema de Gestión de Prácticas</p></div> <form><div class="form-floating mb-3"><input type="email" class="form-control" id="emailInput" placeholder="nombre@ejemplo.com" required=""/> <label for="emailInput">Correo Institucional</label></div> <div class="form-floating mb-3"><input type="password" class="form-control" id="passwordInput" placeholder="Contraseña" required=""/> <label for="passwordInput">Contraseña</label></div> <div class="mb-3"><label for="rolSelect" class="form-label text-muted small fw-semibold">Tipo de Usuario</label> <select id="rolSelect" class="form-select">`);
		$$renderer.option({ selected: true }, ($$renderer) => {
			$$renderer.push(`Estudiante`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Tutor Académico`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Tutor Empresarial`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Administrador`);
		});
		$$renderer.push(`</select></div> <div class="d-flex justify-content-between align-items-center mb-4"><div class="form-check"><input type="checkbox" class="form-check-input" id="rememberMe"/> <label class="form-check-label small text-muted" for="rememberMe">Recordarme</label></div> <a href="#olvide" class="text-decoration-none small">¿Olvidaste tu contraseña?</a></div> <button type="submit" class="btn btn-primary w-100 py-2.5 fw-bold shadow-sm"><i class="bi bi-box-arrow-in-right me-1"></i> Ingresar</button></form></div></div></div>`);
	});
}
//#endregion
export { _page as default };
