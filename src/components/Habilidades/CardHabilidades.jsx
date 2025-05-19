

export const CardHabilidades = ({nombre, descripcion}) => {
  return (
    <>
      <div className="card mt-3 w-100 text-justify">
            <div className="card-body">
                <h4 className="text-muted">{nombre}</h4>
                <div className="mt-4">
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    </>
  )
}
