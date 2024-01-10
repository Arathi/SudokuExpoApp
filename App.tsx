import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, Text, StyleProp, ViewStyle, Button } from 'react-native';
import Sudoku from './components/Sudoku';
import Numpad from './components/Numpad';
import { selectWindowSize, selectScreenSize, updateWindowSize, updateScreenSize } from './store/Dimensions';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';

const styles = StyleSheet.create({
  app: {},
  container: {
    flex: 3,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dimensions: {
    color: 'red',
  }
});

enum Orientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
}

export default function App() {
  return (
    <Provider store={store}>
      <SudokuApp />
    </Provider>
  );
}

function SudokuApp() {
  const windowSize = useAppSelector(selectWindowSize);
  const screenSize = useAppSelector(selectScreenSize);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window, screen}) => {
      const lastWindowSize = `${windowSize.width}x${windowSize.height}@x${windowSize.scale}`;
      const lastScreenSize = `${screenSize.width}x${screenSize.height}@x${windowSize.scale}`;
      const changedWindowSize = `${window.width}x${window.height}@x${window.scale}`;
      const changedScreenSize = `${screen.width}x${screen.height}@x${screen.scale}`;
      console.info('尺寸发生变化');
      console.info(`窗口：${lastWindowSize} -> ${changedWindowSize}`);
      console.info(`屏幕：${lastScreenSize} -> ${changedScreenSize}`);
      dispatch(updateWindowSize(window));
      dispatch(updateScreenSize(screen));
    });
    return () => subscription?.remove();
  });

  console.info(`窗口大小：${windowSize.width}x${windowSize.height}@x${windowSize.scale}`);
  let orientation: Orientation = Orientation.Portrait;
  let shortSide = windowSize.width;
  if (windowSize.width > windowSize.height) {
    orientation = Orientation.Landscape;
    shortSide = windowSize.height;
  }
  console.info(`屏幕方向：${orientation}`);

  const layout = (orientation == Orientation.Landscape) ? 
    <LandscapeLayout width={windowSize.width} height={windowSize.height} /> : 
    <PortraitLayout width={windowSize.width} height={windowSize.height} />
  ;

  return (
    <View style={styles.app}>
      { layout }
      <StatusBar style="auto" />
    </View>
  );
}

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
