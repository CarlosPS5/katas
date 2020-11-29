import { getTotal } from './add-all-numbers'

describe('addAllNumbers', () => {
    it('should add all numbers', () => {
        //Given
        const given = [1,2,3]
        //When
        const actual = getTotal(given)
        //Then(toequal para array y objetos)
        //actualizar cambios git pull upstream main
        //para testear en terminal, npm test add-all-numbers
        expect(actual).toBe(6)
    })
})