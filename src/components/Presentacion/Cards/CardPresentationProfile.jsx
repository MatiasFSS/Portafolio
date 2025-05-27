

export const CardPresentationProfile = ({nombre, titulo, descripcion, descripcion2, descripcion3}) => {
  return (
    <>
      <div className="card mt-3 h-100 card-custom">
            <div className="card-body text-justify">
                <h2>{nombre}</h2>
                <h4 className="text-light-muted">{titulo}</h4>
                <div className="mt-4">
                    <p>{descripcion}</p>
                    <p>{descripcion2}</p>
                    <p>{descripcion3}</p>
                    <p className="text-center text-light-muted  mb-4">Gracias por darte el tiempo de conocer mi trabajo.</p>
                </div>
            </div>
        </div>
    </>
  )
}


