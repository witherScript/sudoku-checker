export default function Sudoku(rows, columns, grids) {
  this.rows = rows;
  this.columns = columns;
  this.grids = grids;
  this.expected = 45;
  this.legal = false;
}

Sudoku.prototype.sumArr = function (array) {
  return array.reduce((a, b) => a + b, 0);
}

Sudoku.prototype.isLegal = function () {
  let sumRow = this.sumArr(this.rows);
  let sumColumn = this.sumArr(this.columns);
  let sumGrid = this.sumArr(this.grids);

  if (sumRow === this.expected && sumColumn === this.expected && sumGrid === this.expected) {
    this.legal = true;
    return true;
  }
  return false;
}


