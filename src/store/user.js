import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  uid: '',
  avatar: '',
  full_name: '',
  email: '',
  gender: '',
  birth_date: '',
  location: '',
  biography: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload
    },
    setUserUid: (state, action) => {
      state.uid = action.payload
    },
    setUserAvatar: (state, action) => {
      state.avatar = action.payload
    },
    setUserFullName: (state, action) => {
      state.full_name = action.payload
    },
    setUserEmail: (state, action) => {
      state.email = action.payload
    },
    setUserGender: (state, action) => {
      state.gender = action.payload
    },
    setUserBirthDate: (state, action) => {
      state.birth_date = action.payload
    },
    setUserLocation: (state, action) => {
      state.location = action.payload
    },
    setUserBiography: (state, action) => {
      state.biography = action.payload
    },
  },
})

export const {
  setUserId,
  setUserUid,
  setUserAvatar,
  setUserFullName,
  setUserEmail,
  setUserGender,
  setUserBirthDate,
  setUserLocation,
  setUserBiography,
} = userSlice.actions

export default userSlice.reducer
