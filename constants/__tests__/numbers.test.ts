import * as constants from "../numbers";

describe("check constants values", () => {
    const toto = 4
    test("LOTO", () => {
        // Les boules du loto vont de 1 à 49 puis de 1 = 10
        expect(constants.LOTO_MAIN_SIZE).toBe(5)
        expect(constants.LOTO_MIN_MAIN).toBe(1)
        expect(constants.LOTO_MAX_MAIN).toBe(49)
        expect(constants.LOTO_STAR_SIZE).toBe(1)
        expect(constants.LOTO_MIN_STAR).toBe(1)
        expect(constants.LOTO_MAX_STAR).toBe(10)

    }
    )
}
)