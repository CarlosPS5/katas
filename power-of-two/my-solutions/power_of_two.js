export function powerOfTwo(numbers){
    const list = []

    if(numbers.length <= 0) {
        return list;
    }

    for(const number of numbers){
        list.push(number ** 2);
    }

     return list;
}