

export const CardProyectos = ({nombre, descripcion, children}) => {
  return (
    <>
      <div className="mt-2">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        {children}
      </div>
      
    </>
  )
}


