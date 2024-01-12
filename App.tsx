import { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { windowSizeState, screenSizeState, windowOrientationGetter, Orientation } from './store/Dimensions';
import Landscape from './layouts/Landscape';
import Portrait from './layouts/Portrait';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <RecoilRoot>
      <SudokuApp />
    </RecoilRoot>
  );
}

function SudokuApp() {
  const [windowSize, setWindowSize] = useRecoilState(windowSizeState);
  const [screenSize, setScreenSize] = useRecoilState(screenSizeState);
  const orientation = useRecoilValue(windowOrientationGetter);
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window, screen}) => {
      setWindowSize(window);
      setScreenSize(screen);
    });
    return () => subscription?.remove();
  });

  console.info(`窗口大小：${windowSize.width}x${windowSize.height}@x${windowSize.scale}`);
  console.info(`屏幕方向：${orientation}`);

  const layout = (orientation == Orientation.Landscape) ? 
    <Landscape/> : 
    <Portrait/>
  ;

  return (
    <View style={styles.app}>
      { layout }
      <StatusBar style="auto" />
    </View>
  );
}

/*
type LayoutProps = {
  width: number;
  height: number;
  majorWidth?: number;
  minorWidth?: number;
};

function LandscapeLayout({width, height, majorWidth, minorWidth}: LayoutProps) {
  return (
    <View style={[styles.container, {
      flexDirection: 'row',
    }]}>
    </View>
  );
}

function PortraitLayout({
  width, 
  height, 
  majorWidth = 2, 
  minorWidth = 1,
}: LayoutProps) {
  const shortSide = width;
  const left = shortSide - 4*majorWidth - 6*minorWidth;
  const remainder = left % 9;
  const sudokuSize = shortSide - remainder;
  let cellSize = (left - remainder) / 9;
  console.info(`九宫格边长：${sudokuSize}，单元格边长：${cellSize}`);

  const time = '00:00:00';

  const numpadSize = sudokuSize * 0.8;

  return (
    <View style={[styles.container, {
      flexDirection: 'column'
    }]}>
      <View style={[{
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: sudokuSize,
      }]}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
          <View style={{
            flexDirection: 'row',
            paddingTop: 4,
            paddingBottom: 4,
          }}>
            <Text style={{fontWeight: 'bold', color: 'gray'}}>时间：</Text>
            <Text style={{color: 'black'}}>{time}</Text>
          </View>
        </View>
        <Sudoku
          cellSize={cellSize}
          majorWidth={majorWidth}
          minorWidth={minorWidth}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: numpadSize,
      }}>
        <View style={{
          flex: 4,
          padding: 4,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
          <Numpad />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Button title='撤销'></Button>
          <Button title='笔记'></Button>
          <Button title='提示'></Button>
          <Button title='设置'></Button>
        </View>
      </View>
    </View>
  );
}
*/
