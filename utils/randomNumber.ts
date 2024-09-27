import { EUROMILLIONS_MAX_MAIN, EUROMILLIONS_MAX_STAR, EUROMILLIONS_MIN_MAIN, EUROMILLIONS_MIN_STAR, LOTO_MAX_MAIN, LOTO_MAX_STAR, LOTO_MIN_MAIN, LOTO_MIN_STAR } from "@/constants/numbers";


const randomNumber = (min:number,max:number):number => {
    return Math.floor(Math.random()*(max-min))+min;
}

const getSeriesNumbers = (sizeSet:number , min:number,max:number):Array<number>=>{
    const set : Set<number> = new Set()
    while (set.size<sizeSet){
        set.add(randomNumber(min,max))
        
    }
    
    return [...set]
}

const mainNumbersLoto : Array<number> =  getSeriesNumbers(5,LOTO_MIN_MAIN,LOTO_MAX_MAIN)
const starNumbersLoto : Array<number> = getSeriesNumbers(1 , LOTO_MIN_STAR,LOTO_MAX_STAR)
const mainNumbersEuromillions : Array<number> = getSeriesNumbers(5,EUROMILLIONS_MIN_MAIN,EUROMILLIONS_MAX_MAIN)
const starNumberEuromillions :  Array<number> = getSeriesNumbers(2,EUROMILLIONS_MIN_STAR,EUROMILLIONS_MAX_STAR)



export {mainNumbersLoto ,starNumbersLoto , mainNumbersEuromillions , starNumberEuromillions , getSeriesNumbers}