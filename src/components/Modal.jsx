import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

export const Modal = () => {

  const initialState = {
    nombre: '',
    asunto: '',
    email: '',
    mensaje: ''
  }

  const [isOpen, setIsOpen] = useState(false);

  const {onInputChange, formState, onResetForm} = useForm(initialState, false)

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/meokobbz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: formState.nombre,
          email: formState.email,
          asunto: formState.asunto,
          mensaje: formState.mensaje
        })
      });

      if (response.ok) {
        Swal.fire({
          title: 'Correo enviado.',
          text: 'Correo enviado correctamente',
          icon: 'success',
          iconColor: '#540175',
          confirmButtonText: 'OK',
          confirmButtonColor: '#540175',
          background: '#111111',
          color: '#ffffff',
          customClass: {
            popup: 'rounded-swal'  // clase personalizada
          }
        })
        onResetForm();
        setIsOpen(false);
      } else {
         Swal.fire({
          title: 'Error al enviar el correo.',
          text: 'Por favor, intenta nuevamente.',
          icon: 'error',
          iconColor: '#ff4d4f',
          confirmButtonText: 'OK',
          confirmButtonColor: '#540175',
          background: '#111111',
          color: '#ffffff',
          customClass: {
            popup: 'rounded-swal'  // clase personalizada
          }
        })
      }
    } catch (error) {
      console.error("Error:", error);
       Swal.fire({
          title: 'Error al enviar el correo.',
          text: 'Por favor, intenta nuevamente.',
          icon: 'error',
          iconColor: '#ff4d4f',
          confirmButtonText: 'OK',
          confirmButtonColor: '#540175',
          background: '#111111',
          color: '#ffffff',
          customClass: {
            popup: 'rounded-swal'  // clase personalizada
          }
        })
    }
  };

  return (
    <>
      <button className="nav-link w-100 text-start" onClick={() => setIsOpen(true)}>
        Contáctame
      </button>

      {isOpen && (
        <div className="modal show fade d-block modal-blur-overlay" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content text-light card-form animate-modal">
              <div className="modal-header">
                <h5 className="modal-title">Contáctame</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setIsOpen(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      className="form-control input-custom"
                      value={formState.nombre}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control input-custom"
                      value={formState.email}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Asunto</label>
                    <input
                      type="text"
                      name="asunto"
                      className="form-control input-custom"
                      value={formState.asunto}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea
                      name="mensaje"
                      className="form-control input-custom"
                      rows="4"
                      value={formState.mensaje}
                      onChange={onInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-custom">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
