import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

// define initial state type
type TInitialState = {
  user: any;
  token: string;
};

// define initial state
const initialState: TInitialState = {
  user: null,
  token: '',
};

// create slice
const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
    },
    setSignOut: state => {
      state.user = undefined;
      state.token = '';
    },
  },
});

// export action and state

// dispatch function
export const {setSignIn, setSignOut} = authSlice.actions;

// redux selector
export const select_AUTH_userToken = (state: RootState) => state.userAuth.token;

export default authSlice.reducer;
