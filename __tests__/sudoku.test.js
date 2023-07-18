
import Sudoku from '../src/js/sudoku.js'

describe('Sudoku', () => {

  test('should return false for an illegal board', () => {

    const col = [1, 2, 3, 3, 4, 5, 6, 7, 8];
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const mySudoku = new Sudoku(row, col, grid);
    expect(mySudoku.isLegal()).toEqual(false);
  });

  test('should return true for an legal board', () => {

    const col = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const mySudoku = new Sudoku(row, col, grid);
    expect(mySudoku.isLegal()).toEqual(true);
  });
});