import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import {
  CellBackgroundColor,
  CellSizeDefault,
} from './styles';

type CellProps = {
  x: number;
  y: number;
  size: number;
  majorWidth: number;
  minorWidth: number;
};
export default function Cell({x, y, size, majorWidth, minorWidth}: CellProps) {
  let left = (size+minorWidth) * x + majorWidth;
  if (x >= 3) {
    left += majorWidth;
    left -= minorWidth;
  }
  if (x >= 6) {
    left += majorWidth;
    left -= minorWidth;
  }

  let top = (size+minorWidth) * y + majorWidth;
  if (y >= 3) {
    top += majorWidth;
    top -= minorWidth;
  }
  if (y >= 6) {
    top += majorWidth;
    top -= minorWidth;
  }

  const style: StyleProp<ViewStyle> = {
    width: size,
    height: size,
    left: left,
    top: top,
  };

  return (
    <View style={[styles.cell, style]}>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    position: 'absolute',
    backgroundColor: CellBackgroundColor,
    width: CellSizeDefault,
    height: CellSizeDefault,
    zIndex: 3,
  }
});
