import { useState } from "react";
import { useLibrary } from "../store/useLibrary";

export const Filtros = () => {
  let genres = useLibrary((state) => state.genres);
  const setEnabled = useLibrary((state) => state.setEnabled);
  const filters = useLibrary((state) => state.filters);
  const [pages, setPages] = useState(filters.pages || 0)

  genres = ["Todos", ...genres];

  const onSelectGenreChange = (event) => {
    const genre = event.target.value;
    if (genre === "Todos") {
      delete filters.genre;
      setEnabled(filters);
      return;
    }
    setEnabled({ ...filters, genre: genre });
  };

  const onPagesChange = (event) => {
    const pages = event.target.value;
    setPages(pages);
    setEnabled({ ...filters, pages: pages });
  };

  return (
    <div className="flex items-center justify-center m-4">
      <span className="flex font-semibold text-gray-300 me-2">Genero: </span>
      <select onChange={onSelectGenreChange} defaultValue={filters.genre}>        
        {genres.map((genre) => (
          <option key={genre} >{genre}</option>
        ))}
      </select>

      <label
        htmlFor="steps-range"        
        className="flex font-semibold text-gray-300 me-2 ms-5"
      >
        {pages}+ páginas
      </label>
      <input
        id="steps-range"
        type="range"
        min="0"
        max="1000"
        value={pages}
        step="250"
        onChange={onPagesChange}
        className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-white"        
      />
    </div>
  );
};
