
import Sudoku from '../src/js/sudoku.js'

describe('Sudoku', () => {
  test('should correctly initialize a 9x9 grid with values of 0', () => {
    const mySudoku = new Sudoku();
    expect(mySudoku.row1).toEqual(0);
  });
});