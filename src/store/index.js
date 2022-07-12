import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import auth from './auth'

export const store = configureStore({
  reducer: {
    user,
    auth,
  },
})
