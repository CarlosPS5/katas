import { getList } from './fizz-buzz'

describe('fizz-buzz', () => {

    it('should return just numbers', () => {
        //GIVEN
        const number = 2
        //WHEN
        const actual = getList(number)
        //THEN
        expect(actual).toEqual([1,2])
    })

    it('should return just numbers and fizz', () => {
        //GIVEN
        const number = 4
        //WHEN
        const actual = getList(number)
        //THEN
        expect(actual).toEqual([1,2,'fizz',4])
    })

    it('should return just numbers fizz and buzz', () => {
        //GIVEN
        const number = 14
        //WHEN
        const actual = getList(number)
        //THEN
        expect(actual).toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14])
    })


    it('should replace all numbers correctly', () => {
        //GIVEN
        const number = 15
        //WHEN
        const actual = getList(number)
        //THEN
        expect(actual).toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz'])
    })
})