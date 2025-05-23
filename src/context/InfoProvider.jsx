import { useEffect, useState } from "react";
import { getDoc, getDocs, doc, collection } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";
import { InfoContext } from "./InfoContext";


export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState({
    cursos: [],
    proyectos: [],
    experiencia: [],
    habilidades: [],
    data: {}
  });

  const [loading, setLoading] = useState(true);

  const loadCollection = async (name) => {
    const ref = collection(FirebaseDB, name);
    const snapshot = await getDocs(ref);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const loadData = async () => {
    const contactoSnap = await getDoc(doc(FirebaseDB, "data", "contacto"));
    const educacionSnap = await getDoc(doc(FirebaseDB, "data", "educacion"));
    const presentacionSnap = await getDoc(doc(FirebaseDB, "data", "presentacion"));

    return {
      contacto: contactoSnap.data(),
      educacion: educacionSnap.data(),
      presentacion: presentacionSnap.data()
    };
  };

  useEffect(() => {
    const loadAll = async () => {
      try {
        const [cursos, proyectos, experiencia, habilidades, data] = await Promise.all([
          loadCollection("cursos"),
          loadCollection("proyectos"),
          loadCollection("experiencia"),
          loadCollection("habilidades"),
          loadData()
        ]);

        setInfo({
          cursos,
          proyectos,
          experiencia,
          habilidades,
          data
        });
      } catch (error) {
        console.error("Error cargando datos del contexto:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAll();
  }, []);

  return (
    <InfoContext.Provider value={{ ...info, loading }}>
      {children}
    </InfoContext.Provider>
  );
};
