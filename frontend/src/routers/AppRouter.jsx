import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Libreria, LibroDetalle } from "../components";
import { Inicio } from "../components/Inicio";
import { Detalle } from "../components/Detalle";
import { Gatito } from "../components/Gatito";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Libreria />} />
        <Route path="/libro/:id" element={<LibroDetalle />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/gatito" element={<Gatito />} />
      </Routes>
    </BrowserRouter>
  );
};
