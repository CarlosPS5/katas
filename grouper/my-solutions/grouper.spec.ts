import {groupPeople} from './grouper'
describe('grouper', () => {
    it('should receive an array of persons and returns an object with key:age and value an array of names', () => {
        //GIVEN
        const given: {age:number;name:string}[] = [{"age":10,"name":"Carlos"}, {"age":10,"name":"Arturo"}, {"age":15,"name":"Marta"}, {"age":15,"name":"Antonio"}]
        //WHEN
        const actual: Object = groupPeople(given)
        //THEN
        expect(actual).toEqual({10:["Carlos","Arturo"],15:["Marta","Antonio"]})
    })
})