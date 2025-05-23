

export const CardImageLogos = ({src, alt}) => {
  return (
    <>
        <div className="card mt-3 card-custom">
            <div className="card-body text-center">
                <img
                src={src}
                alt={alt}
                className="img-fluid rounded"
                width={60}
                />
            </div>
        </div>
    </>
  )
}

