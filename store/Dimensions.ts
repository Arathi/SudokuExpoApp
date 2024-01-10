import { PayloadAction, createSlice, configureStore } from "@reduxjs/toolkit";
import { Dimensions, ScaledSize } from "react-native";
import { RootState, AppDispatch } from '../app/store';

type State = {
  window: ScaledSize;
  screen: ScaledSize;
}

const initialState = {
  window: Dimensions.get('window'),
  screen: Dimensions.get('screen'),
};

const slice = createSlice({
  name: 'dimensions',
  initialState,
  reducers: {
    updateAll: (state, action: PayloadAction<State>) => {
      state.window = action.payload.window;
      state.screen = action.payload.screen;
    },
    updateWindowSize: (state, action: PayloadAction<ScaledSize>) => {
      state.window = action.payload;
    },
    updateScreenSize: (state, action: PayloadAction<ScaledSize>) => {
      state.screen = action.payload;
    },
  },
});

export const {
  updateAll,
  updateWindowSize,
  updateScreenSize,
} = slice.actions;

export const selectWindowSize = (state: RootState) => state.dimensions.window;
export const selectScreenSize = (state: RootState) => state.dimensions.screen;
export default slice.reducer;
