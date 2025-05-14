

export const CardImageProfile = () => {
  return (
    <>
        <div className="card background-cards mt-3">
            <div className="card-body text-center">
            <img
                src="assets\img\imagenPrueba.png"
                alt="Matías"
                className="img-fluid rounded"
            />
            <p className="mt-2 font-items">Holaaa!</p>
            </div>
        </div>
        {/* Botón Descargar CV */}
        <a href="/ruta/archivo.pdf" download className="btn btn-primary">
            Descargar CV
        </a>
    </>
  )
}


