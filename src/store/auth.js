import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  refresh_token: '',
  access_token: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRefreshToken: (state, action) => {
      state.refresh_token = action.payload;
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
  },
});

export const { setRefreshToken, setAccessToken } = auth.actions;

export default auth.reducer;
