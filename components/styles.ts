import { StyleSheet } from 'react-native';

const MajorBorderColor = '#344861';
const MinorBorderColor = '#BFC6D4';
const CellBackgroundColor = '#FFFFFF';

const CellSizeDefault = 64;
const MajorWidthDefault = 3;
const MinorWidthDefault = 1;

const SudokuSizeDefault = 9 * CellSizeDefault + 4 * MajorWidthDefault + 6 * MinorWidthDefault;
const GridSizeDefault = 3 * CellSizeDefault + 2 * MinorWidthDefault;

const styles = StyleSheet.create({
  sudoku: {
    position: 'relative',
    backgroundColor: MajorBorderColor,
    width: SudokuSizeDefault,
    height: SudokuSizeDefault,
    zIndex: 1,
  },
  grid: {
    position: 'absolute',
    backgroundColor: MinorBorderColor,
    width: GridSizeDefault,
    height: GridSizeDefault,
    zIndex: 2,
  },
  cell: {
    position: 'absolute',
    backgroundColor: CellBackgroundColor,
    width: CellSizeDefault,
    height: CellSizeDefault,
    zIndex: 3,
  },
});

export default styles;
export {
  CellSizeDefault,
  MajorWidthDefault,
  MinorWidthDefault,
  CellBackgroundColor,
};
