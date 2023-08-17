import { useNavigate, useParams } from "react-router-dom";
import { flushSync } from "react-dom";

import { useLibrary } from "../store/useLibrary";
import { LibroPiePaginas, LibroPiePublicado, LibroPieISBN, LibroPieAutor } from ".";

export const LibroDetalle = () => {
  const navigate = useNavigate();
  const { id: ISBN } = useParams();

  const library = useLibrary((state) => state.library);
  const toggleReading = useLibrary((state) => state.toggleReading);

  const { title, cover, synopsis, genre, author, pages, year } = library.find(
    ({ book }) => book.ISBN === ISBN
  ).book;

  const onImageClick = (event) => {
    event.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate("/");        
      });
    });
  };

  const onClicLeerMasTarde = (event) => {
    toggleReading(ISBN);
    onImageClick(event);
  };

  return (
    <div className="flex justify-center m-3">
      <div className="m-4 xl:max-w-[50%]">
        <p
          className="font-semibold text-df-yellow cursor-pointer underline underline-offset-4"
          onClick={onImageClick}
        >
          &lt; Volver a libros disponibles
        </p>

        <div className="mb-4">
          <h2 className="text-4xl font-extrabold dark:text-df-green">
            {title}
          </h2>
          <p className="dark:text-df-green mb-2">De {author.name}</p>
          <hr />
        </div>

        <div className="flex flex-row">
          <div className="basis-2/4 md:basis-1/3 me-2">
            <img
              className="w-48 h-72 border border-gray-400"
              src={cover}
              alt="Sunset in the mountains"
              style={{ viewTransitionName: `book-${ISBN}` }}
            />
            <button
              type="button"
              className="text-df-white w-48 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mt-2"
              onClick={onClicLeerMasTarde}
            >
              <svg
                className="w-4 h-4 mr-2 mb-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M 11 8 C 11 7.44772 11.4477 7 12 7 C 12.5523 7 13 7.44771 13 8 V 11 H 16 C 16.5523 11 17 11.4477 17 12 C 17 12.5523 16.5523 13 16 13 H 13 V 16 C 13 16.5523 12.5523 17 12 17 C 11.4477 17 11 16.5523 11 16 V 13 H 8 C 7.44772 13 7 12.5523 7 12 C 7 11.4477 7.44771 11 8 11 H 11 V 8 Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Leer más tarde
            </button>
          </div>

          <div className="basis-2/4 md:basis-2/3 grid">
            <div>
              <p className="text-df-white mb-3">{synopsis}</p>
              <p className="text-df-white self-start">
                <span className="font-semibold">Género: </span>
                <span>{genre}</span>
              </p>
            </div>

            <div className="grid justify-items-center">
              <div className="self-end flex flex-wrap gap-3 mt-3">
                {pages && <LibroPiePaginas pages={pages} />}
                {year && <LibroPiePublicado year={year} />}
                {ISBN && <LibroPieISBN ISBN={ISBN} />}
                {author?.otherBooks?.length > 0 && (
                  <LibroPieAutor otherBooks={author.otherBooks} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
