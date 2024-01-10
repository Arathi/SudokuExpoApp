import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  majorBorderWidth: number;
  majorBorderColor: string;
  minorBorderWidth: number;
  minorBorderColor: string;
};

const initialState: State = {
  majorBorderWidth: 3,
  majorBorderColor: '#344861',
  minorBorderWidth: 1,
  minorBorderColor: '#BFC6D4',
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<State>) => {
      state = action.payload;
    }
  },
});

export const {} = slice.actions;

export default slice.reducer;
