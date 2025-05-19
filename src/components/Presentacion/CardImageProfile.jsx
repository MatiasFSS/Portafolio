

export const CardImageProfile = () => {
  return (
    <>
        <div className="card mt-3 h-100">
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
         
    </>
  )
}


