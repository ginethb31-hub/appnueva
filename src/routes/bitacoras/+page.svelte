<div class="bg-modulo-bitacoras flex-grow-1 py-4">
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2><i class="bi bi-clock-history text-primary me-2"></i>Seguimiento de Bitácoras</h2>
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalBitacora">
        <i class="bi bi-plus-circle me-1"></i> Nueva Bitácora
      </button>
    </div>

    <div class="card shadow-sm mb-4 border-0 bg-transparent">
      <div class="card-body p-0">
        <table class="table table-hover table-striped align-middle mb-0">
          <thead class="table-dark">
            <tr>
              <th>N° Semana</th>
              <th>Estudiante</th>
              <th>Horas</th>
              <th>Resumen de Actividades</th>
              <th>Estado</th>
              <th class="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semana 1</td>
              <td class="fw-bold">Juan Pablo Martínez</td>
              <td>20 hrs</td>
              <td>Diseño de esquemas en PostgreSQL y conexión FastAPI...</td>
              <td><span class="badge bg-success">Aprobada</span></td>
              <td class="text-end">
                <button class="btn btn-sm btn-outline-primary me-1" data-bs-toggle="modal" data-bs-target="#modalBitacora" aria-label="Editar bitácora">
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" aria-label="Eliminar bitácora">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</div>


<div class="modal fade" id="modalBitacora" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title">Registro de Bitácora Semanal</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar modal"></button>
      </div>
      <div class="modal-body">
        <form onsubmit={(e) => e.preventDefault()} class="row g-3">
          <div class="col-md-6">
            <label for="sem_b" class="form-label">Número de Semana</label>
            <input type="number" id="sem_b" class="form-control" placeholder="1" />
          </div>
          <div class="col-md-6">
            <label for="hor_b" class="form-label">Horas Cumplidas</label>
            <input type="number" id="hor_b" class="form-control" placeholder="20" />
          </div>
          <div class="col-12">
            <label for="desc_b" class="form-label">Descripción de Actividades</label>
            <textarea id="desc_b" class="form-control" rows="3" placeholder="Detalle las tareas realizadas durante la semana..."></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
      </div>
    </div>
  </div>
</div>