type Basket = Record<string,number>
export function fruitCounter(fruits: string[]): Basket {
    let count: Basket = {}
    if(fruits.length <= 0) {
        return count
    }

    fruits.forEach((fruit) => {
        if(count.hasOwnProperty(fruit)) {
            count[fruit] +=1
        } else {
            count[fruit] = 1
        }
    })

    return count
        
}