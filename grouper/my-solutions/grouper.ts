type PeopleCounter = Record<number,string[]>
export function groupPeople(people:{age:number;name:string}[]): PeopleCounter {
    const group: PeopleCounter = {}
    for(const person of people) {
       if(group.hasOwnProperty(person.age)) {
           group[person.age].push(person.name)
       } else {
           group[person.age] = [person.name]
       }

    }
    return group
}