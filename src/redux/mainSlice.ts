import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GamersState {
  gamer_1: string;
  gamer_2: string;
}

const initialState: GamersState = {
  gamer_1: '',
  gamer_2: '',
};

const MainSlice = createSlice({
  name: 'gamers',
  initialState,
  reducers: {
    setGamer1: (state, action: PayloadAction<string>) => {
      state.gamer_1 = action.payload;
    },
    setGamer2: (state, action: PayloadAction<string>) => {
      state.gamer_2 = action.payload;
    },
  },
});

export const { setGamer1, setGamer2 } = MainSlice.actions;
export default MainSlice.reducer;
