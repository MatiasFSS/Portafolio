import { CardHabilidades, CardImageLogos } from '../components/Habilidades'
import { useInfo } from '../hooks/useInfo'
import { useInfoFirebase } from '../hooks/useInfoFirebase'
import logos from '../logos.json'
// import habilidades from '../habilidades.json'
// import curso from '../cursos.json'
import { useState } from 'react'
import { ProyectosFiltrados } from '../components/Habilidades/ProyectosFiltrados'
import { CardCursos } from '../components/Habilidades/Cards/CardCursos'

export const Habilidades = () => {
  const { cursos, habilidades, loading } = useInfoFirebase();
  const {info: tecnologias} = useInfo(logos)
 
  const categorias = [...new Set(habilidades?.map(h => h.categoria))] || [];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // console.log({ cursos, habilidades, tecnologias, loading });

  if (loading || !cursos || !habilidades || !tecnologias) {
    return <div className="container mt-4">Cargando...</div>;
  }

  const habilidadesFiltradas = categoriaSeleccionada === 'Todas'
  ? habilidades
  : habilidades.filter(h => h.categoria === categoriaSeleccionada);

  return (
    <>
      <div className="container-fluid py-5 fade-in-up">
        <div className="text-center my-4">
          <h2 className="fw-bold">Habilidades Técnicas</h2>
          <p className="text-light-muted">
            Estas son las tecnologías y herramientas que he aprendido y utilizado en proyectos académicos y personales. Puedes filtrar por categoría para ver en qué áreas tengo más experiencia.
          </p>
          
        </div>
        <div className="row">
              <div className="col-sm-4 col-md-3">
                <div className="row">             
                  {tecnologias.map((logo, index) => (
                  <div className="col-6 mb-3 d-flex justify-content-center" key={index}>
                    <CardImageLogos src={logo.src} alt={logo.alt} />
                  </div>
                  ))}
                </div>
              </div>

             <div className="col-sm-8 col-md-9 text-center">
              <div className="pb-3 z-1">
                <ProyectosFiltrados
                  categorias={categorias}
                  categoriaSeleccionada={categoriaSeleccionada}
                  setCategoriaSeleccionada={setCategoriaSeleccionada}
                />
              </div>

              <div className="scroll-dark" style={{ maxHeight: '90vh', overflowY: 'auto'}}>
                {habilidadesFiltradas.map((deschabilidades, index) => (
                  <div className="col-md-12 d-flex justify-content-center" key={index}>
                    <CardHabilidades
                      nombre={deschabilidades.nombre}
                      descripcion={deschabilidades.descripcion}
                    />
                  </div>
                ))}
              </div>
            </div>
              <div className="text-center my-4">
                <h2 className="fw-bold">Estudios Adicionales</h2>
                <p className="text-light-muted">
                  Estos son algunos cursos que he realizado, con el fin de adquirir y reforzar conocimientos.
                </p>

                <div className="row justify-content-center">
                  {cursos.map((cur, index) => (
                    <div className="col-sm-12 col-lg-4 mb-3 d-flex justify-content-center" key={index}>
                      <CardCursos curso={cur.curso} descripcion={cur.descripcion} estado={cur.estado} url={cur.url}/>
                    </div>
                    ))}
                </div>
              </div>  
            </div>
      </div>
        
    </>
  )
}


