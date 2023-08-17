import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { library } from "../data/books.json";

library.forEach((item) => {
  item.book.reading = false;
  item.book.enabled = true;
});

export const useLibrary = create(
  persist(
    (set) => ({
      library: library,
      listaLecturaIndex: [],
      genres: [...new Set(library.map((item) => item.book.genre))],
      filters: {},
      toggleReading: (ISBN) =>
        set((state) => {
          const indexBook = state.library.findIndex(
            (item) => item.book.ISBN === ISBN
          );
          const newStateReading = !state.library[indexBook].book.reading;
          state.library[indexBook].book.reading = newStateReading;

          if (newStateReading) {
            state.listaLecturaIndex.push(indexBook);
          } else {
            state.listaLecturaIndex = state.listaLecturaIndex.filter(
              (item) => item !== indexBook
            );
          }

          return {
            library: state.library,
            listaLecturaIndex: state.listaLecturaIndex,
          };
        }),
      setEnabled: (filters = {}) =>
        set((state) => {
          for (let i = 0; i < state.library.length; i++) {
            state.library[i].book.enabled = true;

            if (
              filters.hasOwnProperty("genre") &&
              state.library[i].book.genre !== filters.genre
            ) {
              state.library[i].book.enabled = false;
              continue;
            }

            if (
              filters.hasOwnProperty("pages") &&
              state.library[i].book.pages < filters.pages
            ) {
              state.library[i].book.enabled = false;
              continue;
            }
          }
          return { library: state.library, filters: filters };
        }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
       // (optional) by default, 'localStorage' is used
    }
  )
);
