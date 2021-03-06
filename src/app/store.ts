import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lotteryReducer from '../app/components/lottery/lotterySlice';

export const store = configureStore({
  reducer: {
    lottery: lotteryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
