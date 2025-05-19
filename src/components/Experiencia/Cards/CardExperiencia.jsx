

export const CardExperiencia = ({titulo, fecha, descripcion, descripcion2, categoria, habilidades, tecnologias}) => {
  return (
    <>
        <div className="timeline">
          {/* Experiencia 1: Práctica */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {fecha}
              </h6>
              <p className="card-text">
                {descripcion}
              </p>
              {descripcion2 && (
                <p className="card-text">
                    {descripcion2}
                </p>
                )}
                <p className="card-text">
                    {categoria}
                </p>
              <p className="mb-0">
                <strong>Habilidades desarrolladas: </strong> {habilidades}
              </p>

              <p className="mb-0">
                <strong>Tecnologias: </strong> {tecnologias}
              </p>

            </div>
          </div>
        </div>
    </>
  )
}


