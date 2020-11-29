export function getList(number) {
    let list = []

    for(let i = 1; i<=number; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            list.push('fizzbuzz')
        } else if (i % 3 == 0) {
            list.push('fizz')
        } else if(i % 5 == 0) {
            list.push('buzz')
        } else {
            list.push(i)
        }
    }
    return list
}