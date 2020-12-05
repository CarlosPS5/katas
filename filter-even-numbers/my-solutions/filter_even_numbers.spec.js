import {filterEvenNumbers} from './filter_even_numbers.js'

describe('filter_even_numbers', () => {
    it('Receive an empty list of numbers and return an empty odd number list', () => {
        //GIVEN
        const given = []
        //WHEN
        const actual = filterEvenNumbers(given)
        //THEN
        expect(actual).toEqual([])
    })

    it('Receive a list of an even number and return a list with the odd number', () => {
        //GIVEN
        const given = [2]
        //WHEN
        const actual = filterEvenNumbers(given)
        //THEN
        expect(actual).toEqual([2])
    })

    it('Receive a list of even non even numbers and return a filtered even numbers list', () => {
        //GIVEN
        const given = [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6]
        //WHEN
        const actual = filterEvenNumbers(given)
        //THEN
        expect(actual).toEqual([-6,-4,-2,0,2,4,6])
    })
})