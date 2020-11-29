export function getHighestNumber(list) {
    let maxvalue = list[0]

    if(list.length == 0) {
        return null
    }

    for(var i = 0; i<=list.length; i++) {
        if(list[i] > maxvalue) {
            maxvalue = list[i]
        }
    }
    return maxvalue
}