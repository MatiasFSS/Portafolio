

export const CardImage = ({src, alt}) => {
  return (
    <>
      <div className="card mt-3">
            <div className="card-body text-center"> 
                <img
                src={src}
                alt={alt}
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

