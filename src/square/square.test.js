const square = require('./square')

describe('square', () => {
    let mockValue;
    // applied before every test
    beforeEach(() => {
        // add user to db
    })
    // applied once before all tests
    beforeAll(() => {
      mockValue = Math.random()
    })

    test('Correct value', () => {
        // expect(square(mockValue)).toBe(Math.pow(mockValue, 2))
        // // expect(square(mockValue)).toBeLessThan(5)
        // // expect(square(mockValue)).toBeGreaterThanOrEqual(3)
        // expect(square(mockValue)).not.toBeUndefined()
        const spyOnMathPow = jest.spyOn(Math, 'pow')
        square((mockValue))
        expect(spyOnMathPow).toBeCalledTimes(1)
    })

    test('Correct value', () => {
        // expect(square(mockValue)).toBe(Math.pow(mockValue, 2))
        // // expect(square(mockValue)).toBeLessThan(5)
        // // expect(square(mockValue)).toBeGreaterThanOrEqual(3)
        // expect(square(mockValue)).not.toBeUndefined()
        const spyOnMathPow = jest.spyOn(Math, 'pow')
        square((1))
        expect((spyOnMathPow)).toBeCalledTimes(0)
    })


    afterEach(() => {
        // remove user from db
        jest.clearAllMocks()
    })
})
