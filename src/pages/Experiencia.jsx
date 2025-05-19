import { CardExperiencia } from "../components/Experiencia/Cards/CardExperiencia"
import experiencia from '../experiencia.json'
import { useInfo } from "../hooks/useInfo"

export const Experiencia = () => {
  const {info: exp} = useInfo(experiencia)
  console.log(exp)

  if (!exp) return <div className="container mt-4">Cargando...</div>;

  return (
    <>
      
      <div className="container-fluid py-3 px-5">
        <h2 className="fw-bold my-4">Experiencia y proyectos importantes</h2>
        {exp.map((experiencia, index) => (
          
              <CardExperiencia 
              key={index}
              titulo={experiencia.titulo} 
              fecha={experiencia.fecha} 
              descripcion={experiencia.descripcion} 
              descripcion2={experiencia.descripcion2} 
              categoria={experiencia.categoria} 
              habilidades={experiencia.habilidades} 
              tecnologias={experiencia.tecnologias}
            />
        ))}

        <h2 className="fw-bold my-4 text-center">Protectos personales</h2>
        <div className="row">
          
        </div>
      </div>

      
      
    </>
  )
}


