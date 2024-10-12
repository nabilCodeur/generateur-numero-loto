import {
  LOTO_MAIN_SIZE,
  LOTO_MAX_MAIN,
  LOTO_MAX_STAR,
  LOTO_MIN_MAIN,
  LOTO_MIN_STAR,
  LOTO_STAR_SIZE,
} from "@/constants/numbers";
import { randomNumber } from "@/utils/randomNumber";

import { ToastAndroid } from "react-native";
import { create } from "zustand";

type SeriesLoto = {
  mainSet: Set<number>;
  starSet: Set<number>;
  showResult: boolean;
  addNumberToMainSet: (payload: number) => void;
  getFullMainSet: () => void;
  addNumberToStarSet: (payload: number) => void;
  getFullStarSet: () => void;
  clearAll: () => void;
  getFullSet: () => void;
};

const useSeriesLoto = create<SeriesLoto>((set) => ({
  mainSet: new Set(),
  starSet: new Set(),
  showResult: false,
  clearAll: () =>
    set((state) => {
      return {
        starSet: new Set<number>(),
        mainSet: new Set<number>(),
        showResult: false,
      };
    }),
  addNumberToStarSet: (payload) =>
    set((state) => {
      const updatedSet = new Set(state.starSet);
      if (updatedSet.has(payload)) {
        updatedSet.delete(payload);
        return {
          starSet: new Set(updatedSet),
          mainSet: state.mainSet,
          showResult: false,
        };
      }
      if (updatedSet.size === LOTO_STAR_SIZE) {
        ToastAndroid.show(
          "Une seule étoile peut être sélectionnée",
          ToastAndroid.SHORT,
        );
      }
      if (updatedSet.size < LOTO_STAR_SIZE) {
        updatedSet.add(payload);
      }
      if (
        updatedSet.size === LOTO_STAR_SIZE &&
        state.mainSet.size === LOTO_MAIN_SIZE
      ) {
        return {
          starSet: new Set(updatedSet),
          mainSet: state.mainSet,
          showResult: true,
        };
      }

      return { starSet: new Set(updatedSet), mainSet: state.mainSet };
    }),
  getFullStarSet: () =>
    set((state) => {
      const updatedSet = new Set(state.starSet);

      while (updatedSet.size < LOTO_STAR_SIZE) {
        updatedSet.add(randomNumber(LOTO_MIN_STAR, LOTO_MAX_STAR));
      }
      return {
        starSet: new Set(updatedSet),
        mainSet: state.mainSet,
      };
    }),
  addNumberToMainSet: (payload) =>
    set((state) => {
      const updatedSet = new Set(state.mainSet);
      if (updatedSet.has(payload)) {
        updatedSet.delete(payload);
        return {
          mainSet: new Set(updatedSet),
          starSet: state.starSet,
          showResult: false,
        };
      }
      if (updatedSet.size === LOTO_MAIN_SIZE) {
        ToastAndroid.show(
          "Cinq étoiles peuvent être sélectionnées",
          ToastAndroid.SHORT,
        );
      }
      if (updatedSet.size < LOTO_MAIN_SIZE) updatedSet.add(payload);
      if (
        updatedSet.size === LOTO_MAIN_SIZE &&
        state.starSet.size === LOTO_STAR_SIZE
      ) {
        return {
          starSet: state.starSet,
          mainSet: new Set(updatedSet),
          showResult: true,
        };
      }
      return { mainSet: new Set(updatedSet), starSet: state.starSet };
    }),
  getFullMainSet: () =>
    set((state) => {
      const updatedSet: Set<number> = new Set(state.mainSet);

      while (updatedSet.size < LOTO_MAIN_SIZE) {
        updatedSet.add(randomNumber(LOTO_MIN_MAIN, LOTO_MAX_MAIN));
      }

      return { mainSet: new Set(updatedSet), starSet: state.starSet };
    }),
  getFullSet: () =>
    set((state) => {
      const updatedSetMain = new Set(state.mainSet);
      const updatedSetStar = new Set(state.starSet);

      if (
        updatedSetMain.size === LOTO_MAIN_SIZE &&
        updatedSetStar.size === LOTO_STAR_SIZE
      ) {
        updatedSetMain.clear();
        updatedSetMain.clear();
      }

      while (updatedSetMain.size < LOTO_MAIN_SIZE) {
        updatedSetMain.add(randomNumber(LOTO_MIN_MAIN, LOTO_MAX_MAIN));
      }
      while (updatedSetStar.size < LOTO_STAR_SIZE) {
        updatedSetStar.add(randomNumber(LOTO_MIN_STAR, LOTO_MAX_STAR));
      }

      return {
        starSet: new Set(updatedSetStar),
        mainSet: new Set(updatedSetMain),
        showResult: true,
      };
    }),
}));

export default useSeriesLoto;
