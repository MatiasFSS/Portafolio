import { CardImageProfile, CardPresentationProfile, CardTecnologiasFav, CardHabilidadesBlandas, InfoCarousel } from "../components/Presentacion";
import { useInfo } from "../hooks/useInfo";
import data from '../data.json';
import proyectos from '../proyectos.json';
import { ProyectosCarrusel } from "../components/Presentacion/Carrusel/ProyectosCarrusel";


export const Presentacion = () => {
  const { info:contacto } = useInfo(data);
  const {info:proyecto} = useInfo(proyectos)
  if (!contacto || !proyecto) return <div className="container mt-4">Cargando...</div>;

  return (
    <div className="container py-4">
      <div className="text-center my-4">
        <h2 className="fw-bold">¡Hola! Soy Juan</h2>
        <p className="text-center text-muted mb-4">
          Te cuento un poco sobre quién soy, qué me apasiona de la tecnología y cómo espero aportar a los proyectos en los que participe.
        </p>
      </div>

      <div className="row align-items-stretch">
        {/* Columna izquierda - Imagen */}
        <div className="col-12 col-lg-5 col-xl-4 d-flex flex-column gap-3">
          <CardImageProfile/>
        </div>

        {/* Columna derecha */}
        <div className="col-12 col-lg-7 col-xl-8 d-flex flex-column gap-3">
          {/* Presentación arriba */}
          <CardPresentationProfile
            nombre={contacto.presentacion.nombre}
            titulo={contacto.presentacion.titulo}
            descripcion={contacto.presentacion.descripcion}
            descripcion2={contacto.presentacion.descripcion2}
          />
          <div className="row">
            <div className="col-md-12 col-lg-6">
                <InfoCarousel info={contacto} id="ContactoCarousel"/>
               
            </div>
            <div className="col-md-12 col-lg-6">
              <CardHabilidadesBlandas/>
             
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">

        <div className="col-md-12 col-lg-6">
            <CardTecnologiasFav/>
        </div>
        <div className="col-md-12 col-lg-6">
          <ProyectosCarrusel info={proyecto} id="proyectosCarousel"/>
        </div>
      </div>

      
    </div>
  );
};
