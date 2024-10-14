import * as utils from "@/utils/numbers";

describe("test de randomNumber", () => {
    test("result of randomNumber should be between min and max",() => {
        const min = 1
        const max = 10
        const random = utils.randomNumber(min, max)
        expect(random).toBeLessThanOrEqual(max)
        expect(random).toBeGreaterThanOrEqual(min)
    }
    ),
        test("randomNumber  should throw  on error with wrong parameters types", () => {
            const min = "1"
            const max = "50"
            
            expect(()=>utils.randomNumber(min, max)).toThrow(Error)
        }),
        test("randomNumber should throw on error with negative parameters type",() => {
            const min = -10
            const max = 3
            expect(() => {
                utils.randomNumber(min,max)
            }
            )
        }
        )
});

describe("test of gridBalls",() => {
    test("array should have specific length", () => {
        const min = 1
        const max = 50
        const expectedLength = max-min+1
        const array = utils.gridBalls(min, max)
        expect(array).toHaveLength(expectedLength)
    }
    ),
    test("array should contains only positive number",() => {
        const min = -10
        const max = 3

    }
    )
    test("array should constains gap number step 1 between two elements",() => {
        const min = 1
        const max = 3
        const array = utils.gridBalls(min, max)
        expect(array[max-1]-array[max-2]).toBe(1)
    }
    ),
    test("array should contains only numbers",() => {
        const min = 1
        const max = 3
        const array = utils.gridBalls(min, max)
        const isArrayContainsNumber = array.every((element)=>typeof element ==="number")
        expect(isArrayContainsNumber).toBeTruthy()
    }
        ),
    test("gridBAlls should throw Error with wrong type parameters",() => {
        const min = "1"
        const max = "8"
        expect(()=>utils.gridBalls(min,max)).toThrow(Error)


    }
        ),
        test("gridBAlld should throw error with max <= min",() => {
            const min = 10
            const max = 8
            expect(() => 
                utils.gridBalls(min,max)
            
            ).toThrow(Error)
        }
        )
}
)