import { configureStore } from '@reduxjs/toolkit'
import basketSlice from "../features/basketSlice"

export const store = configureStore({
  reducer: {
    basket: basketSlice
  },
})