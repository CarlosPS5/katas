import {fruitCounter} from './fruit_counter'

describe('fruit_counter', () => {
    it('Should receive an empty array of fruits and return an empty object', () => {
        //GIVEN
        const given: string[] = []
        //WHEN
        const actual: Record<string,number> = fruitCounter(given)
        //THEN
        expect(actual).toEqual({})
    })

    it('Should receive an array of fruits without repeated items and return an object', () => {
        //GIVEN
        const given: string[] = ['platano','manzana','pera']
        //WHEN
        const actual: Record<string,number> = fruitCounter(given)
        //THEN
        expect(actual).toEqual({'platano':1,'manzana':1,'pera':1})
    })

    it('Should receive an array of fruits with repeated items and return an object', () => {
        //GIVEN
        const given: string[] = ['platano','manzana','pera','platano','sandia','melocoton','manzana','platano']
        //WHEN
        const actual: Record<string,number> = fruitCounter(given)
        //THEN
        expect(actual).toEqual({'platano':3,'manzana':2,'pera':1,'sandia':1,'melocoton':1})
    })
})