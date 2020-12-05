import {powerOfTwo} from './power_of_two.js'

describe('power_of_two', () => {
    it('Receive an empty array and returns another empty array', () => {
        //GIVEN
        const given = []
        //WHEN
        const actual = powerOfTwo(given)
        //THEN
        expect(actual).toEqual([])
    })

    it('Receive an array with just a number and returns and array with its power value', () => {
        //GIVEN
        const given = [2]
        //WHEN
        const actual = powerOfTwo(given)
        //THEN
        expect(actual).toEqual([4])
    })

    it('Receive an array of numbers and return and array with its power values', () => {
        //GIVEN
        const given = [2,4,6]
        //WHEN
        const actual = powerOfTwo(given)
        //THEN
        expect(actual).toEqual([4,16,36])
    })
})