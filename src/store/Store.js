import { configureStore } from '@reduxjs/toolkit'
import reducer from '../Redux/UserSlice'
 
export const store = configureStore({
  reducer: {
  user:reducer
  },
})