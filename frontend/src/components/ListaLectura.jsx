import { useEffect, useState } from "react";

import { useLibrary } from "../store/useLibrary"
import { LibroMiniatura } from "./LibroMiniatura";

export const ListaLectura = ({isThumbnail, handleMove}) => {
    
    const library = useLibrary((state) => state.library);
    const listaLecturaIndex = useLibrary((state) => state.listaLecturaIndex);
    
    const obtieneListaLectura = () => {
        const listaLecturaTmp = []
        listaLecturaIndex.toReversed().forEach(indexBook => {
            listaLecturaTmp.push(library[indexBook])            
        });                
        return listaLecturaTmp
    }

    useEffect(() => {
        const listaLecturaTmp = obtieneListaLectura()
        setListaLectura(listaLecturaTmp)
    }, [listaLecturaIndex])
    
    const [listaLectura, setListaLectura] = useState(obtieneListaLectura())

        
    return (        
        <div className="border border-gray-100 mr-3">
            <div className="bg-df-green flex justify-center py-2">
                <p className="font-semibold text-df-">
                    Lista de Lectura
                </p>
            </div>
            <hr />
            {/* <h1 className="text-slate-900 dark:text-white mt-1 text-base font-medium tracking-tight">Lista de Lectura</h1> */}
            <ul>
                {listaLectura.map(({ book }) => (
                    <LibroMiniatura book={book} key={book.ISBN} isThumbnail={isThumbnail} handleMove={handleMove}/>
                ))}
            </ul>
        </div>
    )
}