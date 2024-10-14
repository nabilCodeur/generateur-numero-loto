


const randomNumber = (min: number, max: number): number => {

  if (!(typeof (min) === "number" && typeof (max) === "number")) throw new Error("random number function take only numbers")
  if (min < 0 || max < 0) throw new Error("parameters randomNumber function should be positives numbers")
  if(max<=min) throw new Error("Parameter of randomNumber function max should be strictly superior to min")
    return Math.floor(Math.random() * (max - min)) + min;
};

const gridBalls = (min: number, max: number ): number[] => {
  if (!(typeof min === "number" && typeof max === "number")) {
    throw new Error("parameters of fridBalls function should be number")
  }
  if (min < 0 || max < 0) throw new Error("parameters gridBalls function should be positives numbers")
    if(max<=min) throw new Error("Parameter of gridBalls function max should be strictly superior to min")
  
  
  const gridArray: number[] = [];
  for (let index = min; index <= max; index++) {
    gridArray.push(index);
  }
  return gridArray;
};

export { gridBalls, randomNumber };

