export function fruitCounter(fruits: string[]): Record<string,number> {
    let count: Record<string,number> = {}
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