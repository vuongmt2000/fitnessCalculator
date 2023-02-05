import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

const authentication = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    requestLogin: state => {
      state.isLogin = true;
    },
    requestLogout: state => {
      state.isLogin = false;
    },
  },
});

export const {requestLogin, requestLogout} = authentication.actions;
export default authentication.reducer;
