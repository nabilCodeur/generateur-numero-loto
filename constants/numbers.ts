const LOTO_MAX_MAIN = 49
const LOTO_MIN_MAIN = 1
const LOTO_MIN_STAR = 1
const LOTO_MAX_STAR = 10

const EUROMILLIONS_MAX_MAIN = 50
const EUROMILLIONS_MIN_MAIN = 1
const EUROMILLIONS_MIN_STAR = 1
const EUROMILLIONS_MAX_STAR = 12

const gridNumbers = (min:number,max:number):number[] => {
    const gridArray : number[] = []
    for (let index = min; index <= max; index++){
        gridArray.push(index)
    }
    return gridArray
}


export { LOTO_MAX_MAIN,LOTO_MAX_STAR,LOTO_MIN_MAIN, LOTO_MIN_STAR , gridNumbers , EUROMILLIONS_MAX_MAIN, EUROMILLIONS_MIN_STAR, EUROMILLIONS_MIN_MAIN, EUROMILLIONS_MAX_STAR}