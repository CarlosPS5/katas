import {ChristmasTree} from './christmas-tree'

describe('christmas-tree', () => {
    it('Should receive an 1 and return a tree with one row', () => {
        //GIVEN
        const given:number = 1
        const christmasTree = new ChristmasTree();
        //WHEN
        const actual = christmasTree.tree(given);
        //THEN
        expect(actual).toBe(`
*
|`)
    })
    it('Should receive an 2 and return a tree with two rows', () => {
        //GIVEN
        const given:number = 2
        const christmasTree = new ChristmasTree();
        //WHEN
        const actual = christmasTree.tree(given);
        //THEN
        expect(actual).toBe(`
 *
***
 |`)
    })

    it('Should receive an 3 and return a tree with three rows', () => {
        //GIVEN
        const given:number = 3
        const christmasTree = new ChristmasTree();
        //WHEN
        const actual = christmasTree.tree(given);
        //THEN
        expect(actual).toBe(`
  *
 ***
*****
  |`)
    })
    

    it('Should receive an 4 and return a tree with four rows', () => {
        //GIVEN
        const given:number = 4
        const christmasTree = new ChristmasTree();
        //WHEN
        const actual = christmasTree.tree(given);
        //THEN
        expect(actual).toBe(`
   *
  ***
 *****
*******
   |`)
    })

    it('Should receive an n and return a tree with n rows', () => {
        //GIVEN
        const given:number = 9
        const christmasTree = new ChristmasTree();
        //WHEN
        const actual = christmasTree.tree(given);
        //THEN
        expect(actual).toBe(`
        *
       ***
      *****
     *******
    *********
   ***********
  *************
 ***************
*****************
        |`)
    })

})      