import React from "react";

export const LibroPieAutor = ({otherBooks = []}) => {
  return (
    <div className="grid justify-items-center">
      <p className="text-df-white text-[10px]">Más del autor</p>
      <ul className="list-inside list-disc">
        {otherBooks.map((book) => (
          <li  key={book} className="text-df-white text-[11px]">{book}</li>
        ))}
      </ul>
    </div>
  );
};
