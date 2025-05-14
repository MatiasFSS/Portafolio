import { useEffect, useState } from "react";
import data from '../data.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { faUserGraduate,faAddressBook, faShareAlt  } from '@fortawesome/free-solid-svg-icons';


export const Presentacion = () => {
  const [info, setInfo] = useState(null)
  
  useEffect(() => {
    setInfo(data)
  }, []);

  if (!info) return <div className="container mt-4">Cargando...</div>;

  return (
    <>
      <div className="container py-4">
        <div className="row">
          {/* Columna izquierda */}
          <div className="col-md-4 col-lg-3 d-flex flex-column gap-3">
            {/* Imagen de perfil */}
            <div className="card background-cards mt-3">
              <div className="card-body text-center">
                <img
                  src="assets\img\imagenPrueba.png"
                  alt="Matías"
                  className="img-fluid rounded"
                />
                <p className="mt-2 font-items">Holaaa!</p>
              </div>
            </div>

            
            {/* Botón Descargar CV */}
            <a href="/ruta/archivo.pdf" download className="btn btn-primary">
              Descargar CV
            </a>

          </div>

          {/* Columna derecha */}
          <div className="col-md-8 col-lg-9 d-flex flex-column gap-3">
            <div className="card h-100 background-cards mt-3">
              <div className="card-body">
                <h2>{info.presentacion.nombre}</h2>
                <h4 className="text-muted">{info.presentacion.titulo}</h4>
                <div className="mt-4">
                  <p>{info.presentacion.descripcion}</p>
                  <p>{info.presentacion.descripcion2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 justify-content-around">
          <div className="col-sm-12 col-md-4 d-flex flex-column gap-3 my-2">
              {/* Contacto */}
              <div className="card background-cards h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold"><FontAwesomeIcon icon={faAddressBook} style={{ color: 'black' }} /> Contacto</h5>
                  <p><strong>Teléfono:</strong> {info.contacto.telefono}</p>
                  <p><strong>Email:</strong> {info.contacto.email}</p>
                  <p><strong>Ubicación:</strong> {info.contacto.ubicacion}</p>
                </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column gap-3 my-2">
            {/* Educacion */}
              <div className="card background-cards h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold"><FontAwesomeIcon icon={faUserGraduate} style={{ color: 'black' }}/> Educación</h5>
                    <p className="fw-semibold">{info.educacion.carrera}</p>
                    <p className="text-muted">{info.educacion.universidad}</p>
                    <p className="text-muted">{info.educacion.fecha}</p>
                    <p>{info.educacion.ciudad}</p>           
                </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column gap-3 my-2">
                {/* Linkedin y Github */}
               <div className="card background-cards h-100">
                  <div className="card-body">
                      <h5 className="card-title fw-bold"><FontAwesomeIcon icon={faShareAlt } style={{ color: 'black' }} /> Redes Profesionales</h5>
                      <div className="d-flex justify-content-around align-items-center pt-2">
                        <div className="text-center">
                          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" style={{ color: '#0e76a8' }}>
                            <FontAwesomeIcon icon={faLinkedin} size="4x" />
                          </a>
                          <p className="fw-semibold">LinkedIn</p>
                        </div>
                        <div className="text-center">
                          <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                            <FontAwesomeIcon icon={faSquareGithub} size="4x" />
                          </a>
                          <p className="fw-semibold">Github</p>
                        </div>
                      </div>      
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}


