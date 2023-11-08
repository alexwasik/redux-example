import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Alex',
  userName: 'alex',
  email: 'testing@testing.com'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name
      state.userName = action.payload.userName
      state.email = action.payload.email
    },
    logout: (state) => {
      state.name = null
      state.userName = null
      state.email = null
    }
  }
})


export const { login, logout } = userSlice.actions
export default userSlice.reducer
