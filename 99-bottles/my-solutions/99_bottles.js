export class Bottles {

    constructor() {
        this.verses = 99
    }

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

    songFromToVerse(start,end) {
        const verses = []
        while(!(start<end)) {
            switch(start) {
                case 0:
                    verses.push('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.')
                    start--
                    break
                case 1:
                    verses.push(''+ start +' bottle of beer on the wall, '+ start +' bottle of beer.Take it down and pass it around, no more bottles of beer on the wall.')
                    start--
                    break
                case 2:
                    verses.push('' + start +' bottles of beer on the wall, '+ start +' bottles of beer.Take one down and pass it around, '+ (start - 1) +' bottle of beer on the wall.')
                    start--
                    break
                default:
                    verses.push(''+ start +' bottles of beer on the wall, '+ start +' bottles of beer.Take one down and pass it around, '+ (start - 1) +' bottles of beer on the wall.')
                    start--
                    break
            }

        }

        let versesStr = ''
        for(const vers of verses) {
            versesStr = versesStr.concat(vers.toString())
        }

        return versesStr

    }

    singFullSong() {
        const fullSongArr = []
        while(!(this.verses < 0)) {
            switch(this.verses) {
                case 0:
                    fullSongArr.push('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.')
                    this.verses--
                    break
                case 1:
                    fullSongArr.push(''+ this.verses +' bottle of beer on the wall, '+ this.verses +' bottle of beer.Take it down and pass it around, no more bottles of beer on the wall.')
                    this.verses--
                    break
                case 2:
                    fullSongArr.push('' + this.verses +' bottles of beer on the wall, '+ this.verses +' bottles of beer.Take one down and pass it around, '+ (this.verses - 1) +' bottle of beer on the wall.')
                    this.verses--
                    break
                default:
                    fullSongArr.push(''+ this.verses +' bottles of beer on the wall, '+ this.verses +' bottles of beer.Take one down and pass it around, '+ (this.verses - 1) +' bottles of beer on the wall.')
                    this.verses--
                    break
            }
        }
        let fullSongStr = ''
        for(const vers of fullSongArr) {
            fullSongStr = fullSongStr.concat(vers.toString())
        }

        return fullSongStr
    }


}