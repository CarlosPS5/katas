export function addToArray(...args) {
    //le llegan n arrays [1,2],[2,3],[3,4]...n como argumentos
    let list = []
    //recorro todo lo que le llega, para cada [X,Y] lo esparzo y lo meto en mi lista
    args.map(arg => list.push(...arg))
    return list

}