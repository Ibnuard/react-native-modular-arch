import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import profileSlice from '../modules/alpha/redux/slices/profileSlice';

export const store = configureStore({
  reducer: {
    userAuth: authSlice,
    alphaProfile: profileSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
