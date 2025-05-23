

export const CardHabilidades = ({nombre, descripcion}) => {
  return (
    <>
      <div className="card mt-3 w-100 text-justify card-custom">
            <div className="card-body">
                <h4 className="text-light-muted">{nombre}</h4>
                <div className="mt-4">
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    </>
  )
}
