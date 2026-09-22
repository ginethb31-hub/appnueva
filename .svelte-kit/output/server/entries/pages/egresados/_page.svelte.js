import "../../../chunks/server.js";
//#region src/routes/egresados/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<div class="bg-modulo-egresados flex-grow-1 py-4"><div class="container"><div class="d-flex justify-content-between align-items-center mb-4"><h2><i class="bi bi-mortarboard text-primary me-2"></i>Seguimiento de Egresados</h2> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalEgresado"><i class="bi bi-person-plus me-1"></i> Registrar Egresado</button></div> <div class="card shadow-sm mb-4 border-0 bg-transparent"><div class="card-body p-0"><table class="table table-hover table-striped align-middle mb-0"><thead class="table-dark"><tr><th>ID</th><th>Nombre Completo</th><th>Programa</th><th>Año Graduación</th><th>Situación Laboral</th><th>Empresa Actual</th><th class="text-end">Acciones</th></tr></thead><tbody><tr><td>1</td><td class="fw-bold">Andrés Felipe Gómez</td><td>Ingeniería de Sistemas</td><td>2025</td><td><span class="badge bg-success">Empleado</span></td><td>Tech Solutions S.A.S</td><td class="text-end"><button class="btn btn-sm btn-outline-primary me-1" data-bs-toggle="modal" data-bs-target="#modalEgresado" aria-label="Editar egresado"><i class="bi bi-pencil"></i></button> <button class="btn btn-sm btn-outline-danger" aria-label="Eliminar egresado"><i class="bi bi-trash"></i></button></td></tr></tbody></table></div></div></div></div> <div class="modal fade" id="modalEgresado" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header bg-primary text-white"><h5 class="modal-title">Formulario de Egresado</h5> <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar modal"></button></div> <div class="modal-body"><form class="row g-3"><div class="col-12"><label for="eg_nombre" class="form-label">Nombre Completo</label> <input type="text" id="eg_nombre" class="form-control" placeholder="Ej. Andrés Gómez"/></div> <div class="col-md-6"><label for="eg_prog" class="form-label">Programa</label> <input type="text" id="eg_prog" class="form-control" placeholder="Ingeniería de Sistemas"/></div> <div class="col-md-6"><label for="eg_anio" class="form-label">Año de Graduación</label> <input type="number" id="eg_anio" class="form-control" placeholder="2025"/></div> <div class="col-md-6"><label for="eg_sit" class="form-label">Situación Laboral</label> <select id="eg_sit" class="form-select">`);
	$$renderer.option({ selected: true }, ($$renderer) => {
		$$renderer.push(`Empleado`);
	});
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`Independiente`);
	});
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`En búsqueda de empleo`);
	});
	$$renderer.push(`</select></div> <div class="col-md-6"><label for="eg_emp" class="form-label">Empresa Actual</label> <input type="text" id="eg_emp" class="form-control" placeholder="Ej. Tech Solutions"/></div></form></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button> <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Guardar</button></div></div></div></div>`);
}
//#endregion
export { _page as default };
