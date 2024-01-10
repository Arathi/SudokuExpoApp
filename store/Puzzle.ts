import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  x: number;
  y: number;
  values: number[];
  notes: number[];
  elapsed: number;
};

enum ActionType {
  Select,
  SetValue,
  ToggleNote,
}

type CellAction = {
  type: ActionType;
  x: number;
  y: number;
  value: number;
};

const initialState: State = {
  x: 0,
  y: 0,
  values: [],
  notes: [],
  elapsed: 0,
};

const slice = createSlice({
  name: 'puzzle',
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<string>) => {
      const values: number[] = [];
      const puzzle = action.payload;
      for (let index = 0; index < 81; index++) {
        let value = 0;
        if (puzzle.length > index) {
          value = Number(puzzle.charAt(index));
        }
        values.push(value);
      }
      state.values = values;
      state.notes = [];
      state.elapsed = 0;
    },
    selectCell: (state, action: PayloadAction<CellAction>) => {
      //
    },
    updateCell: (state, action: PayloadAction<CellAction>) => {
      //
    }
  }
});

export const {
  reset,
} = slice.actions;

export default slice.reducer;
