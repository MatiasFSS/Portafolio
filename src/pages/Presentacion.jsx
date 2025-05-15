import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { faUserGraduate,faAddressBook, faShareAlt  } from '@fortawesome/free-solid-svg-icons';
import { CardImageProfile, CardInfo, CardPresentationProfile } from "../components/Presentacion";
import { useInfo } from "../hooks/useInfo";
import data from '../data.json'

export const Presentacion = () => {

  const {info} = useInfo(data)

  if (!info) return <div className="container mt-4">Cargando...</div>;

  return (
    <>
      <div className="container py-4">
        <div className="row">
          {/* Columna izquierda */}
          <div className="col-md-4 col-lg-3 d-flex flex-column gap-3">
            {/* Imagen de perfil y Boton de descarga*/}
            <CardImageProfile />
          </div>
          {/* Columna derecha */}
          <div className="col-md-8 col-lg-9 d-flex flex-column gap-3">
            <CardPresentationProfile
              nombre={info.presentacion.nombre}
              titulo={info.presentacion.titulo}
              descripcion={info.presentacion.descripcion}
              descripcion2={info.presentacion.descripcion2}
            />
          </div>
        </div>

        <div className="row mt-4 justify-content-around">
          <div className="col-sm-12 col-md-4 d-flex flex-column gap-3 my-2">
            {/* Contacto */}
            <CardInfo icon={faAddressBook} title=' Contacto'>
              <p><strong>Teléfono:</strong> {info.contacto.telefono}</p>
              <p><strong>Email:</strong> {info.contacto.email}</p>
              <p><strong>Ubicación:</strong> {info.contacto.ubicacion}</p>
            </CardInfo>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column gap-3 my-2">
            {/* Educacion */}
            <CardInfo icon={faUserGraduate} title=" Educación">
              <p className="fw-semibold">{info.educacion.carrera}</p>
              <p className="text-muted">{info.educacion.universidad}</p>
              <p className="text-muted">{info.educacion.fecha}</p>
              <p>{info.educacion.ciudad}</p>
            </CardInfo>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column gap-3 my-2">
            {/* Linkedin y Github */}
            <CardInfo icon={faShareAlt} title=" Redes Profesionales">
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
            </CardInfo>
          </div>
        </div>
      </div>
    </>
  )
}


