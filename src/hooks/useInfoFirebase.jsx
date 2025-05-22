import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";



export const useInfoFirebase = () => useContext(InfoContext);


