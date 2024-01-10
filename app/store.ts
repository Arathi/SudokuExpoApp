import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import dimensionsReducer from "../store/Dimensions";
import settingsReducer from '../store/Settings';
import puzzleReducer from '../store/Puzzle';

export const store = configureStore({
  reducer: {
    dimensions: dimensionsReducer,
    settings: settingsReducer,
    puzzle: puzzleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, 
  RootState, 
  unknown, 
  Action<string>
>;
