export class Bottles {

    constructor() {}

    getVerse(verse) {
        switch(verse) {
            case 0:
                return 'No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.'
            case 1:
                return ''+ verse +' bottle of beer on the wall, '+ verse +' bottle of beer.Take it down and pass it around, no more bottles of beer on the wall.'
            case 2:
                return '' + verse +' bottles of beer on the wall, '+ verse +' bottles of beer.Take one down and pass it around, '+ (verse - 1) +' bottle of beer on the wall.'
            default:
                return ''+ verse +' bottles of beer on the wall, '+ verse +' bottles of beer.Take one down and pass it around, '+ (verse - 1) +' bottles of beer on the wall.'
        }
    }

    songFromVerse(verse) {
        const songVerses = []
        while(!(verse < 0)) {
            switch(verse) {
                case 0:
                    songVerses.push('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.')
                    verse--
                    break
                case 1:
                    songVerses.push(''+ verse +' bottle of beer on the wall, '+ verse +' bottle of beer.Take it down and pass it around, no more bottles of beer on the wall.')
                    verse--
                    break
                case 2:
                    songVerses.push('' + verse +' bottles of beer on the wall, '+ verse +' bottles of beer.Take one down and pass it around, '+ (verse - 1) +' bottle of beer on the wall.')
                    verse--
                    break
                default:
                    songVerses.push(''+ verse +' bottles of beer on the wall, '+ verse +' bottles of beer.Take one down and pass it around, '+ (verse - 1) +' bottles of beer on the wall.')
                    verse--
                    break
            }
        }
        let finalSong = ''
        for(const song of songVerses) {
            finalSong = finalSong.concat(song.toString())
        }
        return finalSong
    }


}