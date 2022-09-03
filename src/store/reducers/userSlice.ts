import {Action, createSlice} from '@reduxjs/toolkit';

const initialState = {
  authToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const {setAuthToken} = userSlice.actions;
export default userSlice.reducer;
