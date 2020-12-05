import {Bottles} from './99_bottles.js'

describe('99_bottle', () => {
    it('Should receive a common verse and return that common verse song', () => {
        //GIVEN
        const given = 99
        //WHEN
        let actual = new Bottles()
        actual = actual.getVerse(given)
        //THEN
        expect(actual).toBe('99 bottles of beer on the wall, 99 bottles of beer.Take one down and pass it around, 98 bottles of beer on the wall.')
    })

    it('Should receive the second verse and return that verse song', () => {
        //GIVEN
        const given = 2
        //WHEN
        let actual = new Bottles()
        actual = actual.getVerse(given)
        //THEN
        expect(actual).toBe('2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.')
    })

    it('Should receive the first verse and return that verse song', () => {
        //GIVEN
        const given = 1
        //WHEN
        let actual = new Bottles()
        actual = actual.getVerse(given)
        //THEN
        expect(actual).toBe('1 bottle of beer on the wall, 1 bottle of beer.Take it down and pass it around, no more bottles of beer on the wall.')
    })

    it('Should receive the zero verse and return that verse song', () => {
        //GIVEN
        const given = 0
        //WHEN
        let actual = new Bottles()
        actual = actual.getVerse(given)
        //THEN
        expect(actual).toBe('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.')
    })

    it('Should receive a verse and return full song since this verse', () => {
        //GIVEN
        const given = 22
        //WHEN
        let actual = new Bottles()
        actual = actual.songFromVerse(given)
        //THEN
        expect(actual).toBe('22 bottles of beer on the wall, 22 bottles of beer.Take one down and pass it around, 21 bottles of beer on the wall.21 bottles of beer on the wall, 21 bottles of beer.Take one down and pass it around, 20 bottles of beer on the wall.20 bottles of beer on the wall, 20 bottles of beer.Take one down and pass it around, 19 bottles of beer on the wall.19 bottles of beer on the wall, 19 bottles of beer.Take one down and pass it around, 18 bottles of beer on the wall.18 bottles of beer on the wall, 18 bottles of beer.Take one down and pass it around, 17 bottles of beer on the wall.17 bottles of beer on the wall, 17 bottles of beer.Take one down and pass it around, 16 bottles of beer on the wall.16 bottles of beer on the wall, 16 bottles of beer.Take one down and pass it around, 15 bottles of beer on the wall.15 bottles of beer on the wall, 15 bottles of beer.Take one down and pass it around, 14 bottles of beer on the wall.14 bottles of beer on the wall, 14 bottles of beer.Take one down and pass it around, 13 bottles of beer on the wall.13 bottles of beer on the wall, 13 bottles of beer.Take one down and pass it around, 12 bottles of beer on the wall.12 bottles of beer on the wall, 12 bottles of beer.Take one down and pass it around, 11 bottles of beer on the wall.11 bottles of beer on the wall, 11 bottles of beer.Take one down and pass it around, 10 bottles of beer on the wall.10 bottles of beer on the wall, 10 bottles of beer.Take one down and pass it around, 9 bottles of beer on the wall.9 bottles of beer on the wall, 9 bottles of beer.Take one down and pass it around, 8 bottles of beer on the wall.8 bottles of beer on the wall, 8 bottles of beer.Take one down and pass it around, 7 bottles of beer on the wall.7 bottles of beer on the wall, 7 bottles of beer.Take one down and pass it around, 6 bottles of beer on the wall.6 bottles of beer on the wall, 6 bottles of beer.Take one down and pass it around, 5 bottles of beer on the wall.5 bottles of beer on the wall, 5 bottles of beer.Take one down and pass it around, 4 bottles of beer on the wall.4 bottles of beer on the wall, 4 bottles of beer.Take one down and pass it around, 3 bottles of beer on the wall.3 bottles of beer on the wall, 3 bottles of beer.Take one down and pass it around, 2 bottles of beer on the wall.2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.1 bottle of beer on the wall, 1 bottle of beer.Take it down and pass it around, no more bottles of beer on the wall.No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.')
    })
})