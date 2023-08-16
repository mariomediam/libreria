import { useState } from "react";

import "../styles/tailwind.css";

import { Filtros } from "./Filtros";
import { LibrosDisponibles } from "./LibrosDisponibles";
import { ListaLectura } from "./ListaLectura";

export const Libreria = () => {
  const [isThumbnail, setIsThumbnail] = useState(true);

  const handleMove = () => {    
    document.startViewTransition(() => {
      flushSync(() => {
        setIsThumbnail((prev) => !prev);
      });
    });
  };

  return (
    <div className="bg-white dark:bg-black">
      <div className="flex flex-col h-screen">
        <header className="h-14 mb-3">
          <Filtros />
          <hr />
        </header>

        <div className="flex-1 flex">
          <div className="w-4/5">
            <LibrosDisponibles
              isThumbnail={isThumbnail}
              handleMove={handleMove}
            />
          </div>

          {/* <div className="bg-green-500 flex-1"> */}
          <div className="flex-1">
            <ListaLectura isThumbnail={isThumbnail} handleMove={handleMove} />
          </div>
        </div>
      </div>
    </div>
  );
};
