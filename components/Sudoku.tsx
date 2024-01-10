import { StyleProp, View, ViewStyle } from 'react-native';
import Cell from './Cell';
import styles, { 
  CellSizeDefault,
  MajorWidthDefault,
  MinorWidthDefault,
} from './styles';

type SudokuProps = {
  cellSize?: number;
  majorWidth?: number;
  minorWidth?: number;
};
export default function Sudoku({
  cellSize = CellSizeDefault,
  majorWidth = MajorWidthDefault,
  minorWidth = MinorWidthDefault,
}: SudokuProps) {
  const grids = [];
  const gridSize = cellSize*3 + minorWidth*2;
  for (let y=0; y<3; y++) {
    for (let x=0; x<3; x++) {
      const key = `grid-${x+1}-${y+1}`;
      const style: StyleProp<ViewStyle> = {
        width: gridSize,
        height: gridSize,
        left: gridSize * x + majorWidth * (x + 1),
        top: gridSize * y + majorWidth * (y + 1),
      };
      grids.push(<View key={key} style={[styles.grid, style]}/>);
    }
  }

  const cells = [];
  for (let y=0; y<9; y++) {
    for (let x=0; x<9; x++) {
      const key = `cell-${x+1}-${y+1}`;
      cells.push(
        <Cell 
          key={key}
          x={x}
          y={y}
          size={cellSize}
          majorWidth={majorWidth}
          minorWidth={minorWidth}
        />
      );
    }
  }

  const size = 9*cellSize + 4*majorWidth + 6*minorWidth;
  const style: StyleProp<ViewStyle> = {
    width: size,
    height: size,
  };
  return (
    <View style={[styles.sudoku, style]}>
      {grids}
      {cells}
    </View>
  );
}
