import { CardHabilidades } from '../components/Habilidades/CardHabilidades'
import { CardImageLogos } from '../components/Habilidades/CardImageLogos'
import { useInfo } from '../hooks/useInfo'
import logos from '../logos.json'
import habilidades from '../habilidades.json'

export const Habilidades = () => {
  const {info:tecnologias} = useInfo(logos)
  const {info:descHabilidades} = useInfo(habilidades)

  if (!tecnologias || !descHabilidades) return <div className="container mt-4">Cargando...</div>;

  return (
    <>
      <div className="container py-3">
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

            <div className="col-sm-8 col-md-9 scrollable-column mt-3">
              {descHabilidades.map((deschabilidades, index) =>(
                <div className="col-md-12 d-flex justify-content-center" key={index}>
                  <CardHabilidades nombre={deschabilidades.nombre} descripcion={deschabilidades.descripcion}/>
                </div>
              ))} 
            </div>
        </div>
      </div>
        
    </>
  )
}


