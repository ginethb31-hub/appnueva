<div class="bg-modulo-usuarios flex-grow-1 py-4">
  <div class="container">
    
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2><i class="bi bi-people text-primary me-2"></i>Gestión de Usuarios</h2>
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalUsuario">
        <i class="bi bi-person-plus me-1"></i> Nuevo Usuario
      </button>
    </div>

    <div class="card shadow-sm mb-4 border-0 bg-transparent">
      <div class="card-body p-0">
        <table class="table table-hover table-striped align-middle mb-0">
          <thead class="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Documento</th>
              <th>Rol</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th class="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="fw-bold">Juan Pablo Martínez</td>
              <td>1007123456</td>
              <td><span class="badge bg-info text-dark">Estudiante</span></td>
              <td>juan.martinez@cul.edu.co</td>
              <td>3015551234</td>
              <td><span class="badge bg-success">Activo</span></td>
              <td class="text-end">
                <button class="btn btn-sm btn-outline-primary me-1" data-bs-toggle="modal" data-bs-target="#modalUsuario" aria-label="Editar usuario">
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" aria-label="Eliminar usuario">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td class="fw-bold">María Fernández</td>
              <td>32987654</td>
              <td><span class="badge bg-warning text-dark">Tutor Académico</span></td>
              <td>mfernandez@cul.edu.co</td>
              <td>3004449876</td>
              <td><span class="badge bg-success">Activo</span></td>
              <td class="text-end">
                <button class="btn btn-sm btn-outline-primary me-1" data-bs-toggle="modal" data-bs-target="#modalUsuario" aria-label="Editar usuario">
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" aria-label="Eliminar usuario">
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

<div class="modal fade" id="modalUsuario" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title">Registrar Usuario</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar modal"></button>
      </div>
      <div class="modal-body">
        <form onsubmit={(e) => e.preventDefault()} class="row g-3">
          <div class="col-md-6">
            <label for="nom_u" class="form-label">Nombres</label>
            <input type="text" id="nom_u" class="form-control" placeholder="Ej. Juan Pablo" />
          </div>
          <div class="col-md-6">
            <label for="ape_u" class="form-label">Apellidos</label>
            <input type="text" id="ape_u" class="form-control" placeholder="Ej. Martínez" />
          </div>
          <div class="col-md-6">
            <label for="doc_u" class="form-label">Número de Documento</label>
            <input type="text" id="doc_u" class="form-control" placeholder="1007123456" />
          </div>
          <div class="col-md-6">
            <label for="rol_u" class="form-label">Rol del Sistema</label>
            <select id="rol_u" class="form-select">
              <option selected>Estudiante</option>
              <option>Tutor Académico</option>
              <option>Tutor Empresarial</option>
              <option>Administrador</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="cor_u" class="form-label">Correo Institucional</label>
            <input type="email" id="cor_u" class="form-control" placeholder="usuario@cul.edu.co" />
          </div>
          <div class="col-md-6">
            <label for="tel_u" class="form-label">Teléfono</label>
            <input type="text" id="tel_u" class="form-control" placeholder="3000000000" />
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