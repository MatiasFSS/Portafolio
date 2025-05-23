
export const CardExperienciaProyectos = ({nombre, descripcionLarga, url, children}) => {
  return (
    <>
      <div className="mt-3">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text text-justify mt-3">{descripcionLarga}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-custom">Ir al Proyecto</button>
        </a>
        {children}
      </div>
    </>
  )
}

