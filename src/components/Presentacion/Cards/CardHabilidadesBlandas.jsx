

export const CardHabilidadesBlandas = ({habilidad}) => {
  console.log(habilidad)
   if (!habilidad) return null;
  
  return (
    <>
        <div className="card mt-2 card-custom" style={{ minHeight: "218px" }}>
            <div className="card-body text-center">
                <h5 className="card-title">🧠 Habilidades Blandas</h5>
                <ul className="text-start mt-2">
                <li>{habilidad.habilidad1}</li>
                <li>{habilidad.habilidad2}</li>
                <li>{habilidad.habilidad3}</li>
                <li>{habilidad.habilidad4}</li>
                <li>{habilidad.habilidad5}</li>
                </ul>
            </div>
        </div>
    </>
  )
}


