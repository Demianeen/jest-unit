const validateValue = require('./validateValue')

describe('validateValue', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true)
    })

    test('Less than the correct', () => {
        expect(validateValue(-1)).toBe(false)
    })

    test('Bigger than the correct', () => {
        expect(validateValue(101)).toBe(false)
    })

    test('Lowest boundary value', () => {
        expect(validateValue(0)).toBe(true)
    })

    test('Highest boundary value', () => {
        expect(validateValue(100)).toBe(true)
    })
})