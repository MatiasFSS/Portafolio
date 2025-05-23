

export const CardHabilidadesBlandas = ({habilidad}) => {
  console.log(habilidad)
   if (!habilidad) return null;
  
  return (
    <>
        <div className="card mt-2 card-custom" style={{ minHeight: "210px" }}>
            <div className="card-body text-center">
                <h5 className="card-title">🧠 Habilidades Blandas</h5>
                <ul className="list-unstyled">
                <li>{habilidad.habilidad1}</li>
                <li>{habilidad.habilidad2}</li>
                <li>{habilidad.habilidad3}</li>
                </ul>
            </div>
        </div>
    </>
  )
}


