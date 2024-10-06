import { mainNumbersLoto, randomNumber } from "@/utils/randomNumber";
import { create } from "zustand";

let a = 3;

type Series = {
  currentSeries: Set<number>;
  setInitialSeries: (payload: { set: Set<number>; size: number }) => void;
  addFive: (payload: number) => void;
};

const initialSet: Set<number> = new Set();

const useSeries = create<Series>((set) => {
  return {
    currentSeries: initialSet,
    setInitialSeries: (payload) =>
      set((state) => {
        const intermediarSet: Set<number> = new Set(state.currentSeries);
        while (state.currentSeries.size < payload.size) {
          intermediarSet.add(randomNumber(1, 49));
        }
        return { currentSeries: { ...intermediarSet } };
      }),
    addFive: (payload) =>
      set((state) => ({
        currentSeries: { ...state.currentSeries, payload },
      })),
  };
});

export default useSeries;
