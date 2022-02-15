import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from './middleware/logger';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: {
      ignoredPaths: ['auth', 'auth.error']
    },
  }).concat(process.env.NODE_ENV === 'production' ? null : logger),
  devTools: process.env.NODE_ENV === 'production' ? false : true,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export default store