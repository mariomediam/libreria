import { useState } from "react";
import { flushSync } from "react-dom";

export const Gatito = () => {
  const [isThumbnail, setIsThumbnail] = useState(true);

  const handleMove = () => {
    
    document.startViewTransition(() => {
      flushSync(() => {
        setIsThumbnail((prev) => !prev);
      });
    });
  };

  return (
    // <>
    //     <span className="flex font-semibold text-gray-300 me-2">{title} </span>
    //     <img
    //     className="w-48 h-72 object-cover "
    //     src={cover}
    //     alt="Sunset in the mountains"
    //   />

    // </>

    <div>
      <div className="top-bar">
        <div className="top-bar-content">
          <h1>Move Cat</h1>
          <button
            id="moveBtn"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={handleMove}
          >
            Mover
          </button>
        </div>
        {isThumbnail && (
          <img
            src="https://res.cloudinary.com/djzsjzasg/image/upload/c_scale,w_300/v1678947391/malcolm-kee/meow_dtsn8h.png"
            alt="cat"
            // className="cat-img thumbnail"
            style={{ viewTransitionName: `gatito` }}
          />
        )}
      </div>
      {!isThumbnail && (
        <div className="cat-details">
          <p style={{ color: "white" }}>Gato 2</p>
          <img
            src="https://res.cloudinary.com/djzsjzasg/image/upload/c_scale,w_500/v1678947391/malcolm-kee/meow_dtsn8h.png"
            alt="cat2"
            // className="cat-img detailed-img"
            style={{ viewTransitionName: `gatito` }}
          />
          <div className="cat-desc">
            <h2>Cat Details</h2>
          </div>
        </div>
      )}
    </div>
  );
};
