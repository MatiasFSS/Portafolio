

export const CardPresentationProfile = ({nombre, titulo, descripcion, descripcion2}) => {
  return (
    <>
      <div className="card mt-3 h-100 card-custom">
            <div className="card-body text-justify">
                <h2>{nombre}</h2>
                <h4 className="text-light-muted">{titulo}</h4>
                <div className="mt-4">
                    <p>{descripcion}</p>
                    <p>{descripcion2}</p>
                </div>
            </div>
        </div>
    </>
  )
}


