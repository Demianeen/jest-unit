const mapToString = require('./mapArrayToString')

describe('mapToString', () => {
    test('Correct value - only numbers', () => {
        expect(mapToString([1, 2, 3])).toStrictEqual(['1', '2', '3'])
    })

    test('Correct value - different types', () => {
        expect(mapToString([1, 2, 3, 'string', undefined, null])).toStrictEqual(['1', '2', '3'])
    })

    test('Empty array', () => {
        expect(mapToString([])).toStrictEqual([])
    })

    test('Negation', () => {
        expect(mapToString([])).not.toStrictEqual([1])
    })
})