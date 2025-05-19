import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CardInfo = ({icon, title, children}) => {
  return (
    <>
        <div className="card mt-2" style={{ minHeight: "210px" }}>
            <div className="card-body">
                <h5 className="card-title fw-bold"><FontAwesomeIcon icon={icon} style={{ color: 'black' }} />{title}</h5>
                {children}
            </div>
        </div>

    </>
  )
}


