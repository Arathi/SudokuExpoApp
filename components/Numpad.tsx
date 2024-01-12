import { Pressable, StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  numpad: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  key: {
    flex: 1,
    backgroundColor: '#EAEEF4',
    margin: 4,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  keyText: {
    color: '#325AAF',
    fontSize: 48,
  }
});

type KeyProps = {
  value: number;
};
function Key({value}: KeyProps) {
  const text = `${value}`;
  return (
    <View style={styles.key}>
      <Pressable>
        <Text style={styles.keyText}>{text}</Text>
      </Pressable>
    </View>
  );
}

type NumpadProps = {
  style?: StyleProp<ViewStyle>,
};
export default function Numpad({
  style = {},
}: NumpadProps) {
  return (
    <View style={[styles.numpad, style]}>
      <View style={styles.row}>
        <Key value={1} />
        <Key value={2} />
        <Key value={3} />
      </View>
      <View style={styles.row}>
        <Key value={4} />
        <Key value={5} />
        <Key value={6} />
      </View>
      <View style={styles.row}>
        <Key value={7} />
        <Key value={8} />
        <Key value={9} />
      </View>
    </View>
  );
}
