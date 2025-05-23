

export const CardImageProfile = () => {
  return (
    <>
        <div className="card mt-3 h-100 card-custom">
            <div className="card-body text-center background-cards">
            <img
                src="assets\img\imagenPrueba.png"
                alt="Matías"
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", 
                  borderRadius: "10px"
                }}
            />
            </div>
        </div>
        
        <a href="https://drive.google.com/file/d/1nCKiz9-HrxHOYF84zkQWE34B8O2ch8sm/view?usp=sharing" className="btn btn-custom" target="_blank" rel="noopener noreferrer" download>
          Descargar CV
        </a>
         
    </>
  )
}


