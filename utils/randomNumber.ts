import {
  EUROMILLIONS_MAX_MAIN,
  EUROMILLIONS_MAX_STAR,
  EUROMILLIONS_MIN_MAIN,
  EUROMILLIONS_MIN_STAR,
  LOTO_MAX_MAIN,
  LOTO_MAX_STAR,
  LOTO_MIN_MAIN,
  LOTO_MIN_STAR,
} from "@/constants/numbers";

const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const gridBalls = (min: number, max: number): number[] => {
  const gridArray: number[] = [];
  for (let index = min; index <= max; index++) {
    gridArray.push(index);
  }
  return gridArray;
};

export { randomNumber, gridBalls };
