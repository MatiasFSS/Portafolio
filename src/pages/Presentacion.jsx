import { CardImageProfile, CardPresentationProfile, CardTecnologiasFav, CardHabilidadesBlandas, InfoCarousel } from "../components/Presentacion";
import { useInfoFirebase } from "../hooks/useInfoFirebase";
// import data from '../data.json';
// import proyectos from '../proyectos.json';
import { ProyectosCarrusel } from "../components/Presentacion/Carrusel/ProyectosCarrusel";


export const Presentacion = () => {
  const {data, proyectos, habilidades_blandas, loading} = useInfoFirebase();

  if (loading) return <div className="container mt-4">Cargando...</div>;

  if (!data || !proyectos || !habilidades_blandas) return <div className="container mt-4">No hay datos disponibles</div>;

  return (
    <div className="container py-5 fade-in-up">
      <div className="text-center my-4">
        <h2 className="fw-bold letra-saltando">¡Hola! Soy Matías</h2>
        <p className="text-center text-light-muted  mb-4">
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
            nombre={data.presentacion.nombre}
            titulo={data.presentacion.titulo}
            descripcion={data.presentacion.descripcion}
            descripcion2={data.presentacion.descripcion2}
          />
          <div className="row">
            <div className="col-md-12 col-lg-6">
                <InfoCarousel infoContacto={data.contacto} infoEducacion={data.educacion} id="ContactoCarousel"/>
               
            </div>
            <div className="col-md-12 col-lg-6">
              <CardHabilidadesBlandas  habilidad={habilidades_blandas[0]} />
             
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">

        <div className="col-md-12 col-lg-6">
            <CardTecnologiasFav/>
        </div>
        <div className="col-md-12 col-lg-6">
          <ProyectosCarrusel info={proyectos} id="proyectosCarousel"/>
        </div>
      </div>

      
    </div>
  );
};
