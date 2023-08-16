import { Libro } from "./Libro";
import { useLibrary } from "../store/useLibrary";

export const LibrosDisponibles = ({isThumbnail}) => {
  const { library } = useLibrary();

  return (
    <>
      <div className="ml-2">
        <h2 className="text-4xl font-extrabold dark:text-df-green">
          Libros disponibles
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-5">
        {library
          .filter(({ book }) => !book.reading)
          .filter(({ book }) => book.enabled)
          .map(({ book }) => (
            <Libro book={book} key={book.ISBN} isThumbnail={isThumbnail} />
          ))}
      </div>
    </>
  );
};
