import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

export const Libro = ({ book, isThumbnail }) => {
  const navigate = useNavigate();

  // const onClicToggleReading = () => {
  //   toggleReading(book.ISBN);
  // };

  const onClicCard = (event) => {
    event.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(`/libro/${book.ISBN}`);
      });
    });
  };

  const { title, cover, ISBN, reading } = book;
  return (
    // <li className="text-slate-900 dark:text-white mt-1 text-base font-medium tracking-tight">{title}
    //     <button className="border uppercase mix rounded-[4px] font-bold inline-block p-0.5 text-[10px]" onClick={onClicToggleReading} >Leído</button>
    // </li>

    <div className="w-48 h-full rounded overflow-hidden shadow-lg mb-6 mx-2 max-w-xs transition duration-300 ease-in-out hover:scale-110">
      <div className="border border-gray-800">
        {(!isThumbnail || !reading) && (
          <img
            className="w-48 h-72  object-cover"
            src={cover}
            alt="Sunset in the mountains"
            onClick={onClicCard}
            style={{ viewTransitionName: `book-${ISBN}` }}
          />
        )}
      </div>

      <div className="px-1 pt-1">
        <div
          className="flex font-semibold text-gray-300 me-2"
          onClick={onClicCard}
        >
          {title}
        </div>
        {/* <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p> */}
      </div>
      {/* <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div> */}
    </div>
  );
};
