import {addToArray} from './flat.js'

describe('flat', () => {
    it('Receive an empty array and return another empty array', () => {
        //GIVEN
        const given = []
        //WHEN
        const actual = addToArray(given)
        //THEN
        expect(actual).toEqual([])
    })

    it('Receive an array and return the same array', () => {
        //GIVEN
        const given = [1,2]
        //WHEN
        const actual = addToArray(given)
        //THEN
        expect(actual).toEqual([1,2])
    })
    
    it('Receive two arrays and return a single array merged', () => {
        //GIVEN
        const given = [[1,2],[3,4],[5,6],[-1,-2,-3]]
        //WHEN
        const actual = addToArray(...given)
        //THEN
        expect(actual).toEqual([1,2,3,4,5,6,-1,-2,-3])
    })
})