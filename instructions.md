
# Example of Jest Syntax

import Triangle from './../src/triangle.js';

```javascript
describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});

 describe('Triangle', () => {
  ...

  test('should correctly determine whether three lengths are not a triangle', () => {
    const notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
});
```

Each row contains all numbers from 1 to 9 with no repeats.
Each column contains all numbers from 1 to 9 with no repeats.

sum of all columns, rows, grids : +(1+2...9)

if values are repeated, then the sum wouldn't === +(1...9)


Sudoko ->
{
  this.row1;
  this.row2;
}


9 x:
1 setColumn: iterate through column 1
2 setRow: iterate through row 1
3 setGrid: 3

4 isLegal -> true/false



