import { parseSync } from "@babel/core";

export function filterEvenNumbers(numbers) {
    const list = []

    if(numbers.length <= 0) {
        return list;
    }

    for(const number of numbers) {
        number % 2 == 0 ? list.push(number) : '' 
    }

    return list;
}