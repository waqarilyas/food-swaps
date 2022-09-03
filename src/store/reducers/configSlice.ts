import {createSlice} from '@reduxjs/toolkit';
import {IConfigSlice} from '../interfaces/config.interface';

const initialState: IConfigSlice = {
  theme: 'light',
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setTheme: (state, action: {payload: 'dark' | 'light'}) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = configSlice.actions;
export default configSlice.reducer;
