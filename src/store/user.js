import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  socketId: '',
  user: {},
  player: {},
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSocketId: (state, action) => {
      state.socketId = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
  },
});

export const { setSocketId, setUser, setPlayer } = user.actions;

export default user.reducer;
