export class ChristmasTree {
    //la raiz y la base son ramas-1 espacios
    //por cada row los espacios son ramas-(ramas-1)
    //por cada row que se baja +2
    tree(ramas:number):string {
        let tree:string = "\n"
        let hojas:number = 1
        let niveles:number = ramas
        let orden:number = ramas - 1
        
        while(niveles>0) {
           if(orden>=0) {
               tree = tree + " ".repeat(orden)
               orden--;
           }
           tree = tree + "*".repeat(hojas) + '\n'
            hojas = hojas + 2
            niveles--;
        }
        let base:string = "|"

        return tree.concat(''," ".repeat(ramas-1) + base);   
    }
}