
export const ProyectosFiltrados = ({ categorias, categoriaSeleccionada, setCategoriaSeleccionada }) => {
  return (
    <>
      <div className="row aling-items-center">
            <div className="col-12">
                <div className="mt-3 aling-items-center">
                <button 
                        className={`btn btn-sm me-2 ${categoriaSeleccionada === 'Todas' ? 'btn-primary' : 'btn-outline-primary'} mb-1`}
                        onClick={() => setCategoriaSeleccionada('Todas')}
                    >
                        Todas
                    </button>
                    {categorias.map(categoria => (
                        <button 
                        key={categoria}
                        className={`btn btn-sm me-2 ${categoriaSeleccionada === categoria ? 'btn-primary' : 'btn-outline-primary'} mb-1`}
                        onClick={() => setCategoriaSeleccionada(categoria)}
                        >
                        {categoria}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

