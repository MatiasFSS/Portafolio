

export const CardCursos = ({curso, descripcion, estado, url}) => {
  return (
    <>
      <div className="card mt-3 w-100 text-justify card-custom">
            <div className="card-body">
                <h4 className="text-light-muted">{curso}</h4>
                <div className="mt-4">
                    <p>{descripcion}</p>
                    <p className="text-light-muted">{estado}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-custom">Ir al curso</button>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}


