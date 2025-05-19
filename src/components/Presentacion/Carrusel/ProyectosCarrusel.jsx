import { CardProyectos } from "../Cards/CardProyectos"
import { useCarrusel } from "../../../hooks/useCarrusel"

export const ProyectosCarrusel = ({info,  id}) => {
    useCarrusel(id)

  return (
    <>
        <div id={id} className="carousel carousel-dark slide" style={{ minHeight: "72px" }}>
            <div className="carousel-inner h-100">
                <div className="carousel-item active h-100">
                    <CardProyectos nombre={info.proyecto1.nombre} descripcion={info.proyecto1.descripcion}/>
                </div>
                <div className="carousel-item h-100">
                    <CardProyectos nombre={info.proyecto2.nombre} descripcion={info.proyecto2.descripcion}/>
                </div>
            </div>
        
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    </>
  )
}


