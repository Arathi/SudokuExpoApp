import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

const majorBorderColor = '#344861';
const minorBorderColor = '#BFC6D4';
const cellBackgroundColor = '#FFFFFF';
const cellSizeDefault = 64;
const majorWidthDefault = 3;
const minorWidthDefault = 1;
const sudokuSizeDefault = 9*cellSizeDefault + 4*majorWidthDefault + 6*minorWidthDefault;
const gridSizeDefault = 3*cellSizeDefault + 2*minorWidthDefault;

type SudokuProps = {
  cellSize?: number;
  majorWidth?: number;
  minorWidth?: number;
};
export default function Sudoku({
  cellSize = cellSizeDefault,
  majorWidth = majorWidthDefault,
  minorWidth = minorWidthDefault,
}: SudokuProps) {
  const grids = [];
  for (let y=0; y<3; y++) {
    for (let x=0; x<3; x++) {
      const gridSize = cellSize*3 + minorWidth*2;
      const style: StyleProp<ViewStyle> = {
        left: gridSize * x + majorWidth * (x + 1),
        top: gridSize * y + majorWidth * (y + 1),
      };
      grids.push(<View style={[styles.grid, style]}/>);
    }
  }

  const cells = [];
  for (let y=0; y<9; y++) {
    for (let x=0; x<9; x++) {
      let left = (cellSize+minorWidth) * x + majorWidth;
      if (x >= 3) {
        left += majorWidth;
        left -= minorWidth;
      }
      if (x >= 6) {
        left += majorWidth;
        left -= minorWidth;
      }

      let top = (cellSize+minorWidth) * y + majorWidth;
      if (y >= 3) {
        top += majorWidth;
        top -= minorWidth;
      }
      if (y >= 6) {
        top += majorWidth;
        top -= minorWidth;
      }

      const style: StyleProp<ViewStyle> = {
        left: left,
        top: top,
      };
      cells.push(<View style={[styles.cell, style]}/>);
    }
  }

  return (
    <View style={styles.sudoku}>
      {grids}
      {cells}
    </View>
  );
}

type GridProps = {};
function Grid() {
  return (
    <View style={styles.grid}>
    </View>
  );
}

type CellProps = {};
function Cell() {
  return (
    <View style={styles.cell}>
    </View>
  );
}

const styles = StyleSheet.create({
  sudoku: {
    position: 'relative',
    backgroundColor: majorBorderColor,
    width: sudokuSizeDefault,
    height: sudokuSizeDefault,
    zIndex: 1,
  },
  grid: {
    position: 'absolute',
    backgroundColor: minorBorderColor,
    width: gridSizeDefault,
    height: gridSizeDefault,
    zIndex: 2,
  },
  cell: {
    position: 'absolute',
    backgroundColor: cellBackgroundColor,
    width: cellSizeDefault,
    height: cellSizeDefault,
    zIndex: 3,
  }
});
