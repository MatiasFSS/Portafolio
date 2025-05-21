import { CardExperiencia } from "../components/Experiencia/Cards/CardExperiencia"
import { CardExperienciaProyectos } from "../components/Experiencia/Cards/CardExperienciaProyectos"
import { ImgCalendarCarrusel } from "../components/Experiencia/Carrusel/imgCalendarCarrusel"
import experiencia from '../experiencia.json'
import { useInfo } from "../hooks/useInfo"
import imgCalendar from '../imgCalendar.json'
import imgJournal from '../imgJournal.json'
import proyectos from '../proyectos.json'


export const Experiencia = () => {
  const {info: exp} = useInfo(experiencia)
  const { info:CalendarioImg } = useInfo(imgCalendar);
  const { info:JournalImg } = useInfo(imgJournal);
  const {info: expProyectos} = useInfo(proyectos)
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
        <div className="row mt-3">
          <div className="col-md-12 col-lg-6">
                <ImgCalendarCarrusel infoList={CalendarioImg} id="imgCalendarCarrusel"/>
          </div>

          <div className="col-md-12 col-lg-6">
            <CardExperienciaProyectos nombre={expProyectos.proyecto2.nombre} descripcionLarga={expProyectos.proyecto2.descripcionLarga} url={expProyectos.proyecto2.url}/>
          </div>

        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-lg-6">
            <ImgCalendarCarrusel infoList={JournalImg} id="imgJournalCarrusel"/>
            
          </div>
          <div className="col-md-12 col-lg-6" >
                <CardExperienciaProyectos nombre={expProyectos.proyecto1.nombre} descripcionLarga={expProyectos.proyecto1.descripcionLarga} url={expProyectos.proyecto1.url} />
          </div>
        </div>
      </div>

      
      
    </>
  )
}


