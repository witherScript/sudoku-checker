export default function Sudoku(a, b, c) {
  this.row1 = a[0];
  this.row2 = a[1];
  this.row3 = a[2];
  this.row4 = a[3];
  this.row5 = a[4];
  this.row6 = a[5];
  this.row7 = a[6];
  this.row8 = a[7];
  this.row9 = a[8];

  this.row = [this.row1, this.row2, this.row3, this.row4,
  this.row5, this.row6, this.row7, this.row8, this.row9];

  this.column1 = b[0];
  this.column2 = b[1];
  this.column3 = b[2];
  this.column4 = b[3];
  this.column5 = b[4];
  this.column6 = b[5];
  this.column7 = b[6];
  this.column8 = b[7];
  this.column9 = b[8];

  this.column = [this.column1, this.column2, this.column3, this.column4,
  this.column5, this.column6, this.column7, this.column8, this.column9];


  this.grid1 = c[0];
  this.grid2 = c[1];
  this.grid3 = c[2];
  this.grid4 = c[3];
  this.grid5 = c[4];
  this.grid6 = c[5];
  this.grid7 = c[6];
  this.grid8 = c[7];
  this.grid9 = c[8];

  this.grid = [this.grid1, this.grid2, this.grid3, this.grid4,
  this.grid5, this.grid6, this.grid7, this.grid8, this.grid9];

  this.expected = 45;
  this.legal = false;
}

Sudoku.prototype.sumArr = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

Sudoku.prototype.isLegal = function () {
  let sumRow = this.sumArr(this.row);
  let sumColumn = this.sumArr(this.column);
  let sumGrid = this.sumArr(this.grid);

  if (sumRow === 45 && sumColumn === 45 && sumGrid === 45) {
    this.legal = true;
    return true;
  }
  return false;
}

