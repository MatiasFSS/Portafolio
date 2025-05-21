import { CardImage } from "../Cards/CardImage"
import { useCarrusel } from "../../../hooks/useCarrusel";

export const ImgCalendarCarrusel = ({infoList, id}) => {
  useCarrusel(id)
  
    return (
      <>
          <div id={id} className="carousel carousel-dark slide" style={{ minHeight: "72px" }}>
              <div className="carousel-inner h-100">
                {infoList.map((info, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""} h-100`} key={index}>
                        <CardImage src={info.src} alt={info.alt} />
                    </div>
                ))} 
              </div>
          
              <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
              </button>
          </div>
      </>
    )
}

