import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

import { useState } from "react";
import { useLibrary } from "../store/useLibrary";

export const LibroMiniatura = ({ book, isThumbnail, handleMove}) => {
  const navigate = useNavigate();

  const toggleReading = useLibrary((state) => state.toggleReading);
const [showImage, setShowImage] = useState(true)
  

  const onClicToggleReading  = async (event) => {
    event.preventDefault();
    setShowImage(false)
    toggleReading(book.ISBN);
    handleMove();
  };

  const { title, cover, ISBN } = book;
  return (
    // <div className="rounded overflow-hidden shadow-lg mx-2 mt-2 mb-5 max-w-xs">
    //   <div className="flex items-center">
    //     {/* <picture className="mb-8 w-full relative"> */}
    //     <img
    //       className="w-20 h-full object-cover"
    //       src={cover}
    //       alt="Sunset in the mountains"
    //       style={{ viewTransitionName: `book-${ISBN}` }}
    //     />
    //     {/* </picture> */}
    //   </div>
    //   <div className="ml-2 font-semibold text-gray-300">{title}</div>
    // </div>

    <div className="rounded  shadow-lg mx-2 mt-2 mb-5 max-w-xs">
      <div className="flex max-w-xs">
        {(isThumbnail && showImage) && (
          <img
            className="w-20 h-full object-cover"
            src={cover}
            alt="Sunset in the mountains"
            style={{ viewTransitionName: `book-${ISBN}` }}
          />
        )}
        <div className="ml-2 font-semibold text-gray-300 overflow-hidden w-full">
          <div className="flex ">
            <button
              type="button"
              className="ml-auto justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-5 w-5 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-message-cta"
              aria-label="Close"
              onClick={onClicToggleReading}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="">
            <p className="break-words">{title}</p>
          </div>
        </div>{" "}
        {/* Agregamos margen izquierdo para separar la imagen del título */}
      </div>
    </div>
  );
};
