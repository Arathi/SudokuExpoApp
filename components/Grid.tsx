import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type ViewStyleProps = StyleProp<ViewStyle>;

const styles = StyleSheet.create({
  container: {},
  grid: {},
  row: {
    flexDirection: 'row',
  },
  rowFirst: {},
  column: {
    flexDirection: 'column',
  },
  columnFirst: {},
});

type GridProps = {
  gap?: number;
  padding?: number;
  style?: ViewStyleProps;
  cells: React.JSX.Element[];
};
export default function Grid({
  gap = 1,
  padding = 0,
  style = {},
  cells = [],
}: GridProps) {
  return (
    <View style={[styles.grid, style, {
      padding: padding,
    }]}>
      <Row gap={gap} cells={[cells[0], cells[1], cells[2]]}/>
      <Row style={{paddingTop: gap}} gap={gap} cells={[cells[3], cells[4], cells[5]]}/>
      <Row style={{paddingTop: gap}} gap={gap} cells={[cells[6], cells[7], cells[8]]}/>
    </View>
  );
}

type RowProps = {
  gap?: number;
  cells: React.JSX.Element[];
  style?: ViewStyleProps;
};
function Row({
  gap = 1,
  cells = [],
  style = {},
}: RowProps) {
  return (
    <View style={[styles.row, style]}>
      <Column style={{}} cell={cells[0]}/>
      <Column style={{paddingLeft: gap}} cell={cells[1]}/>
      <Column style={{paddingLeft: gap}} cell={cells[2]}/>
    </View>
  );
}

type ColumnProps = {
  cell?: React.JSX.Element;
  style?: ViewStyleProps;
};
function Column({
  cell,
  style = {},
}: ColumnProps) {
  return (
    <View style={[styles.column, style]}>
      {cell}
    </View>
  );
}
