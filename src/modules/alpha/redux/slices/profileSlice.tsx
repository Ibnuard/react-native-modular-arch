import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../../redux/store';

// define initial state
type TGeneratedUser = {
  name: string;
  age: number;
  point: number;
};

type TInitialState = {
  generatedUser: TGeneratedUser[];
};

const initialState: TInitialState = {
  generatedUser: [],
};

// create slices
const profileSlice = createSlice({
  name: 'alphaProfile',
  initialState,
  reducers: {
    setGeneratedUser: (state, action: PayloadAction<TGeneratedUser>) => {
      state.generatedUser.push(action.payload);
    },
  },
});

// export action and state

// dispatch function
export const {setGeneratedUser} = profileSlice.actions;

// redux selector
export const select_MDOULES_ALPHA_getGeneratedProfiles = (state: RootState) =>
  state.alphaProfile.generatedUser;

export default profileSlice.reducer;
