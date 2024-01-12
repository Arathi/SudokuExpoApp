import React from "react";
import { View, Text } from "react-native";
import Grid from '../components/Grid';
import { useRecoilValue } from "recoil";
import { 
  majorBorderColorState, 
  majorBorderWidthState, 
  minorBorderColorState, 
  minorBorderWidthState 
} from "../store/Settings";
import { windowShortSideGetter } from "../store/Dimensions";
import Numpad from "../components/Numpad";

export default function Portrait() {
  const shortSide = useRecoilValue(windowShortSideGetter);
  const majorWidth = useRecoilValue(majorBorderWidthState);
  const majorColor = useRecoilValue(majorBorderColorState);
  const minorWidth = useRecoilValue(minorBorderWidthState);
  const minorColor = useRecoilValue(minorBorderColorState);

  const cells: React.JSX.Element[] = [];
  for (let y=0; y<3; y++) {
    for (let x=0; x<3; x++) {
      // 生成
      const gridCells: React.JSX.Element[] = [];
      for (let gy=0; gy<3; gy++) {
        for (let gx=0; gx<3; gx++) {
          gridCells.push(
            <View style={{
              width: 38,
              height: 38,
              backgroundColor: 'white',
            }}/>
          )
        }
      }

      cells.push(
        <Grid
          style={{
            backgroundColor: minorColor,
          }}
          gap={minorWidth}
          padding={0}
          cells={gridCells}
        />
      );
    }
  }

  return (
    <View style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Grid 
        style={{
          backgroundColor: majorColor,
        }}
        gap={majorWidth}
        padding={majorWidth}
        cells={cells}
      />
      <Numpad 
        style={{
          width: shortSide * 0.8,
          height: shortSide * 0.8,
        }}
      />
    </View>
  );
}
