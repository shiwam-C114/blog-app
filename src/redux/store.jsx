import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './reducer'

export const store = configureStore({
  reducer: UserSlice,
})