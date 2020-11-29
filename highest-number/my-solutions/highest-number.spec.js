import { getHighestNumber } from './highest-number'

describe('highest-number', () => {

    it('Should return just null because array is empty', () => {
        //GIVEN
        const list = [] 
        //WHEN
        const actual = getHighestNumber(list)
        //EXPECTED
        expect(actual).toBe(null)
    })

    it('Should return just the number because array has only once element', () => {
        //GIVEN
        const list = [42] 
        //WHEN
        const actual = getHighestNumber(list)
        //EXPECTED
        expect(actual).toBe(42)
    })

    it('Should return the highest number among the list of array numbers', () => {
        //GIVEN
        const list = [-1,-2,-3] 
        //WHEN
        const actual = getHighestNumber(list)
        //EXPECTED
        expect(actual).toBe(-1)
    })
})