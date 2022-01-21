import 'firebase/firestore'
import { db } from "./Config";

export const addData = (setFolio, setAsesor, setFecha) => db.collection('files-morada').doc().set({
    folio: setFolio,
    asesor: setAsesor,
    fecha: setFecha,
    date: new Date(),
});

export const dataRef = db.collection('files-morada');
