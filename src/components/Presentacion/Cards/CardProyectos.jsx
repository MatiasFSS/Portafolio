

export const CardProyectos = ({nombre, descripcion, children, url}) => {
  return (
    <>
      <div className="mt-2" style={{ minHeight: "126px" }}>
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-custom">Ir al Proyecto</button>
        </a>
        {children}
      </div>
      
    </>
  )
}


