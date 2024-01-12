import { Dimensions } from "react-native";
import { atom, selector } from "recoil";

export const windowSizeState = atom({
  key: 'windowSizeState',
  default: Dimensions.get('window'),
});

export const screenSizeState = atom({
  key: 'screenSizeState',
  default: Dimensions.get('screen'),
});

export const windowWidthGetter = selector({
  key: 'windowWidthGetter',
  get: ({get}) => {
    const size = get(windowSizeState);
    return size.width;
  }
});

export const windowHeightGetter = selector({
  key: 'windowHeightGetter',
  get: ({get}) => {
    const size = get(windowSizeState);
    return size.height;
  }
});

export const windowScaleGetter = selector({
  key: 'windowScaleGetter',
  get: ({get}) => {
    const size = get(windowSizeState);
    return size.scale;
  }
});

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
}

export const windowOrientationGetter = selector({
  key: 'windowOrientationGetter',
  get: ({get}) => {
    const {width, height} = get(windowSizeState);
    return (width > height) ? Orientation.Landscape : Orientation.Portrait;
  }
});

export const windowShortSideGetter = selector({
  key: 'windowShortSideGetter',
  get: ({get}) => {
    const {width, height} = get(windowSizeState);
    return (width > height) ? height : width;
  }
});
