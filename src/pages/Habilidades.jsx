import { CardHabilidades, CardImageLogos } from '../components/Habilidades'
import { useInfo } from '../hooks/useInfo'
import logos from '../logos.json'
import habilidades from '../habilidades.json'
import curso from '../cursos.json'
import { useState } from 'react'
import { ProyectosFiltrados } from '../components/Habilidades/ProyectosFiltrados'
import { CardCursos } from '../components/Habilidades/Cards/CardCursos'

export const Habilidades = () => {
  const {info:tecnologias} = useInfo(logos)
  const {info:descHabilidades} = useInfo(habilidades)
  const {info:cursos} = useInfo(curso)

  const categorias = [...new Set(descHabilidades?.map(h => h.categoria))] || [];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  if (!tecnologias || !descHabilidades) return <div className="container mt-4">Cargando...</div>;

  const habilidadesFiltradas = categoriaSeleccionada === 'Todas'
  ? descHabilidades
  : descHabilidades.filter(h => h.categoria === categoriaSeleccionada);

  return (
    <>
      <div className="container-fluid py-3">
        <div className="text-center my-4">
          <h2 className="fw-bold">Habilidades Técnicas</h2>
          <p className="text-muted">
            Estas son las tecnologías y herramientas que he aprendido y utilizado en proyectos académicos y personales. Puedes filtrar por categoría para ver en qué áreas tengo más experiencia.
          </p>
          <ProyectosFiltrados
                  categorias={categorias}
                  categoriaSeleccionada={categoriaSeleccionada}
                  setCategoriaSeleccionada={setCategoriaSeleccionada}
                />
        </div>
        <div className="row" style={{ height: '80vh' }}>
            <div className="col-sm-4 col-md-3">
              <div className="row">             
                {tecnologias.map((logo, index) => (
                <div className="col-6 mb-3 d-flex justify-content-center" key={index}>
                  <CardImageLogos src={logo.src} alt={logo.alt} />
                </div>
                ))}
              </div>
            </div>

            <div className="col-sm-8 col-md-9 scrollable-column">
              {habilidadesFiltradas.map((deschabilidades, index) =>(
                <div className="col-md-12 d-flex justify-content-center" key={index}>
                  <CardHabilidades nombre={deschabilidades.nombre} descripcion={deschabilidades.descripcion}/>
                </div>
              ))} 
            </div>
            <div className="text-center my-4">
              <h2 className="fw-bold">Estudios adicionales</h2>
              <p className="text-muted">
                Estos son algunos cursos que he realizado, con el fin de adquirir y reforzar conocimientos.
              </p>
            </div>
            <div className="row">
              {cursos.map((curso, index) => (
                <div className="col-4 col-sm-12 col-lg-4   mb-3 d-flex justify-content-center" key={index}>
                  <CardCursos curso={curso.curso} descripcion={curso.descripcion} estado={curso.estado} url={curso.url}/>
                </div>
                ))}
              </div>
            </div>
      </div>
        
    </>
  )
}


