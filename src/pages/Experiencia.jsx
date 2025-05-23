import { CardExperiencia } from "../components/Experiencia/Cards/CardExperiencia"
import { CardExperienciaProyectos } from "../components/Experiencia/Cards/CardExperienciaProyectos"
import { ImgCalendarCarrusel } from "../components/Experiencia/Carrusel/imgCalendarCarrusel"
import { useInfo } from "../hooks/useInfo"
import { useInfoFirebase } from "../hooks/useInfoFirebase"
import imgCalendar from '../imgCalendar.json'
import imgJournal from '../imgJournal.json'

      

export const Experiencia = () => {
  const { experiencia, proyectos, loading } = useInfoFirebase();
  const { info:CalendarioImg } = useInfo(imgCalendar);
  const { info:JournalImg } = useInfo(imgJournal);
 
  if (loading) return <div className="container mt-4">Cargando...</div>

  if (!experiencia || !proyectos || !CalendarioImg || !JournalImg) return <div className="container mt-4">No hay datos disponibles</div>;
  // console.log(proyectos)

  return (
    <>
      <div className="container-fluid py-5 px-5 fade-in-up">
        <h2 className="fw-bold my-4">Experiencia y proyectos importantes</h2>
        {experiencia.map((exp, index) => ( 
              <CardExperiencia 
              key={index}
              titulo={exp.titulo} 
              fecha={exp.fecha} 
              descripcion={exp.descripcion} 
              descripcion2={exp.descripcion2} 
              categoria={exp.categoria} 
              habilidades={exp.habilidades} 
              tecnologias={exp.tecnologias}
            />
        ))}

        <h2 className="fw-bold my-4 text-center">Proyectos personales</h2>
        <div className="row mt-3">
          <div className="col-md-12 col-lg-6">
                <ImgCalendarCarrusel infoList={CalendarioImg} id="imgCalendarCarrusel"/>
          </div>

          <div className="col-md-12 col-lg-6">
            <CardExperienciaProyectos nombre={proyectos[1].nombre} descripcionLarga={proyectos[1].descripcionLarga} url={proyectos[1].url}/>
          </div>

        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-lg-6">
            <ImgCalendarCarrusel infoList={JournalImg} id="imgJournalCarrusel"/>
            
          </div>
          <div className="col-md-12 col-lg-6" >
                <CardExperienciaProyectos nombre={proyectos[0].nombre} descripcionLarga={proyectos[0].descripcionLarga} url={proyectos[0].url} />
          </div>
        </div>
      </div>

      
      
    </>
  )
}


