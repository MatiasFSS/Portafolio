import { CardProyectos } from "../Cards/CardProyectos"
import { useCarrusel } from "../../../hooks/useCarrusel"

export const ProyectosCarrusel = ({info,  id}) => {
    useCarrusel(id)

    if (!info.length) {
    return <div>Cargando proyectos...</div>;
  }

  return (
    <>
        <div id={id} className="carousel carousel-dark slide" style={{ minHeight: "72px" }}>
            <div className="carousel-inner h-100">
                {info.map((proyecto, index) => (
                    <div key={index} className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}>
                        <CardProyectos 
                            nombre={proyecto.nombre || "Sin nombre"} 
                            descripcion={proyecto.descripcionCorta} 
                            url={proyecto.url || "#"} 
                                                />
                    </div>
                ))}
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


