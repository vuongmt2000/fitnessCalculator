import {createSlice} from '@reduxjs/toolkit';

export type ApplicationState = {
  isFirstOpen: boolean;
};

const initialState: ApplicationState = {
  isFirstOpen: true,
};

const application = createSlice({
  name: 'application',
  initialState,
  reducers: {
    becomeActive: state => {
      state.isFirstOpen = false;
    },
  },
});

export const {becomeActive} = application.actions;

export default application.reducer;
