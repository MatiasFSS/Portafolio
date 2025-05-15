import { useEffect, useState } from "react";

export const useInfo = (dataInfo) => {
    const [info, setInfo] = useState(null)

    useEffect(() => {
        setInfo(dataInfo)
    }, []);

  return{
    info,
  }
}


