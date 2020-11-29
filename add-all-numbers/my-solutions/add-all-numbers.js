export function getTotal(numbers) {
    let total = 0

    /**
    for(let i=0; i<numbers.length; i ++) {
        total += numbers[i]
    }
     */
    
     /*
     for(const number of numbers) {
         total += number
     }
     */

     numbers.forEach(function(number,index) {
         total += number
     });
    return total
}